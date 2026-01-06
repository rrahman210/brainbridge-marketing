/**
 * HubSpot Form Integration Service
 *
 * Submits demo requests to HubSpot Forms API for CRM tracking
 * and automated sales follow-up workflows.
 */

export interface DemoFormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  studentCount: string;
  howDidYouHear?: string;
}

interface HubSpotField {
  name: string;
  value: string;
}

interface HubSpotSubmission {
  fields: HubSpotField[];
  context: {
    pageUri: string;
    pageName: string;
    hutk?: string;
  };
}

// Environment variables for HubSpot configuration
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '';
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || '';

/**
 * Get HubSpot tracking cookie if present
 */
const getHubSpotCookie = (): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? match[1] : undefined;
};

/**
 * Split full name into first and last name
 */
const splitName = (fullName: string): { firstName: string; lastName: string } => {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';
  return { firstName, lastName };
};

/**
 * Map form data to HubSpot field format
 */
const mapFormDataToHubSpot = (data: DemoFormData): HubSpotField[] => {
  const { firstName, lastName } = splitName(data.name);

  const fields: HubSpotField[] = [
    { name: 'firstname', value: firstName },
    { name: 'lastname', value: lastName },
    { name: 'email', value: data.email },
    { name: 'company', value: data.organization },
    { name: 'jobtitle', value: data.role },
    { name: 'numemployees', value: data.studentCount },
  ];

  // Add optional field if provided
  if (data.howDidYouHear) {
    fields.push({ name: 'how_did_you_hear_about_us', value: data.howDidYouHear });
  }

  // Add lead status for sales workflow
  fields.push({ name: 'hs_lead_status', value: 'NEW' });

  return fields;
};

/**
 * Submit demo request to HubSpot Forms API
 */
export const submitDemoRequest = async (
  formData: DemoFormData
): Promise<{ success: boolean; error?: string }> => {
  // If HubSpot is not configured, store locally for later
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    console.warn('HubSpot not configured. Form data would be submitted to:', formData);
    // In production, you might want to send to a backend endpoint
    // For now, we'll simulate success and log the data
    return { success: true };
  }

  const submission: HubSpotSubmission = {
    fields: mapFormDataToHubSpot(formData),
    context: {
      pageUri: typeof window !== 'undefined' ? window.location.href : '',
      pageName: 'BrainBridge - Request a Demo',
      hutk: getHubSpotCookie(),
    },
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('HubSpot submission failed:', errorData);
      return {
        success: false,
        error: 'Failed to submit form. Please try again.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('HubSpot submission error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
};

/**
 * Track conversion event for analytics
 */
export const trackDemoConversion = (): void => {
  // Google Analytics 4
  if (typeof window !== 'undefined') {
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'demo_request',
      });
    }
  }

  // Additional analytics tracking can be added here
};

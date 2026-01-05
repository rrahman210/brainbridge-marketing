import React, { useState } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { submitDemoRequest, trackDemoConversion, DemoFormData } from '../services/hubspotService';

interface DemoFormProps {
  variant?: 'light' | 'dark';
  onSuccess?: () => void;
}

const roleOptions = [
  { value: '', label: 'Select your role' },
  { value: 'Principal', label: 'Principal' },
  { value: 'Assistant Principal', label: 'Assistant Principal' },
  { value: 'Counselor', label: 'School Counselor' },
  { value: 'Attendance Coordinator', label: 'Attendance Coordinator' },
  { value: 'Success Mentor', label: 'Success Mentor / Youth Advocate' },
  { value: 'CBO Director', label: 'CBO Director' },
  { value: 'Community School Director', label: 'Community School Director' },
  { value: 'District Administrator', label: 'District Administrator' },
  { value: 'Other', label: 'Other' },
];

const studentCountOptions = [
  { value: '', label: 'Number of students' },
  { value: 'Under 500', label: 'Under 500' },
  { value: '500-1000', label: '500 - 1,000' },
  { value: '1000-2500', label: '1,000 - 2,500' },
  { value: '2500-5000', label: '2,500 - 5,000' },
  { value: '5000+', label: '5,000+' },
];

const hearAboutOptions = [
  { value: '', label: 'How did you hear about us? (optional)' },
  { value: 'Google Search', label: 'Google Search' },
  { value: 'Colleague Referral', label: 'Colleague Referral' },
  { value: 'Conference', label: 'Conference / Event' },
  { value: 'Social Media', label: 'Social Media' },
  { value: 'Other', label: 'Other' },
];

const DemoForm: React.FC<DemoFormProps> = ({ variant = 'light', onSuccess }) => {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    studentCount: '',
    howDidYouHear: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isDark = variant === 'dark';

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.studentCount) {
      newErrors.studentCount = 'Please select student count';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitDemoRequest(formData);

      if (result.success) {
        setIsSuccess(true);
        trackDemoConversion();
        onSuccess?.();
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof DemoFormData]) {
      setErrors((prev: Partial<Record<keyof DemoFormData, string>>) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
    isDark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50'
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
  }`;

  const selectClasses = `w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer ${
    isDark
      ? 'bg-white/10 border-white/20 text-white'
      : 'bg-white border-slate-200 text-slate-900'
  }`;

  const labelClasses = `block text-sm font-medium mb-1.5 ${isDark ? 'text-white/80' : 'text-slate-700'}`;

  const errorClasses = 'text-red-500 text-sm mt-1';

  if (isSuccess) {
    return (
      <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-white/10' : 'bg-emerald-50 border border-emerald-200'}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Thank You!
        </h3>
        <p className={`${isDark ? 'text-white/80' : 'text-slate-600'}`}>
          We'll be in touch within 24 hours to schedule your personalized demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane.smith@school.edu"
          className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelClasses}>
          School / Organization *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="PS 123 Brooklyn"
          className={`${inputClasses} ${errors.organization ? 'border-red-500' : ''}`}
        />
        {errors.organization && <p className={errorClasses}>{errors.organization}</p>}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelClasses}>
          Your Role *
        </label>
        <div className="relative">
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`${selectClasses} ${errors.role ? 'border-red-500' : ''} ${!formData.role ? (isDark ? 'text-white/50' : 'text-slate-400') : ''}`}
          >
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value} className="text-slate-900">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.role && <p className={errorClasses}>{errors.role}</p>}
      </div>

      {/* Student Count */}
      <div>
        <label htmlFor="studentCount" className={labelClasses}>
          Number of Students *
        </label>
        <div className="relative">
          <select
            id="studentCount"
            name="studentCount"
            value={formData.studentCount}
            onChange={handleChange}
            className={`${selectClasses} ${errors.studentCount ? 'border-red-500' : ''} ${!formData.studentCount ? (isDark ? 'text-white/50' : 'text-slate-400') : ''}`}
          >
            {studentCountOptions.map((option) => (
              <option key={option.value} value={option.value} className="text-slate-900">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.studentCount && <p className={errorClasses}>{errors.studentCount}</p>}
      </div>

      {/* How Did You Hear */}
      <div>
        <label htmlFor="howDidYouHear" className={labelClasses}>
          How did you hear about us?
        </label>
        <div className="relative">
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className={`${selectClasses} ${!formData.howDidYouHear ? (isDark ? 'text-white/50' : 'text-slate-400') : ''}`}
          >
            {hearAboutOptions.map((option) => (
              <option key={option.value} value={option.value} className="text-slate-900">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request a Demo'
        )}
      </button>

      {/* Privacy Note */}
      <p className={`text-xs text-center ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
        By submitting, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-blue-600">
          Privacy Policy
        </a>
        . We'll never share your information.
      </p>
    </form>
  );
};

export default DemoForm;

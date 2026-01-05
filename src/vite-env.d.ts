/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HUBSPOT_PORTAL_ID: string
  readonly VITE_HUBSPOT_FORM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

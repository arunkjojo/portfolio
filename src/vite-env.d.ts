/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Target for /r. Empty → /r shows the links page. Set in Vercel env vars or `.env`. */
  readonly VITE_REDIRECT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

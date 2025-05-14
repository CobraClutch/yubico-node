interface ImportMetaEnv {
  readonly VITE_APP_YUBICO_CLIENT_ID: string;
  readonly VITE_APP_YUBICO_SECRET: string;
  readonly VITE_APP_YUBICO_SL: string;
  readonly VITE_APP_YUBICO_TIMEOUT: string; 
  readonly VITE_APP_YUBICO_API_SERVERS: string; 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

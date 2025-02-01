/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    VITE_API_KEY_TMDB: string;
  }
  
  declare interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
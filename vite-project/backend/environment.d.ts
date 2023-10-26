declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DB_HOST: string;
        DB_PORT?: number | undefined;
        DB_USER: string;
        DB_PWD: string;
        DB_DATABASE: string;
        DB_LIMIT?: number | undefined;
      }
    }
}

export {}
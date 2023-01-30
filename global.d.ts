declare global{
    namespace NodeJS{
        interface ProvessEnv{
            NODE_ENV: "development"|"production"
        }
    }
}
export {}
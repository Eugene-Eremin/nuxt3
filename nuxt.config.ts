// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Nuxt",
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'}
            ]
        }
    },
    // можно получить переменные из файла .env | Только для server части
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
        // // так же мы можем использовать и во фронтенде, для этого их нужно записывать сюда
        // public: {}
    }
})

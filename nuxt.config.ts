// https://nuxt.com/docs/api/configuration/nuxt-config
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'


export default defineNuxtConfig({
    // @ts-ignore
    components: [
        '~/components'
    ],
    modules: [
        '@nuxt/devtools',
        '@huntersofbook/naive-ui-nuxt',
        '@nuxtjs/tailwindcss',
    ],

    tailwindcss: {
        // @ts-ignore
        corePlugins: {
            preflight: false,
        }
    }
})

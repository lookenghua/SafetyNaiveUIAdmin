// @ts-ignore
// https://nuxt.com/docs/api/configuration/nuxt-config
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'


// @ts-ignore
export default defineNuxtConfig({
    srcDir: 'src',
    // @ts-ignore
    components: [
        '~/components'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/devtools',
        '@huntersofbook/naive-ui-nuxt',
    ],
    tailwindcss: {
        configPath: './tailwind.config.ts',
    },
})

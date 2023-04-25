export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useState<any>('auth')

    if (to.path === '/login') {
        return
    }
    if (!auth.value) {
        return navigateTo('/login')
    }

    return navigateTo('/dashboard')
})

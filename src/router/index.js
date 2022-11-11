/*
import Vue from 'vue'
import VueRouter from 'vue-router'
// import AccountRoute from './account/AccountRoute'
Vue.use(VueRouter)

/!* const requireAuth = () => (to, from, next) => {
  if (sessionStorage.getItem('authorityCode')) {
    return next()
  }
  next('/login')
} *!/

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        //...baseRoute,
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/hr/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [
                    {
                        text: 'Home',
                        active: true,
                    },
                ],
            },
        },
    ],
})

/!* router.beforeEach(async (to, from, next) => {
  if (sessionStorage.getItem('authorityCode') === null && to.name !== 'login') {
    next('/login')
  }
  next()
}) *!/

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})

export default router
*/

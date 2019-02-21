export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/pages/error-page/404.vue')
};

export const appRouter = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/welcome',
        name: 'welcome',
        title: '欢迎',
        component: () => import('@/pages/welcome.vue')
    },
    {
        path: '/home',
        name: 'home',
        title: '首页',
        component: () => import('@/pages/index.vue')
    }
];

export const routes = [
    ...appRouter,
    page404
];
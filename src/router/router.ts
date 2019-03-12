export const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/pages/error-page/404.vue')
};

export const appRouter = [
    {
        path: '/welcome',
        name: 'welcome',
        title: '欢迎',
        component: () => import('@/pages/welcome.vue')
    },
    {
        path: '/articles/:pageNo(\\d*)',
        name: 'articles',
        title: '文章列表',
        alias: '/:pageNo(\\d*)',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        title: '文章',
        component: () => import('@/pages/article/index.vue')
    },
    {
        path: '/tags',
        name: 'tags',
        title: '归档',
        component: () => import('@/pages/tags/index.vue')
    },
    {
        path: '/tag/:id',
        name: 'tag',
        title: '类别',
        component: () => import('@/pages/tag/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        title: '关于',
        component: () => import('@/pages/about/index.vue')
    }
];

export const routes = [
    ...appRouter,
    page404
];
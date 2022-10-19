export const staticRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login/index.vue'),
    },
    {
        path: '/:path(.*)*',
        name: 'PageNotFound',
        component: () => import('/@/views/exception/index.vue'),
    },
];

export const dynamicRoutes = [
    {
        path: '/',
        name: '/',
        redirect: '/dashboard/console',
        component: () => import('/@/layout/BasicLayout.vue'),
        meta: {
            title: '首页',
        },
        children: [],
    },
];

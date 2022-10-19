import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes } from './config';
export const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function initRouter(app) {
    app.use(router);
}

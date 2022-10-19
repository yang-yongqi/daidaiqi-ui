import Api from '../api';
import {router} from './index';
import StorageUtils from '../utils/StorageUtils';
import {dynamicRoutes} from './config';
import {useAppStore} from "../store/modules/app";

export function initRouterGuard(router) {
    router.beforeEach(async (to, from, next) => {
        const token = StorageUtils.get('token') ? 1 : 2;
        if (to.path === '/login' && !token) {
            next();
        } else {
            if (!token) {
                next(`/login?redirect=${to.path}`);
                StorageUtils.clear();
            } else if (token && to.path === '/login') {
                next('/');
            } else {
                if (useAppStore().routeList.length == 0) {
                    await initPermissions().then((res) => {
                        next({path: to.fullPath, replace: true, query: to.query});
                    });
                } else {
                    next();
                }
            }
        }
    });
    router.afterEach(() => {
    });
}

async function initPermissions() {
    await useAppStore().getUserInfo()
    const res = await Api.getPermissions();
    useAppStore().setRouteList(res.data)
    dynamicRoutes[0].children = await initComponent(res.data);
    await addRoute(dynamicRoutes);
}


const layoutModules = import.meta.glob('../layout/*.vue');
const viewsModules = import.meta.glob('../views/**/*.vue');
const dynamicViewsModules = Object.assign({}, {...layoutModules}, {...viewsModules});

export function initComponent(routes) {
    if (!routes) {
        return;
    }
    return routes.map((item) => {
        if (item.component) {
            item.component = dynamicImport(dynamicViewsModules, item.component);
            item.children && initComponent(item.children);
            return item;
        }
    });
}

export function dynamicImport(dynamicViewsModules, component) {
    const keys = Object.keys(dynamicViewsModules);
    const matchKeys = keys.filter((key) => {
        const k = key.replace(/..\/views|../, '');
        return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
    });
    if (matchKeys?.length === 1) {
        const matchKey = matchKeys[0];
        return dynamicViewsModules[matchKey];
    }
    if (matchKeys?.length > 1) {
        return false;
    }
}

export async function addRoute(dynamicRoutes) {
    dynamicRoutes.forEach((route) => {
        const routeName = route.name;
        if (!router.hasRoute(routeName)) {
            router.addRoute(route);
        }
    });
}

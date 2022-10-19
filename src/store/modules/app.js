import {defineStore} from 'pinia';
import Api from "../../api";

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        userInfo: null,
        routeList: [],
        headerSwiper: [],
        currentHeaderSwiper: null
    }),
    actions: {
        async getUserInfo() {
            const res = await Api.getUserInfo();
            this.userInfo = res.data
        },
        setRouteList(routeList) {
            this.routeList = routeList
        },
        setHeaderSwiper(route) {
            for (let item in this.headerSwiper) {
                if (this.headerSwiper[item].path == route.path) {
                    return
                }
            }
            this.headerSwiper.push({
                title: route.meta.title,
                path: route.path
            })
            this.setCurrentHeaderSwiper(route.path)
        },
        setCurrentHeaderSwiper(path) {
            this.currentHeaderSwiper = path
        }
    }
});

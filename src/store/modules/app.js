import {defineStore} from 'pinia';
import Api from "../../api";

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        userInfo: null,
        routeList: [],
        headerSwiper: [
            {
                path:"/dashboard/console",
                title:"主控台"
            }
        ],
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
            this.setCurrentHeaderSwiper(route.path)
            for (let item in this.headerSwiper) {
                if (this.headerSwiper[item].path == route.path) {
                    return
                }
            }
            this.headerSwiper.push({
                title: route.meta.title,
                path: route.path
            })
        },
        setCurrentHeaderSwiper(path) {
            this.currentHeaderSwiper = path
        }
    }
});

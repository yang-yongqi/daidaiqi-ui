import {defineStore} from 'pinia';
import Api from "../../api";

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        userInfo: null,
        routeList: [],
        isCollapse: false,
        clientWidth: 0,
        slidesPerView: 0,
        clientHeight: 0,
        headerSwiper: [
            {
                path: "/dashboard/console",
                title: "主控台"
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
        },
        setCollapse() {
            this.isCollapse = !this.isCollapse
        },
        setClientWidth(clientWidth) {
            this.clientWidth = clientWidth
            this.slidesPerView =
                this.clientWidth < 576 ? 0 :
                    this.clientWidth < 768 ? 0 :
                        this.clientWidth < 992 ? 4 :
                            this.clientWidth < 1200 ? 6 :
                                this.clientWidth < 1400 ? 8 : 10;
            this.isCollapse = this.slidesPerView != 0 ? false : true
        },
        setClientHeight(clientHeight) {
            this.clientHeight = clientHeight
        },
    }
});

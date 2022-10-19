import {defineStore} from 'pinia';
import Api from "../../api";

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        userInfo: null,
        routeList: []
    }),
    actions: {
        async getUserInfo() {
            const res = await Api.getUserInfo();
            this.userInfo = res.data
        },
        setRouteList(routeList) {
            this.routeList = routeList
        }
    }
});

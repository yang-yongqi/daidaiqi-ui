import {createApp} from 'vue'
import './mock';
import App from './App.vue'
import {initStore} from "./store";
import {initRouter, router} from "./router";
import {initRouterGuard} from "./router/guard";

(function () {
    const app = createApp(App);
    initStore(app);
    initRouter(app);
    initRouterGuard(router);
    app.mount('#app');
})()
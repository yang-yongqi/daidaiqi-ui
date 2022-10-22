import {createApp} from 'vue'
import './mock';
import './style/index.less'
import './style/default.css'
import App from './App.vue'
import {initStore} from "./store";
import {initRouter, router} from "./router";
import {initRouterGuard} from "./router/guard";
import components from "./components";
import 'default-passive-events'

(function () {
    const app = createApp(App);
    initStore(app);
    initRouter(app);
    initRouterGuard(router);
    app.use(components);
    app.mount('#app');
})()
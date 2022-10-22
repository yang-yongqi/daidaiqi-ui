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
import 'ant-design-vue/lib/modal/style/index.css'
import 'ant-design-vue/lib/message/style/index.css'
(function () {
    const app = createApp(App);
    initStore(app);
    initRouter(app);
    initRouterGuard(router);
    app.use(components);
    app.mount('#app');
})()
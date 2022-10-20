<template>
    <div>
        <a-layout>
            <layout-sider></layout-sider>
            <a-layout>
                <layout-header></layout-header>
                <a-layout-content>
                    <div class="layout-content">
                        <router-view></router-view>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import {defineComponent} from "vue";
import layoutSider from './components/layout-sider/index.vue'
import layoutHeader from './components/layout-header/index.vue'

export default defineComponent({
    components: {layoutSider, layoutHeader}
})
</script>
<style>
.layout-content {
    height: 100%;
    padding: 0 15px 15px 15px;
}
</style>
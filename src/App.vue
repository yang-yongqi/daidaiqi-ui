<template>
    <router-view></router-view>
</template>
<script>
import {defineComponent} from "vue";
import {useAppStore} from "./store/modules/app";

export default defineComponent({
    setup() {
        let store = useAppStore();

        window.onresize = function () {
            captureResize()
        };
        let captureResize = () => {
            store.setClientWidth(document.documentElement.clientWidth)
            store.setClientHeight(document.documentElement.clientHeight)
        }
        captureResize()
    }
})
</script>
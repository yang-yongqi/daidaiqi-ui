<template>
    <div>
        <div v-if="store.isCollapse">
            <div class="layout-logo-min">
                <div class="layout-logo-img">
                    <img src="/img/logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="layout-logo-max" v-else>
            <div class="layout-logo-img">
                <img src="/img/logo.png" alt="">
            </div>
            <div class="layout-logo-text">
                Admin Pro
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, reactive, toRefs} from "vue";
import {useAppStore} from "../../../store/modules/app";

export default defineComponent({
    setup() {
        let store = useAppStore();
        return {
            store
        }
    }
})
</script>
<style lang="less">
.layout-logo-min{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #101117;
    text-align: center;
    img {
        width: 30px;
        height: 30px;
    }
}
.layout-logo-max {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #101117;

    > div {
        margin: 0 5px;
    }

    .layout-logo-img {
        img {
            width: 30px;
            height: 30px;
        }
    }

    .layout-logo-text {
        font-family: fantasy;
        font-size: 24px;
    }
}
</style>
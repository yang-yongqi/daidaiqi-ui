<template>
    <a-layout-header class="layout-header">
        <div class="layout-header-top">
            <div class="layout-header-left">
                <div class="icon" @click="changeCollapse">
                    <icon icon="MenuFoldOutlined"></icon>
                </div>
                <div class="icon" @click="handleRefresh">
                    <icon icon="RollbackOutlined"></icon>
                </div>
                <div class="m-l-15">
                    <a-breadcrumb>
                        <a-breadcrumb-item v-for="(item,index) in navigation">
                            {{ item.meta.title }}
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
            </div>
            <div class="layout-header-right">
                <div class="icon">
                    <icon icon="FullscreenOutlined"></icon>
                </div>
                <div class="icon">
                    <icon icon="BellOutlined"></icon>
                </div>
                <div>
                    <a-dropdown>
                    <span @click.prevent>
                        呆呆奇
                    </span>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    退出登录
                                </a-menu-item>
                                <a-menu-item>
                                    修改密码
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <div class="icon">
                    <icon icon="ApiOutlined"></icon>
                </div>
            </div>
        </div>
        <div class="layout-header-bottom" v-if="store.slidesPerView">
            <swiper
                :slides-per-view="store.slidesPerView"
            >
                <swiper-slide @click="handleSlideClick(item.path)" :class="['swiper-slide']"
                              v-for="(item,index) in store.headerSwiper" :key="index">
                    <div :class="['swiper-slide-mask',{'swiper-slide-current':store.currentHeaderSwiper == item.path}]">
                    </div>
                    <div>
                        {{ item.title }}
                    </div>
                    <div v-if="item.path != '/dashboard/console' ">
                        <icon icon="CloseOutlined"></icon>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </a-layout-header>
</template>
<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {defineComponent, reactive, watch, toRefs} from "vue";
import {Icon} from '/@/common/icon.js'
import {useRoute, useRouter} from "vue-router";
import {useAppStore} from "/@/store/modules/app";

export default defineComponent({
    components: {
        Icon,
        Swiper,
        SwiperSlide,
    },
    setup() {
        let route = useRoute()
        let state = reactive({
            navigation: [],
        })
        let router = useRouter()

        let store = useAppStore()

        let handleSlideClick = (path) => {
            store.setCurrentHeaderSwiper(path)
            router.push(path)
        };
        let changeCollapse = () => {
            store.setCollapse()
        }
        let handleRefresh = () => {
            location.reload();
        }
        watch(
            () => route.matched,
            item => {
                let arr = [...item];
                state.navigation = arr;
            }, {
                immediate: true
            }
        )

        return {
            ...toRefs(state),
            store,
            handleSlideClick,
            handleRefresh,
            changeCollapse
        }
    }
})
</script>
<style lang="less">
.layout-header {
    padding: 0;
    height: 90px;
    background: #ffffff;

    .layout-header-top {
        height: 50px;
        background: #ffffff;
        padding: 0 20px 0 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid whitesmoke;
        line-height: 50px;
    }

    .layout-header-left {
        display: flex;
    }

    .icon {
        padding: 0 15px;
        cursor: pointer;

        &:hover {
            background: #f8f8f9;
        }
    }

    .layout-header-right {
        display: flex;
    }
}

.layout-header-bottom {
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    overflow: hidden;
}

.swiper-slide {
    width: 100px;
    display: flex;
    justify-content: center;
    border-left: 1px solid whitesmoke;
    font-size: 14px;
    cursor: pointer;
    color: #696969;

    span {
        color: #999;
        margin-left: 10px;
    }
}

.swiper-slide-mask {
    border-radius: 50%;
    height: 8px;
    width: 8px;
    margin-top: 16px;
    margin-right: 10px;
}

.swiper-slide-current {
    background: #009688;
}
</style>
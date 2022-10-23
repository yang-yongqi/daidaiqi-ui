<template>
    <div class="login">
        <div class="login-logo">
            <div>
                <img src="/img/logo.png" alt="">
            </div>
            <div class="layout-logo-text">呆呆后台管理</div>
        </div>
        <div class="layout-logo-desc">
            企业级中后台前端解决方案
        </div>
        <div class="login-form">
            <a-form
                :model="formState"
                name="basic"
                :wrapper-col="{ span: 24 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <div>
                    <a-form-item
                        label=""
                        name="username"
                        :rules="[{ required: true, message: '请输入账号' }]"
                    >
                        <a-input size="large" v-model:value="formState.username" placeholder="请输入账号">
                            <template #prefix>
                                <icon style="color: #808695" icon="UserOutlined"></icon>
                            </template>
                        </a-input>
                    </a-form-item>

                </div>
                <div>
                    <a-form-item
                        label=""
                        name="password"
                        :rules="[{ required: true, message: '请输入密码' }]"
                    >
                        <a-input-password size="large" v-model:value="formState.password" autocomplete="off" placeholder="请输入密码">
                            <template #prefix>
                                <icon style="color: #808695" icon="UnlockOutlined"></icon>
                            </template>
                        </a-input-password>
                    </a-form-item>
                </div>
                <div>
                    <a-form-item>
                        <a-button class="login-submit" type="primary" html-type="submit">登 录</a-button>
                    </a-form-item>
                </div>
            </a-form>
        </div>
    </div>
</template>
<script>
import {defineComponent, reactive} from 'vue';
import {Icon} from '/@/common/icon.js'

export default defineComponent({
    components: {Icon},
    setup() {
        const formState = reactive({
            username: '',
            password: '',
            remember: true,
        });
        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },

});
</script>
<style lang="less">
.login {
    width: 100vw;
    height: 100vh;
    background: url("/img/login-bg.svg");
    overflow: hidden;

    .login-logo {
        display: flex;
        width: 180px;
        margin: 100px auto 20px auto;
        justify-content: space-between;

        img {
            width: 30px;
        }
    }

    .layout-logo-text {
        font-size: 24px;
        color: #515a6e;
        height: 30px;
        line-height: 25px;
    }

    .layout-logo-desc {
        font-size: 14px;
        color: #808695;
        text-align: center;
    }

    .login-form {
        width: 350px;
        margin: 20px auto;
    }
}
.login-submit{
    width: 100%;
    height: 40px;
    cursor: pointer;
}

</style>
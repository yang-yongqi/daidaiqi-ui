<template>
    <div class="layout-logo">
        <div class="layout-logo-img">
            <img src="/img/logo.png" alt="">
        </div>
        <div class="layout-logo-text">
            Admin Pro
        </div>
    </div>
</template>
<style lang="less">
.layout-logo{
    height: 65px;
    line-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #101117;
    >div{
        margin: 0 5px;
    }
    .layout-logo-img{
        img{
            width: 30px;
            height: 30px;
        }
    }
    .layout-logo-text{
        font-family: fantasy;
        font-size: 24px;
    }
}
</style>
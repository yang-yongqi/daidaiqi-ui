<template>
    <div>
        <div class="table-header">
            <slot name="header"></slot>
        </div>
        <div class="table">
            <a-table :dataSource="props.dataSource" :columns="props.columns"/>
        </div>
    </div>
</template>

<script>
import {defineComponent, defineProps, reactive, ref} from "vue";

export default defineComponent({
    props: ["dataSource", "columns"],
    setup(props) {
        return {
            props
        }
    }
})
</script>

<style lang="less">
.table-header {
    background: #ffffff;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    button:not(:first-child) {
        margin-left: 10px;
    }

    > div {
        display: flex;
    }
}
</style>
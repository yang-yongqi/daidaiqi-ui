<template>
    <div>
        <div class="table-header">
            <slot name="header">
            </slot>
        </div>
        <div class="table">
            <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                     :dataSource="props.dataSource" :columns="props.columns" bordered/>
        </div>
    </div>
</template>

<script>
import {defineComponent, defineProps, reactive, ref, toRefs} from "vue";
import {useSelectedRowKeys} from "../../hooks/useTable";

export default defineComponent({
    props: ["dataSource", "columns"],
    setup(props) {
        let state = reactive({
            selectedRowKeys: [],
        })
        const onSelectChange = selectedRowKeys => {
            useSelectedRowKeys(selectedRowKeys)
            state.selectedRowKeys = selectedRowKeys;
        };
        return {
            props,
            onSelectChange,
            ...toRefs(state)
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

.table {
    margin-top: 15px;
    padding: 15px;
    background: #ffffff;
    border-radius: 10px;
}
</style>
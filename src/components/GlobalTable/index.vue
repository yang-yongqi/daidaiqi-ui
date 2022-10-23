<template>
    <div>
        <div class="table-header">
            <slot name="header">
            </slot>
        </div>
        <div class="table" :style="{'height':height -190 + 'px'}">
            <a-table :style="{'height':height -280 + 'px'}"
                     sticky
                     :pagination="pagination"
                     :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                     :scroll="{ x: 992 }"
                     :dataSource="props.dataSource" :columns="props.columns" bordered>
                <template #bodyCell="{ column, text, record }">
                    <slot name="bodyCell" :column="column" :text="text" :record="record"></slot>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
import {defineComponent, defineProps, reactive, ref, toRefs} from "vue";
import {useSelectedRowKeys} from "../../hooks/useTable";
import {useAppStore} from "../../store/modules/app";

export default defineComponent({
    props: {
        dataSource: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        pagination: {
            required: false,
            default:true
        }
    },
    setup(props) {
        let height = useAppStore().clientHeight
        let state = reactive({
            selectedRowKeys: [],
        })
        const onSelectChange = selectedRowKeys => {
            useSelectedRowKeys(selectedRowKeys)
            state.selectedRowKeys = selectedRowKeys;
        };
        return {
            props,
            height,
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
<template>
    <div>
        <global-table :dataSource="dataSource" :columns="columns" >
            <template #header>
                <div>
                    <a-button type="primary">新增</a-button>
                    <a-button type="primary" @click="useDeleteByIds('接口地址')" danger>删除</a-button>
                </div>
                <div>
                    <a-input v-model="value" placeholder="请输入"/>
                    <a-button>搜索</a-button>
                </div>
            </template>
            <template #bodyCell="{ column, text, record }">
                <span>{{ column.title }}</span>
            </template>
        </global-table>
    </div>
</template>
<script>
import {defineComponent, reactive, toRefs} from 'vue';
import {useDeleteByIds} from "../../hooks/useTable";

export default defineComponent({
    setup() {

        let state = reactive({
            value: "",
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',

                },
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '操作',
                    key: 'action',
                }
            ],
        })
        return {
            ...toRefs(state),
            useDeleteByIds
        };
    },

});
</script>
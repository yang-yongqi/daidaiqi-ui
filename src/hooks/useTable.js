import {Modal, message} from "ant-design-vue";

let selectedRowKeys = []

export function useSelectedRowKeys(value) {
    selectedRowKeys = value
    console.log(selectedRowKeys)
}

export function useDeleteByIds(url) {
    if (selectedRowKeys.length == 0) {
        message.error("请选择您要删除的数据")
        return
    }
    let ids = []
    for (let i = 0; i < selectedRowKeys.length; i++) {
        ids.push(selectedRowKeys[i].id)
    }
    Modal.confirm({
        title: '您确定要删除吗？',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            message.error("删除的ID是" + ids)
        },
        onCancel() {
            console.log('Cancel');
        },
    })
}

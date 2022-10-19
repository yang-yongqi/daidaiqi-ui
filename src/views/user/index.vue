<template>
    <div>user</div>
</template>

<script>
import {defineComponent} from "vue";
import {useAppStore} from "/@/store/modules/app";

export default defineComponent({
    setup() {
        let store = useAppStore()
    }
})
</script>

<style scoped>

</style>
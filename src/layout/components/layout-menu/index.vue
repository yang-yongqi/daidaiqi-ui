<script lang="jsx">
import {defineComponent, reactive} from 'vue';
import {useAppStore} from "../../../store/modules/app";
import {useRouter} from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter()
        let routeList = useAppStore().routeList;
        let state = reactive({
            selectedKeys: [],
            openKeys: [],
        })

        function initTempKeys() {
            let tempKeys = router.currentRoute.value.path.split("/")
            state.selectedKeys = [tempKeys[tempKeys.length - 1]]
            tempKeys.shift()
            tempKeys.pop()
            state.openKeys = [...tempKeys]
        }

        initTempKeys()

        function handler(item, key, keyPath) {
            let path = "";
            for (let i = 0; i < item.keyPath.length; i++) {
                path += "/" + item.keyPath[i];
            }
            if (path != router.currentRoute.value.fullPath) {
                router.push(path).then((res) => {
                    initTempKeys()
                })
            }
        }

        function renderMenu(routeList) {
            return routeList.map((item, index) => {
                if (item.children && item.children.length) {
                    return (
                        <a-sub-menu
                            key={item.path} title={item.meta.title}>
                            {
                                renderMenu(item.children)
                            }
                        </a-sub-menu>
                    )
                } else {
                    return (
                        <a-menu-item key={item.path}>
                            {item.meta.title}
                        </a-menu-item>
                    )
                }
            })
        }

        return () => {
            return (
                <>
                    <a-menu
                        v-model:selectedKeys={state.selectedKeys}
                        v-model:openKeys={state.openKeys}
                        onClick={handler}
                        mode="inline"
                        theme="dark"
                    >
                        {renderMenu(routeList)}
                    </a-menu>
                </>
            );
        };
    }
});
</script>

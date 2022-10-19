<script lang="jsx">
import {defineComponent} from 'vue';
import {useAppStore} from "../../../store/modules/app";
import {useRouter} from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter()
        let routeList = useAppStore().routeList;

        function handler(item, key, keyPath) {
            let path = "";
            for (let i = 0; i < item.keyPath.length; i++) {
                if (i != 0) {
                    path += "/" + item.keyPath[i];
                } else {
                    path += item.keyPath[i];
                }
            }
            if (path != router.currentRoute.value.fullPath) {
                router.push(path)
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

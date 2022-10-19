import {defineConfig} from 'vite'
import {resolve} from 'path';
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from '@vitejs/plugin-vue'
import {
    AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

const pathResolve = (dir) => resolve(__dirname, '.', dir);
export default defineConfig({
    plugins: [vue(), vueJsx(), Components({
        resolvers: [AntDesignVueResolver()],
    }),
    ],
    resolve: {
        alias: [{find: '/@', replacement: pathResolve('src')}],
    },
})

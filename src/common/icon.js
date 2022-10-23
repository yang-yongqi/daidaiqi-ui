import { createVNode } from 'vue'
import * as $Icon  from '@ant-design/icons-vue'
export const Icon = (props) => {
    const { icon } = props;
    return createVNode($Icon[icon]);
};
export const IconFont = $Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3715041_kem3zxt680i.js'
});
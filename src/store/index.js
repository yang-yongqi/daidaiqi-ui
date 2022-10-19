import {createPinia} from 'pinia';

const store = createPinia();

export function initStore(app) {
    app.use(store);
}

export {store};

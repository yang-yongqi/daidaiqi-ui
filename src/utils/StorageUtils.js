/**
 * 获取本地缓存工具类
 */
export default class StorageUtils {
    // 设置永久缓存
    static set(key, val) {
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    // 获取永久缓存
    static get(key) {
        let json = window.localStorage.getItem(key);
        return JSON.parse(json);
    }

    // 移除永久缓存
    static remove(key) {
        window.localStorage.removeItem(key);
    }

    // 移除全部永久缓存
    static clear() {
        window.localStorage.clear();
    }
}

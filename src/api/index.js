import { get } from '../http';

export default class Api {
    static getPermissions() {
        return get('/user/getPermissions');
    }
    static getUserInfo() {
        return get('/user/getUserInfo');
    }
}

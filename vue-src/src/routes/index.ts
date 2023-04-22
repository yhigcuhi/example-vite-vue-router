/* import vue-router*/
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
/* import page*/
import { EntryForm, SecondForm, Complete } from '@/pages/index';

// ルーターの一覧定義
const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', name: 'entry', component: EntryForm }, // エントリーポイント
    { path: '/second', name: 'second', component: SecondForm }, // 2番目のポイント
    { path: '/complete', name: 'complete', component: Complete }, // 3番目のポイント
]

// vue router 定数定義
const baseURL = import.meta.env.VITE_BASE_URL_FOR_VUE_ROUTER ?? ''; // ベースのURL

// vue router コンストラクタ
const router = createRouter({
    history: createWebHashHistory(baseURL), // HTML5 History モード
    routes,
})
// export router
export default router;

/* import vue-router*/
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
/* import page*/
import { EntryForm, SecondForm } from '@/pages/index';

// ルーターの一覧定義
const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', name: 'entry', component: EntryForm }, // エントリーポイント
    { path: '/second', name: 'second', component: SecondForm }, // 2番目のポイント
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
// export router
export default router;

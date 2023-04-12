// store の エントリーポイント
/* import pinia*/
import {createPinia} from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'; // 追加
/* import modules*/
import { useMultiStepForm } from './modules/multi-step-form';


// 利用する pinia
const store = createPinia();
// 永続化適用の設定
store.use(createPersistedState({
    storage: sessionStorage, // 保存先 TODO:cookieか？
    key: (storeKey: string) => `my-example-app@${storeKey}`, // 保存しておく際のキー名 接頭辞ふよ
}));


// export
export default store;
// export 各ストア
export {
    useMultiStepForm
}


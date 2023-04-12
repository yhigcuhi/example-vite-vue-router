// エントリーポイント
/* import vue */
import { createApp } from 'vue'
/* import style */
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap利用
import '@/assets/style.css'
import '@/assets/main-app.css'
/* import router */
import router from '@/routes';
/* import form kit */
import {plugin, defaultConfig} from '@formkit/vue';
// import { createMultiStepPlugin } from '@formkit/addons' // TODO:デザインの変更の仕方がわからん...
// import { ja } from '@formkit/i18n'; // TODO: いらない?
/* import store*/
import store from './store';
/* import parts */
import App from '@/App.vue'

// FormKit設定値
const formKitConfig = defaultConfig({
    // plugins: [ // プラグイン
    //     createMultiStepPlugin(), // マルチステップの画面入力 TODO:これあれば vuexとかvue-routerいらない？
    // ],
    // locales: {ja}, // TODO:活性化すると tsエラー => いらない?
    locale: 'ja'
});


// export SPAとして
createApp(App)
    .use(router) // vue router
    .use(plugin, formKitConfig) // FormKit
    .use(store) // store利用
    // TODO:FormKitなどのプラグイン導入
    .mount('#app')

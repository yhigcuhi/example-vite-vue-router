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
import { ja } from '@formkit/i18n';
/* import parts */
import App from '@/App.vue'

// FormKit設定値
const formKitConfig = defaultConfig({
    // plugins: [ // プラグイン
    //     createMultiStepPlugin(), // マルチステップの画面入力 TODO:これあれば vuexとかvue-routerいらない？
    // ],
    locales: {ja},
    locale: 'ja'
});


// export SPAとして
createApp(App)
    .use(router) // vue router TODO:一旦
    .use(plugin, formKitConfig) // FormKit
    // TODO:FormKitなどのプラグイン導入
    .mount('#app')

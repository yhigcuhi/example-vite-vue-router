// Step形式のフォーム入力内容を保持しておくストア // TODO:storeいる？
/* import vue*/
import {computed, ref} from 'vue';
/* import pinia*/
import {defineStore} from 'pinia';
/* import types*/
import Gender from '@/constants/Gender';

// type 定義
type Form = {
    last_name: string // 名前（姓）
    first_name: string // 名前（名）
    last_name_kana: string // ふりがな（姓）
    first_name_kana: string // ふりがな（名）
    email: string // メアド
    gender: Gender|null // 性別
    birthday: string|null, // 生年月日 文字列s
}

// 内部参照可能定数: フォーム 初期値
const DEFAULT_FORM: Form = {
    last_name: '',
    first_name: '',
    last_name_kana: '',
    first_name_kana: '',
    email: '',
    gender: null,
    birthday: '2022-2-2',
}

// Step形式のフォーム入力内容
export const useMultiStepForm = defineStore('multi-step-form', () => {
    // state
    const state = ref<Form>(DEFAULT_FORM); // フォームの値
    const activeStep = ref(1); // 現在のアクティブステップ
    const processing = ref(false); // 送信中 管理 (多重送信防止よう)
    const errors = ref({}); // 通信結果サーバーエラー メッセージ管理

    // getters
    const isProcessing = computed(() => processing.value);

    // actions
    /**
     * フォーム内容更新
     * @param value 更新するフォームの値
     * @return {Ref} 更新後のフォームの値
     */
    const updateForm = (value: Partial<Form>) => {
        // フォームの値更新
        state.value = {...state.value, ...value};
        // 更新結果返却
        return state;
    }
    /**
     * Step戻る
     */
    const previousStep = () => activeStep.value--;
    /**
     * 次のStepへ
     */
    const nextStep = () => activeStep.value++;

    // export store
    return {
        state,
        activeStep,
        errors,
        isProcessing,
        updateForm,
        previousStep,
        nextStep,
        persist: true // データ永続化 利用
    }
})
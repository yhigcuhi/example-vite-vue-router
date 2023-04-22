<script setup lang="ts">
/* import vue*/
import {computed, reactive} from 'vue';
/* import store*/
import {useMultiStepForm} from '@/store';
/* import 部品*/
import {Form} from '@/components/form';
import {Previous, Next} from '../elements';

// 画面表示引数
type Props = {
    step?: number, // 対応したStep数
    title: string, // フォームタイトル
}
const props = defineProps<Props>();
// 発火イベント
const emits = defineEmits(['click-previous', 'submit', 'submit-invalid']);

// グローバルストア = フォーム初期値
const store = useMultiStepForm();
// 画面表示 フォームタイトル
const title = computed(() => props.step ? `Step${props.step}: ${props.title ?? '設問'}` : props.title);
// 現在のフォームの値
const form = reactive(store.state);

// 戻る クリック
const onClickPrevious = (e) => {
    // グローバルストアに経過保存
    store.updateForm(form);
    // クリックイベント発火
    emits('click-previous', e);
}
// 正常 submit
const onSubmit = (e) => {
    // グローバルストアに経過保存
    store.updateForm(e);
    // イベント発火
    emits('submit', ...arguments);
}
// エラー submit
const onSubmitInvalid = () => emits('submit-invalid', ...arguments);
</script>
<template>
    <!-- マルチステップ フォーム レイアウト -->
    <div class="mx-auto text-white">
        <!-- フォームタイトル  -->
        <h2>{{ title }}</h2>
        <!-- フォーム  -->
        <Form @submit="onSubmit" @submit-invalid="onSubmitInvalid" :actions="false" :value="store.state" v-model="form">
            <!-- 子要素による各フォームの描画 -->
            <slot />
            <!-- メニュー -->
            <div class="mt-5 d-flex align-items-center">
                <!-- 前へ -->
                <Previous @click="onClickPrevious" v-if="step > 1 && step < 3" class="me-4"/>
                <!-- 次へ -->
                <Next v-if="step < 3" class="me-4"/>
                <!-- 最後 -->
            </div>
        </Form>
    </div>
</template>
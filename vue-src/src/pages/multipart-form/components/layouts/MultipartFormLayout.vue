<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import 部品*/
import {Form} from '@/components/form';
import {FormGroup, InputEMail, InputName, InputNameKana} from '../form';
import {Next} from '../elements';

// 画面表示引数
type Props = {
    step: number // Step数
    title: string // フォームタイトル
}
const props = withDefaults(defineProps<Props>(), {
    step: 1,
})

const emits = defineEmits(['submit', 'submitInvalid'])

// 画面表示 フォームタイトル
const title = computed(() => `Step${props.step}: ${props.title ?? '設問'}`);

// 正常 submit
const onSubmit = () => emits('submit', ...arguments);
// エラー submit
const onSubmitInvalid = () => emits('submitInvalid', ...arguments);
</script>
<template>
    <!-- マルチステップ フォーム レイアウト -->
    <div class="mx-auto text-white">
        <!-- フォームタイトル  -->
        <h2>{{ title }}</h2>
        <!-- フォーム  -->
        <Form @submit="onSubmit" @submit-invalid="onSubmitInvalid" :actions="false">
            <!-- 子要素による各フォームの描画 -->
            <slot />
            <!-- メニュー -->
            <div class="mt-5 d-flex align-items-center">
                <!-- TODO:@submitより 次へ を押したらが正しいか？ -->
                <Next v-if="step < 3"/>
                <!-- TODO:前へ -->
            </div>
        </Form>
    </div>
</template>
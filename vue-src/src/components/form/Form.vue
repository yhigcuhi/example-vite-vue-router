<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import FormKit*/
import {FormKit} from '@formkit/vue';
/* for types*/
import {Color} from '@/@types';

// 画面表示引数
type Props = {
    submitAttrs?: Record<string, any>
    buttonColor?: Color // ボタンカラー
}
const props = withDefaults(defineProps<Props>(), {
    buttonColor: 'info',
});
// 入力補完
const submitAttrs = computed(() =>
    ({
        inputClass: `px-4 py-2 text-center border rounded text-white bg-info`, // デフォルトデザイン
        ...props.submitAttrs, // 引数反映
    })
);
</script>
<template>
    <FormKit type="form" :submitAttrs="submitAttrs">
        <div class="form-group">
            <slot />
        </div>
    </FormKit>
</template>

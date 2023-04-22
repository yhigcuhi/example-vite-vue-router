<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import form kit*/
import {FormKit} from '@formkit/vue';
import {FormKitClasses} from '@formkit/core';

// 画面表示引数
type Props = {
    classes?: Record<string, string | Record<string, boolean> | FormKitClasses>
}
const props = defineProps<Props>();
// デフォルトデザイン反映
const classes = computed(() => ({
    message: 'form-control-feedback',
    option: 'form-check form-check-radio',
    wrapper: 'form-check-label',
    input: 'form-check-input',
    decorator: 'form-check-sign',
    ...props.classes
}));
</script>
<template>
    <FormKit type="radio" :classes="classes"/>
</template>
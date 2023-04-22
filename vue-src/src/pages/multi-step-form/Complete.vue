<script setup lang="ts">
/* import router*/
import {useRouter} from 'vue-router';
/* import parts*/
import {MultiStepFormLayout} from './components/layouts';

// ルーター
const router = useRouter();
</script>
<template>
    <MultiStepFormLayout :step="3" title="完了画面">
        <h2>完了！</h2>
    </MultiStepFormLayout>
</template>

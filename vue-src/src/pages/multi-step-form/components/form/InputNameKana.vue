<script setup lang="ts">
/* import 部品*/
import {InputText} from '@/components/form';
/* import 定数*/
import RegExp from '@/constants/RegExp';
</script>
<template>
    <!-- ふりがな の入力 -->
    <InputText :validation="[['required'], ['length', '1', '15'], ['matches', RegExp.FURIGANA]]" />
</template>

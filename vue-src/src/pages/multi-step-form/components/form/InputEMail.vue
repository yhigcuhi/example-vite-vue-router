<script setup lang="ts">
/* import 部品*/
import {InputText} from '@/components/form';
/* import 定数*/
import RegExp from '@/constants/RegExp';
</script>
<template>
    <!-- メアド の入力 -->
    <InputText :validation="[['required'], ['matches', RegExp.EMAIL]]" />
</template>

<script setup lang="ts">
/* import parts*/
import {Radio} from '@/components/form';
/* import 定数*/
import Gender from '@/constants/Gender';

// 選択肢 生成
const options: Record<string, string> = { [Gender.MEN]: '男性', [Gender.WOMEN]: '女性', [Gender.OTHER]: 'その他', [Gender.NO_ANSWER]: '無回答'};
</script>
<template>
  <!-- 性別 ラジオ -->
  <Radio :options="options" :validation="[['required']]"/>
</template>

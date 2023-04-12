<script setup lang="ts">
/* import 部品*/
import {Label} from '@/components/elements';

// 画面表示 引数
const props = defineProps<{ label?: string}>();
</script>
<template>
  <!-- フォーム 複数 -->
  <div class="my-4" v-if="props.label">
    <Label class="col-12" v-if="props.label">{{ props.label }}</Label>
    <!-- 同一の行に配置 -->
    <div class="d-flex align-items-center">
      <slot />
    </div>
  </div>
  <!-- フォーム 1つ -->
  <div class="my-4" v-else>
      <slot class="col-12" />
  </div>
</template>

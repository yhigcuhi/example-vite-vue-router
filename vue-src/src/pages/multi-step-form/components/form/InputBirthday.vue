<script setup lang="ts">
/* import parts*/
import {InputDay} from '@/components/form';
</script>
<template>
  <!-- 生年月日 -->
  <InputDay :validation="[['required'], ['date_after', '1900-01-01']]" />
</template>

<script setup lang="ts">
/* import parts*/
import { MainLayout } from '@/components/layouts';
</script>
<template>
    <MainLayout>
        <!-- 各画面 は vue-routerで対応 -->
        <router-view/>
    </MainLayout>
</template>

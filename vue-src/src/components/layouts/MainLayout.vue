<script setup lang="ts">
/* import 部品*/
import backgroundImg from '@/assets/img/bg13.jpg';
import Footer from './MainLayoutFooter.vue';
</script>
<template>
  <!-- wrapper -->
  <div class="wrapper wrapper-full-page">
    <!-- 背景画像フルスクリーン用 -->
    <div class="full-page section-image">
      <!-- メインコンテンツ -->
      <div class="content">
        <div class="container">
          <!-- 各画面 -->
          <slot/>
        </div>
      </div>
      <!-- フッター -->
      <Footer />
      <!-- 背景画像フルスクリーン用 -->
      <div class="full-page-background" :style="{'background-image': `url(${backgroundImg})`}" />
    </div>
  </div>
</template>

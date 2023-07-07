<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="relative">
    <!-- Header -->
    <Header/>
    <!-- main content -->
    <slot/>
    <!-- Footer -->
    <Footer/>
  </div>

</template>

<style scoped>

</style>
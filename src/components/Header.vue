<script setup>
import LinkButton from "@/components/global/LinkButton.vue";
import MobileNavigation from "@/components/MobileNavigation.vue";
</script>

<template>
  <header class="sticky shadow-sm border-b border-gray z-50 bg-white/90 backdrop-blur">
    <div class="container mx-auto py-4 flex items-center justify-between">
      <!-- logo -->
      <div class="h-16 w-auto flex items-center">
        <a href="/" class="flex justify-center items-center">
          <img src="/logo.png" alt="logo">
        </a>
      </div>
      <!-- menu -->
      <div class="hidden md:block flex items-center justify-between">
        <nav class="flex flex-row justify-center gap-x-10">
          <a href="/names" class="text-lg font-medium duration-200 hover:text-primary text-body lg:text-base">All Names</a>
          <a href="/blog" class="text-lg font-medium duration-200 hover:text-primary text-body lg:text-base">By Style</a>
          <a href="/contact" class="text-lg font-medium duration-200 hover:text-primary text-body lg:text-base">by industry</a>
        </nav>
      </div>

      <!-- menu btn -->
      <div class="flex gap-x-4">
        <a href="/" class="align-middle bg-white border border-gray-300 duration-500 ease-in-out font-semibold inline-block inline-flex items-center justify-center rounded-full text-base text-center tracking-wide transition p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </a>
        <a href="/" class="align-middle bg-primary border duration-500 ease-in-out font-semibold inline-block inline-flex items-center justify-center rounded-full text-base text-center tracking-wide transition p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <MobileNavigation></MobileNavigation>
      </div>

    </div>
  </header>
</template>

<style scoped>

</style>
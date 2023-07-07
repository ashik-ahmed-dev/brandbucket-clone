<script setup>
import names from "/data/names.json"
import Default from "../layouts/Default.vue";
</script>

<template>
  <Default>
    <section>
      <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Select your brand Names</h3>

          <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-8 gap-4">
          <div v-for="(item, index) in names" :key="index" class="group text-center rounded-lg shadow hover:shadow-lg dark:shadow-gray-800 transition duration-500">
            <router-link :to="{name: 'names.domain', params:{domain: item.domain}}" class="hover:text-indigo-600 text-xl font-semibold">
              <img :src="item.logo" :alt="item.name"/>
            </router-link>
            <div class="mt-3 flex items-center justify-between bg-gray-200 px-4 py-2">
              <span class="text-indigo-600 text-base">{{item.domain}}</span>
              <span class="text-indigo-600 text-base">{{$filters.currency(item.price)}}</span>
            </div>
          </div><!--end content-->
        </div><!--end grid-->

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div class="md:col-span-12 text-center">
            <a href="" class="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More Names <i class="uil uil-arrow-right align-middle"></i></a>
          </div>
        </div><!--end grid-->
      </div><!--end container-->
    </section>
  </Default>
</template>

<style scoped>

</style>
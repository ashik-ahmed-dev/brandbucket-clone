<script setup>
import Default from "@/layouts/Default.vue";

import company from "/data/company.json"

</script>

<template>

  <Default>

    <section class="relative table w-full py-36 bg-[url('/hero.jpg')] bg-center bg-no-repeat bg-cover">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Your Source for the Best Business Names</h3>
          <p class="text-sm text-white">Explore thousands of hand-picked, creative business names available for sale with a premium domain name.</p>
          <div class="text-center subcribe-form mt-6 pt-4">
            <form class="relative mx-auto max-w-xl">
              <input type="text" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic..."/>
              <button type="submit" class="btn absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Search</button>
            </form><!--end form-->
          </div>
        </div><!--end grid-->
      </div><!--end container-->
    </section>


    <section class="px-36">
      <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-4 text-center">
          <h3 class="text-title md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">You're in Good Company</h3>
          <p class="text-body max-w-xl mx-auto">A few of the thousands of business names incubated at Pixerize</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div v-for="(name, index) in company" :key="index" class="group text-center flex items-center">
            <a href="" class="hover:text-indigo-600 text-xl font-semibold">
              <img :src="name.logo" :alt="name.name"/>
            </a>
          </div><!--end content-->
        </div><!--end grid-->

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div class="md:col-span-12 text-center">
            <a href="" class="btn btn-link text-primary hover:text-primary after:bg-primary duration-500 ease-in-out">See More Names <i class="uil uil-arrow-right align-middle"></i></a>
          </div>
        </div><!--end grid-->
      </div><!--end container-->
    </section>


    <section class="">
      <div class="container relative py-8 md:py-12 lg:py-16">
        <div class="md:flex justify-center">
          <div class="lg:w-2/3 text-center">
            <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Get the Latest Updates and Offers</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>
            <div class="mt-8">
              <div class="text-center subcribe-form">
                <form class="relative mx-auto max-w-xl">
                  <input type="email" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black ring right-2 ring-primary rounded-full bg-white/70" placeholder="Enter your email id..">
                  <button type="submit" class="btn absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                </form><!--end form-->
              </div>
            </div>
          </div>
        </div>
      </div><!--end container-->
    </section>


  </Default>

</template>

<style scoped>

</style>
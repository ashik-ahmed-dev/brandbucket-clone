<script setup>

import Default from "@/layouts/Default.vue";
import {onMounted, reactive, ref} from "vue";

let currentImage = ref('/names/details/1.jpg')
const images = reactive([
  '/names/details/1.jpg',
  '/names/details/2.jpg',
  '/names/details/3.jpg',
  '/names/details/4.jpg',
  '/names/details/5.jpg',
  '/names/details/6.jpg',
]);

</script>

<template>
  <Default>
    <section class="container  py-8">
      <div class="flex flex-row flex-wrap gap-4">
        <div class="border shadow rounded-lg flex-none md:w-2/3 w-full">
          <img v-if="currentImage" :src="currentImage" class="w-full object-cover rounded-t-lg" alt="">
          <div v-if="images[0] !== ''" class="flex items-center justify-center px-4 py-4">
            <div v-for="image in images">
              <img
                  @mouseover="currentImage = image"
                  @click="currentImage = image"
                  class="rounded-md object-fit border-2 cursor-pointer"
                  :class="currentImage === image ? 'border-red-500' : ''"
                  :src="image"
              >
            </div>
          </div>

          <div class="px-4">
            <p class="text-slate-400 mt-2">This memorable name is cerebral and keenly innovative. Possible uses: An IT startup. A software developer. A health and wellness product brand.</p>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
                <h5 class="text-lg text-slate-600 font-semibold">Styles</h5>
              </div>
              <div class="px-6 py-2">
                <p class="text-slate-400">6-Letter Domain Names</p>
                <p class="text-slate-400">Clever Business Names</p>
              </div>
            </div>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <h5 class="text-lg text-slate-600 font-semibold">Industries</h5>
              </div>
              <div class="px-6 py-2">
                <p class="text-slate-400">Health and Wellness Business Names</p>
                <p class="text-slate-400">IT / Information Technology Company Names</p>
              </div>
            </div>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                <h5 class="text-lg text-slate-600 font-semibold">Keywords</h5>
              </div>
              <div class="px-6 py-2">
                <div class="flex flex-row flex-wrap items-center gap-2">
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Cerebral</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Health</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Innovation</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Intelligent</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Nutrition</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Science</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Software</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Tech</a>
                  <a href="" class="py-1 px-2 inline-block rounded-md border align-middle transition duration-500 ease-in-out">Think</a>
                </div>
              </div>
            </div>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <h5 class="text-lg text-title font-semibold">Why BrandBucket?</h5>
              </div>
              <div class="px-6 py-2">
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">A Premium Domain Name</h4>
                  <p class="text-slate-500">Every business name on BrandBucket is curated by our experts.</p>
                </div>
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">Professionally Designed Logo</h4>
                  <p class="text-slate-500">A creative logo created by a highly skilled logo designer.</p>
                </div>
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">Transparent Pricing</h4>
                  <p class="text-slate-500">No hidden fees, no escrow fees. Guaranteed delivery.</p>
                </div>
              </div>
            </div>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h5 class="text-lg text-title font-semibold">What's Next?</h5>
              </div>
              <div class="px-6 py-2">
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">Checkout Securely</h4>
                  <p class="text-slate-500">We accept all major credit cards, Bitcoin or wire transfers.</p>
                </div>
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">Follow Transfer Instructions</h4>
                  <p class="text-slate-500">An agent will contact you with personalized information.</p>
                </div>
                <div class="mb-2">
                  <h4 class="text-slate-700 font-medium">Confirm Delivery</h4>
                  <p class="text-slate-500">Payment is held in escrow until you've received the name.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="border-r flex-1 sticky">
          <div class="p-6">
            <div class="items-center">
              <span class="text-body">The domain name</span>
              <div class="flex">
                <h3 class="uppercase font-bold text-3xl">CEROLY</h3>
                <div class="flex items-end">
                  <span class="text-xl mr-2">.com</span>
                  <p class="">is for sale.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-4">
              <h3 class="font-bold capitalize">Buy Now</h3>
              <strong class="font-bold">$2415</strong>
            </div>
            <p class="text-body">One time payment and own the name outright.</p>

            <div class="mt-6">
              <button class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mb-2">Continue to checkout</button>
              <button class="btn bg-black hover:bg-black/90 text-white rounded-md w-full">Inquire</button>
            </div>

            <div class="">
              <div class="flex flex-row items-center mt-4">
                <h5 class="text-lg text-title font-semibold">What you get</h5>
              </div>
              <div class="py-2">
                <div class="flex flex-row items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-body">Expert curated premium domain name</p>
                </div>
                <div class="flex flex-row items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-body">Professionally crafted logo design</p>
                </div>
                <div class="flex flex-row items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-body">Guaranteed transfer or your money back</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </Default>
</template>

<style scoped>

</style>
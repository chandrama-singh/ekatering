<template>
  <div>
    <nav style="height: 58px;" aria-label="top bar" class="flex-none flex justify-between border-b bg-gray-300">
      <div class="flex items-center">
        <div class="flex items-center md:hidden">
          <button @click="openClose" class="text-gray-800 focus:outline-none md:hidden ">
            <svg class="h-6 w-6 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <nuxt-link to="/" class="flex title-font font-medium items-center text-gray-900">
          <img class="h-10 mx-4 w-auto scale-150" src="~/assets/logo.png" alt="">
        </nuxt-link>
      </div>
      <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
      </ul>
      <!-- to bar right  -->
      <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
        <li class="h-10 w-10 ml-3">
          <ProfileAction />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      openClose() {
        this.$store.commit('setOpen');
      }
    }
  }

</script>

<style>

</style>

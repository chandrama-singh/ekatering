<template>
  <section class="pt-10 bg-gray-800">
    <div class=" px-4 mx-auto">
      <div class="flex flex-wrap  border-b border-gray-400">
        <div class="lg:w-2/5 px-4 mb-16 lg:mb-0">
          <!-- <span class="text-md text-purple-400 font-bold">We&apos;re Zospace</span> -->
          <div class="sizelogo">
            <nuxt-link to="/">
              <img src="@/assets/logo.png" class="h-24 w-24" />
            </nuxt-link>
            <!-- <span class="text-purple-900 text-6xl">eKatering</span> -->
          </div>
          <p class="mb-10 text-gray-300 align-justify">
            Ekatering is a systematic approach to controlling food safety
            hazards within a food business to ensure that food is safe to eat.
          </p>
          <!-- <div>
            <nuxt-link
              to="/about"
              class="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-10 text-white font-bold bg-purple-500 hover:bg-purple-600 rounded-full transition duration-200"
              >Read More</nuxt-link
            >
          </div> -->
        </div>

        <div class="lg:w-3/5 px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">Discover</h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <nuxt-link class="text-gray-200 hover:text-gray-100" to="/"
                    >Home</nuxt-link
                  >
                </li>
                <li class="mb-2">
                  <nuxt-link
                    class="text-gray-200 hover:text-gray-100"
                    to="/contactus"
                    >Contact Us</nuxt-link
                  >
                </li>
                <li class="mb-2">
                  <nuxt-link
                    class="text-gray-200 hover:text-gray-100"
                    to="/about"
                    >About Us</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">Support</h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <nuxt-link to="/faq" class="text-gray-200 hover:text-gray-100"
                    >FAQs</nuxt-link
                  >
                </li>
                <li class="mb-2">
                  <nuxt-link
                    to="/privacy"
                    class="text-gray-200 hover:text-gray-100"
                    >Privacy Policy</nuxt-link
                  >
                </li>
                <li class="mb-2">
                  <nuxt-link
                    to="/cookies"
                    class="text-gray-200 hover:text-gray-100"
                    >Cookies Policy</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">Contact</h2>
              <hr />


              <div class="flex items-center text-sm text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-purple-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="ml-4 w-48">
                  eKatering Limited PO Box, 370, Rainham, RM13 OED
                </p>
              </div>

              <div class="flex items-center mt-4 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-purple-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p class="ml-4 w-48">(+44) 1708 522 127</p>
              </div>

              <div class="flex items-center mt-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-purple-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p class="ml-4 w-48">hello@ekatering.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-sm text-gray-200 py-2 text-center">
        &copy; 2021 <nuxt-link to="/">eKatering Services</nuxt-link>.. All
        rights reserved.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.sizelogo {
  width: 100px;
}
</style>

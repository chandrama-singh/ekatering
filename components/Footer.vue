<template>
  <section class="py-10 2xl:py-10 bg-gray-800">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4 pb-20 mb-12 border-b border-gray-400">
        <div class="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
          <!-- <span class="text-md text-purple-400 font-bold">We&apos;re Zospace</span> -->
           <div class="sizelogo">
             <nuxt-link to="/">
                  <img src="@/assets/footer.png">
                </nuxt-link>
                <!-- <span class="text-purple-900 text-6xl">eKatering</span> -->
               </div>
          <p class="mb-10 text-gray-300 align-justify">
            Ekatering is a systematic approach to controlling food safety hazards within a food business to ensure that food is safe to eat.
          </p>
          <!-- <div>
            <nuxt-link
              to="/about"
              class="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-10 text-white font-bold bg-purple-500 hover:bg-purple-600 rounded-full transition duration-200"
              >Read More</nuxt-link
            >
          </div> -->
        </div>
         
        <div class="w-full lg:w-3/5 px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">
                Discover
              </h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <nuxt-link class="text-gray-200 hover:text-gray-100" to="/"
                    >Home</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link class="text-gray-200 hover:text-gray-100" to="/contactus"
                    >Contact Us</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link class="text-gray-200 hover:text-gray-100" to="/about"
                    >About Us</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">
                Support
              </h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <nuxt-link to="/faq" class="text-gray-200 hover:text-gray-100"
                    >FAQs</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link to="/privacy" class="text-gray-200 hover:text-gray-100"
                    >Privacy Policy</nuxt-link>
                </li>
                <li class="mb-2">
                  <nuxt-link to="/cookies" class="text-gray-200 hover:text-gray-100">Cookies Policy</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">
                Contact
              </h2>
              <hr class="mb-3" />
              
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex justify-between item-center">
        <p class="text-lg text-gray-200 item-center ">
          &copy; 2021 <nuxt-link to="/">Ekatering Services</nuxt-link>.. All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.sizelogo{
  width:500px;
}
</style>

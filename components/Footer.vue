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
                FOOD ORDERING
              </h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100" href="#"
                    >Food Safety for Caterers</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100" href="#"
                    >Food Standard</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100" href="#"
                    >Pricing</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100" href="#"
                    >Food Registration</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100" href="#"
                    >Food Safety Managements</a
                  >
                </li>
                <li>
                  <a class="text-gray-200 hover:text-gray-100" href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">
                RESTAURANT SERVICES
              </h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100"
                    >Training</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100"
                    >Features</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100"
                    >Why Choose Us</a
                  >
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100">FAQ</a>
                </li>
                <li class="mb-2">
                  <a class="text-gray-200 hover:text-gray-100"
                    >Consultations</a
                  >
                </li>
                <li>
                  <a class="text-gray-200 hover:text-gray-100">Team</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <h2 class="mb-4 text-gray-200 hover:text-gray-100">
                PARTNER & SUPPORT
              </h2>
              <hr class="mb-3" />
              <ul class="text-md">
                <li class="mb-2">
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >New account</nuxt-link>
                  
                </li>
                <li class="mb-2">
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >Log in</nuxt-link>
                  
                </li>
                <li class="mb-2">
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >Online Training</nuxt-link>
                  
                </li>
                <li class="mb-2">
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >Contact</nuxt-link>
                  
                </li>
                <li class="mb-2">
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >Consultancy Services</nuxt-link>
                  
                </li>
                <li>
                  <nuxt-link to="" class="text-gray-200 hover:text-gray-100"
                    >Cookies</nuxt-link>
                  
                </li>
              </ul>
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

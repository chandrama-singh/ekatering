<template>
  <div>
      <section class="py-12 md:py-32 overflow-x-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap lg:flex-nowrap">
            <div class="w-full lg:w-1/2">
              <div class="py-6 lg:pr-32">
                <div class="mb-4">
                  <h2 class="text-4xl mt-3 font-bold font-heading">Key Features</h2>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Food Business Registration</h3>
                    <p class="text-blueGray-400 leading-loose">Before you can trade as a home/event caterer or a private chef, you must register with your local authority.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Food Safety Management</h3>
                    <p class="text-blueGray-400 leading-loose">A documented Food Safety Management System (FSMS) is a systematic approach to controlling food safety hazards within a food business to ensure that food is safe to eat.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Virtual Remote Inspection</h3>
                    <p class="text-blueGray-400 leading-loose">VRI is the way forward in this changing world that we live in. This service applies to small catering kitchens such as those used by home/event caterers and private chefs.</p>
                  </div>
                 
                </div>
                 <nuxt-link to="/consultations" class="pl-12 text-pirple-900">Know More ></nuxt-link>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2 my-12 lg:my-0 transform transition duration-500 hover:scale-110">
              <img class="relative mx-auto rounded-xl w-full z-10" src="@/assets/food1.png" alt="">
              <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt="">
              <img class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="metis-assets/elements/blob-tear.svg" alt="">
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
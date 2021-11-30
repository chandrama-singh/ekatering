<template>
  <section class=" bg-red-50">
      <div class=" max-w-6xl mx-auto py-10 space-y-6">
           <div class="  justify-between flex">
           <h1 class="font-bold text-4xl text-gray-800 flex">Register Your Business
             <span class="pl-4 mt-3"
                ><svg
                  width="4"
                  height="22"
                  viewBox="0 0 4 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24L-1.04907e-06 0L4 -1.74846e-07L4 24L0 24Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-0.82215"
                      y1="13.4145"
                      x2="4.72031"
                      y2="12.3249"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEC972" />
                      <stop offset="1" stop-color="#FF878E" />
                    </linearGradient>
                  </defs></svg
              ></span>
           </h1>



        </div>
        <p class="text-gray-800 font-bold text-2xl">There are 4 easy steps to register your business</p>
        <!--------======================Card section==================-------->
        <div class="flex w-full border">
            <div class="flex w-1/3 mr-2">
             <div class="lg:flex shadow rounded-lg">
      <div class="bg-purple-400 rounded-l-lg lg:w-1/3 h-auto w-auto py-10">
          <p class="text-white font-semibold text-xl block origin-left-top transform -rotate-90">STEP 1</p>
      </div>
      <div class="w-full  lg:w-2/3 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
           <p class="text-md">Enter details like Store Icon, Select Role, Business Name, Business Email, etc and click on next button.</p>
          </div>
        </div>

      </div>
    </div>
            </div>
            <!----------------2nd card----------------------->
             <div class="flex w-1/3 mr-2">
             <div class="lg:flex shadow rounded-lg">
      <div class="bg-purple-400 rounded-l-lg lg:w-1/3 h-auto w-auto py-10">
          <p class="text-white font-semibold text-xl block origin-left-top transform -rotate-90">STEP 2</p>
      </div>
      <div class="w-full  lg:w-2/3 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
           <p class="text-md">Enter details like Local Address, Town, Country, PostCode etc. and click on next button.</p>
          </div>
        </div>

      </div>

    </div>
            </div>
             <!----------------3rd card----------------------->
             <div class="flex w-1/3">
             <div class="lg:flex shadow rounded-lg">
      <div class="bg-purple-400 rounded-l-lg lg:w-1/3 h-auto w-auto py-10">
          <p class="text-white font-semibold text-xl block origin-left-top transform -rotate-90">STEP 3</p>
      </div>
      <div class="w-full  lg:w-2/3 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
           <p class="text-md">Upload Your Documentation like Proof of Address, Locall Authority Food Registration Letter, FHRS Award Letter. and click on next button.</p>
          </div>
        </div>

      </div>

    </div>
            </div>

        </div>
        <div>
        </div>
</div>
<div class="w-full bg-white py-4 pb-12">
    <div class=" max-w-6xl mx-auto py-10 space-y-6">
        <div class="text-center">
             <h1 class="font-bold text-4xl text-gray-800">How do the steps look like?</h1>
        </div>
    </div>
    <div class="flex items-center justify-center text-center mt-8">
                <button @click="ProgramForm()"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    py-3
                    px-8 font-semibold
                    bg-purple-500
                    rounded-lg
                    text-white
                  "
                >
                  Register
                </button>
              </div>
</div>
  </section>
</template>

<script>
export default {
   layout:'register',
    methods:{
    ProgramForm(){
      this.$router.push("/caterers/register/step-one");
    },

  }

}
</script>

<style>

</style>

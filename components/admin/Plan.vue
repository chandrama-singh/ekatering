<template>
  <section class="py-1 bg-blueGray-100">
    <div class="w-full lg:w-10/12 px-4 mx-auto mt-4">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded-lg
          bg-blue-50
          border-2
          border-purple-400
        "
      >
        <div class="rounded-t bg-purple-500 mb-0 px-6 py-6">
          <div class="text-left flex-wrap  text-white ">
            <h6 class="text-blueGray-700 text-xl font-bold">Review Your Plan</h6>
            <p>To keep enjoying your eKatering Plan, make your payment now</p>
          </div>
        </div>
       
        <!-- <div
          class="
            flex flex-wrap
            text-center
            -mx-px
            overflow-hidden
            md:-mx-1
            lg:-mx-1
            xl:-mx-2
          "
        >
        
          
        </div> -->

        <div class="flex-auto px-4 lg:px-10 py-10 pt-6">
          
            <div class="flex flex-wrap">
              <div class="w-full lg:w-full  px-4">
                  <div class="flex w-full">
                <div class="relative w-1/2 mb-3 mr-4 text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    class="
                      border-0
                      px-3
                      
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>

                <div class="relative w-1/2 mb-3 text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   Price
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>
                  </div>
                   <div class="flex w-full">
               <div class="relative w-1/2 mb-3 mr-4  text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   Banner
                  </label>

                 <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input type='file' class="hidden" />
    </label>
                </div>
                <div class="relative w-1/2 mb-3 text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   ProductID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product ID"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>
               </div>
               <div class="flex w-full">
               <div class="relative w-full mb-3   text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   Description
                  </label>
                  <textarea
                    type=" text"
                    placeholder="Description"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>
                
               </div>
               <div class="flex w-full mb-3">
               <div class="relative w-1/2  mr-4  text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   recurringPriceID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter recurringPriceID"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>
                <div class="relative w-1/2  text-left">
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   oneTimePriceID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter oneTimePriceID"
                    class="
                      border-0
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      bg-white
                      rounded
                      text-sm
                      shadow
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>
               </div>
               <div class="flex w-full mt-3">
               <div class="relative w-1/2 mb-3 mr-4 flex  text-left">
                  <input type="checkbox" class="mr-2 mt-1" /> <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   isRecommended
                  </label>
                  
                </div>
                <div class="relative w-1/2 mb-3 flex text-left">
                   <input type="checkbox" class="mr-2 mt-1" />
                  <label
                    class="
                      block
                      
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   status
                  </label>
                  
                </div>
               </div>
                <input type="checkbox" class="mr-2" />I have read, understood
                and agree to the Terms and Conditions
                <button
                  class="
                    inline-block
                    py-4
                    px-8
                    mt-4
                    w-full
                    leading-none
                    text-white
                    bg-purple-600
                    hover:bg-purple-700
                    font-semibold
                    rounded
                    md:rounded-lg
                  "
                >
                  Process To Submit
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
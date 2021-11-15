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
          <div class="text-left flex  text-white">
            <h6 class="text-blueGray-700 text-xl font-bold">Review Your Subscription</h6>
          </div>
        </div>
       
        <div
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
        
          <div
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
              font-bold
            "
          >
            Payment Details
          </div>

          <div
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
              font-bold
            "
          >
            CVV
          </div>

          <div
            class="
              my-px
              px-10
              text-center
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
            "
          >
          <span class="ml-4 absolute left-4">
              <img class="w-20" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
            </span>
            <span
            class="
              my-px
              text-left
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
              font-bold
            "
          >
            Credit Card
          </span><br/>
            2566 xxxx xxxx 8908
          </div>

          <div
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
            "
          >
           <input
                        type="cvv"
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
                          w-1/3
                          ease-linear
                          transition-all
                          duration-150
                        "
                        placeholder="CVV"
                      />
          </div>
           <div
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
            "
          >
           <span class="ml-4 absolute left-4">
              <img class="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
            </span>
         <span
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
              font-bold
            "
          >
            Credit Card
          </span><br/>
            2566 xxxx xxxx 8908
          </div>

          <div
            class="
              my-px
              px-px
              w-full
              overflow-hidden
              md:my-1 md:px-1 md:w-1/2
              lg:my-1 lg:px-1 lg:w-1/2
              xl:my-2 xl:px-2 xl:w-1/2
            "
          >
           <input
                        type="cvv"
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
                          w-1/3
                          ease-linear
                          transition-all
                          duration-150
                        "
                        placeholder="CVV"
                      />
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-6">
          
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3 text-left">
                  <label
                    class="
                      block
                      uppercase
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                    "
                    htmlfor="grid-password"
                  >
                   Add Payment Method
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
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
                  Process To Payment
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
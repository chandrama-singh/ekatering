<template>
  <section class="py-1 bg-white">
    <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          
          bg-blue-50
          rounded-lg shadow-xl border-2 border-purple-400
        "
      >
        <div class="rounded-t bg-purple-500 mb-0 px-6 py-6">
          <div class="text-center flex justify-center">
            <h6 class="text-white text-xl font-bold">Checkout</h6>
          </div>
        </div>
        <div class="text-center flex justify-center mt-3">
           <ul class="flex">
            <li class="mx-2">
              <img class="w-24" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
            </li>
            <li class="mx-2">
              <img class="w-24" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
            </li>
            <li class="ml-5">
              <img class="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
            </li>
          </ul>
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
            Product Title
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
            Price
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
            Local Authority Food Registration
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
            £ 20.00
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-6">
          <form>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-4 text-center">
                  <!-- <label
                    class="
                      block
                      uppercase
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                      text-left
                    "
                    htmlfor="grid-password"
                  >
                    Cardholder Name
                  </label> -->
                  <input
                    type="text"
                    placeholder="Name on the Card"
                    class="
                      border rounded-lg bg-white shadow-lg
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      
                      text-sm
                      
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>

                <div class="relative w-full mb-4 text-center">
                  <!-- <label
                    class="
                      block
                      uppercase
                      text-blueGray-600 text-sm
                      font-bold
                      mb-2
                      text-left
                    "
                    htmlfor="grid-password"
                  >
                    Card Details
                  </label> -->
                  <input
                    type="text"
                    placeholder="Card Number"
                    class="
                      border rounded-lg bg-white shadow-lg
                      px-3
                      py-3
                      placeholder-blueGray-300
                      text-blueGray-600
                      
                      text-sm
                     
                      focus:outline-none focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150
                    "
                    rows="4"
                  />
                </div>

                <div class="flex flex-wrap mb-3">
                  <div class="w-full lg:w-6/12">
                    <div class="relative w-full mb-3 flex gap-2">
                      <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-1/2 px-5 py-2 border rounded-lg bg-white shadow-lg  placeholder-blueGray-300
                          text-blueGray-600 focus:ring focus:outline-none"
                  x-model="expired.month"
                >
                  <option value="" selected disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-1/2 px-5 py-2 border rounded-lg bg-white shadow-lg  placeholder-blueGray-300
                          text-blueGray-600 focus:ring focus:outline-none"
                  x-model="expired.year"
                >
                  <option value="" selected disabled>YY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <!-- <label
                        class="
                          block
                          uppercase
                          text-blueGray-600 text-xs
                          font-bold
                          mb-2
                        "
                        htmlfor="grid-password"
                      >
                        CVV
                      </label> -->
                      <input
                        type="cvv"
                        placeholder="CVV"
                        class="
                          border rounded-lg bg-white shadow-lg
                          px-3
                          py-3
                          placeholder-blueGray-300
                          text-blueGray-600
                          
                          text-sm
                         
                          focus:outline-none focus:ring
                          w-full
                          ease-linear
                          transition-all
                          duration-150
                        "
                      />
                    </div>
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
                  Process Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
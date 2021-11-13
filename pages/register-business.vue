<template>
<div>
    <div
      class="
        min-h-screen
        flex
        justify-center
        bg-center
        py-12
        px-4
        sm:px-6
        lg:px-8
        bg-no-repeat bg-cover
        relative
        items-center
      "
    >
      <div class="absolute opacity-60 inset-0 z-0"></div>
      <div
        class="
          
          w-2/3
          space-y-8
          p-10
          bg-white
          rounded-xl
          shadow-lg
          z-10
        "
      >
        <div class="grid gap-8 grid-cols-1">
          <div class="flex flex-col ">
            <div class="flex flex-col sm:flex-row items-center text-center border-b-2 ">
              <h2 class="font-semibold text-lg mr-auto text-center pb-4">Register your business</h2>
              <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div class="mt-5">
              <div class="form">
                <div class="md:space-y-2 mb-3">
                  <label class="text-xs font-semibold text-gray-600 py-2"
                    >Catering Category<abbr class="hidden" title="required"
                      >*</abbr
                    ></label
                  >
                  <div class="flex items-center py-2 w-2/4">
                    <select id="country" name="country" autocomplete="country"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Head office</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                  </div>
                </div>
                <div class="md:space-y-2 mb-3">
                  <label class="text-xs font-semibold text-gray-600 py-2"
                    >Business Logo<abbr class="hidden" title="required"
                      >*</abbr
                    ></label
                  >
                  <div class="flex items-center py-6">
                    <!-- <div
                      class="
                        w-12
                        h-12
                        mr-4
                        flex-none
                        rounded-xl
                        border
                        overflow-hidden
                      "
                    >
                      <img
                        class="w-12 h-12 mr-4 object-cover"
                        src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                        alt="Avatar Upload"
                      />
                    </div> -->
                    <label class="cursor-pointer">
                      <span
                        class="
                          focus:outline-none
                          text-white text-sm
                          py-2
                          px-4
                          rounded-full
                          bg-green-400
                          hover:bg-green-500 hover:shadow-lg
                        "
                        >Browse</span
                      >
                      <input
                        type="file"
                        class="hidden"
                        :multiple="multiple"
                        :accept="accept"
                      />
                    </label>
                  </div>
                </div>
                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business Name <abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Business Name"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business Mail <abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Business Email ID"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p class="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
              
                <!------------------------------------------------>
                <div class="flex-auto w-full mb-1 text-xs space-y-2">
                  <label class="font-semibold text-gray-600 py-2"
                    >Business Address</label
                  >
                  <textarea
                    required=""
                    name="message"
                    id=""
                    class="
                      w-full
                      min-h-[100px]
                      max-h-[300px]
                      h-28
                      appearance-none
                      block
                    
                      bg-grey-lighter
                      text-grey-darker
                      border border-grey-lighter
                      rounded-lg
                      py-4
                      px-4
                    "
                    placeholder="address line 1"
                    spellcheck="false"
                  ></textarea>
                  <!-- <p class="text-xs text-gray-400 text-left my-3">
                    You inserted 0 characters
                  </p> -->
                </div>
                <div class="flex-auto w-full mb-1 text-xs space-y-2">
                  <!-- <label class="font-semibold text-gray-600 py-2"
                    >Business Address 1</label
                  > -->
                  <textarea
                    required=""
                    name="message"
                    id=""
                    class="
                      w-full
                      min-h-[100px]
                      max-h-[300px]
                      h-28
                      appearance-none
                      block
                    
                      bg-grey-lighter
                      text-grey-darker
                      border border-grey-lighter
                      rounded-lg
                      py-4
                      px-4
                    "
                    placeholder="address line 2"
                    spellcheck="false"
                  ></textarea>
                  <!-- <p class="text-xs text-gray-400 text-left my-3">
                    You inserted 0 characters
                  </p> -->
                </div>

                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business Town<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Business Town"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address1"
                    />
                  </div>
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business Country<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Business Country"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address2"
                    />
                    <p class="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business PostCode<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Business Postcode"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address1"
                    />
                  </div>
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Business Contact No.<abbr title="required"
                        >*</abbr
                      ></label
                    >
                    <input
                      placeholder="Business Contact Number"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address2"
                    />
                    <p class="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="text-xs font-semibold text-gray-600 pt-2 pb-2"
                      >Proof of address<abbr title="required"
                        >*</abbr
                      ></label
                    >
                    <div class="flex items-center pt-2 pb-6">
                      <!-- <div
                        class="
                          w-12
                          h-12
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-12 h-12 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div> -->
                      <label class="cursor-pointer">
                        <span
                          class="
                            focus:outline-none
                            text-white text-sm
                            py-2
                            px-4
                            rounded-full
                            bg-green-400
                            hover:bg-green-500 hover:shadow-lg
                          "
                          >Browse</span
                        >
                        <input
                          type="file"
                          class="hidden"
                          :multiple="multiple"
                          :accept="accept"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="w-full flex flex-col mb-3">
                    <label class="text-xs font-semibold text-gray-600 pt-2"
                      >Local Authority Food Registration Letter<abbr
                        
                        title="required"
                        >*</abbr
                      ></label
                    >
                    <div class="flex items-center pt-2 pb-6">
                      <!-- <div
                        class="
                          w-12
                          h-12
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-12 h-12 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div> -->
                      <label class="cursor-pointer">
                        <span
                          class="
                            focus:outline-none
                            text-white text-sm
                            py-2
                            px-4
                            rounded-full
                            bg-green-400
                            hover:bg-green-500 hover:shadow-lg
                          "
                          >Browse</span
                        >
                        <input
                          type="file"
                          class="hidden"
                          :multiple="multiple"
                          :accept="accept"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="text-xs font-semibold text-gray-600 pt-2"
                      >Food Hygiene Rating Scheme (FHRS) award letter<abbr
                    
                        title="required"
                        >*</abbr
                      ></label
                    >
                    <div class="flex items-center pt-2 pb-6">
                      <!-- <div
                        class="
                          w-12
                          h-12
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-12 h-12 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div> -->
                      <label class="cursor-pointer">
                        <span
                          class="
                            focus:outline-none
                            text-white text-sm
                            py-2
                            px-4
                            rounded-full
                            bg-green-400
                            hover:bg-green-500 hover:shadow-lg
                          "
                          >Browse</span
                        >
                        <input
                          type="file"
                          class="hidden"
                          :multiple="multiple"
                          :accept="accept"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="w-full flex flex-col mb-3">
                    <label class="text-xs font-semibold text-gray-600 pt-2"
                      >FHRS Next Inspection Due Date (call your local authority
                      to get this date):</label
                    >
                    <div class="flex items-center py-6">
                      <!-- <div
                        class="
                          w-12
                          h-12
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-12 h-12 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div> -->
                      
                    
                        <input
                          placeholder="DD/MM/YYYY"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        px-4
                      "
                      type="date"
                      
                      id="datetime"
                        />
                      
                    </div>
                  </div>
                </div>
                <!-- <p class="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk
                  <abbr title="Required field">*</abbr>
                </p> -->
                 <input type="checkbox" class="mr-2" />I have read, understood
                and agree to the Terms and Conditions

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Section  --><!-- Payment Section  --><!-- Payment Section  -->
    <!-- Payment Section  --><!-- Payment Section  --><!-- Payment Section  -->
<section class="py-1 bg-blueGray-100">
    <div class="w-full lg:w-8/12 px-4 mx-auto mt-4">
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
          border-0
        "
      >
        <div class="rounded-t bg-purple-500 mb-0 px-6 py-6">
          <div class="text-center flex justify-center text-white">
            <h6 class="text-blueGray-700 text-xl font-bold">CHECKOUT</h6>
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
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name on the Card"
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
                    Card Details
                  </label>
                  <input
                    type="text"
                    placeholder="Card Number"
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

                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-blueGray-600 text-xs
                          font-bold
                          mb-2
                        "
                        htmlfor="grid-password"
                      >
                        MM / YY
                      </label>
                      <span class="flex">
                       <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
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
                  class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
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
                </span>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
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
                      </label>
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
                          w-full
                          ease-linear
                          transition-all
                          duration-150
                        "
                      />
                    </div>
                  </div>
                </div>
               
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
                  Make payment and submit application
                </button>
              </div>
            </div>
          </form>
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
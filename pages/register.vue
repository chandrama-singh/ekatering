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
          <div class="flex flex-col">
            <div class="flex flex-col sm:flex-row items-center">
              <h2 class="font-semibold text-lg mr-auto">Register your business</h2>
              <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div class="mt-5">
              <div class="form">
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
                <!-- <div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Business  Website</label>
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                   </span>
								</div>
								<input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                  </div>
							</div> -->
                <!------------------------------------------------->
                <!-- <div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Business  Website</label>
								<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Location<abbr title="required">*</abbr></label>
										<select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                  <option value="">Seleted location</option>
                  <option value="">Cochin,KL</option>
                  <option value="">Mumbai,MH</option>
                  <option value="">Bangalore,KA</option>
                </select>
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
							</div> -->
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

                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Contact Number<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Contact Number"
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
                      >Contact Email<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Contact Email"
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
                      >Contact First Name<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="First Name"
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
                      >Contact Last Name<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Last Name"
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

                <p class="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk
                  <abbr title="Required field">*</abbr>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Payment Section  -->


<section class="py-1 bg-blueGray-50">
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
          bg-blueGray-100
          border-0
        "
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-center">
            <h6 class="text-blueGray-700 text-xl font-bold">Checkout</h6>
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
                <div class="relative w-full mb-3 text-center">
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

                <div class="relative w-full mb-3 text-center">
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
                      <input
                        type="text"
                        placeholder="MM / YY"
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
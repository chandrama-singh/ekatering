<template>
  <section class="py-10 bg-white">
    <div class="flex items-center justify-center px-4">
      <div
        class="
          max-w-4xl
          bg-blue-50
          w-full
          rounded-lg
          shadow-xl
          border-2 border-purple-400
        "
      >
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
          <h2 class="text-2xl font-semibold">My Account</h2>
          <!-- <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">First Name</p>
            <input
              placeholder="Enter First Name"
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
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Last Name</p>
            <input
              placeholder="Enter Last Name"
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
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              Email<span class="text-red-500">*</span>
            </p>
            <input
              placeholder="Email"
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
              type="email"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Password</p>
            <input
              placeholder="Enter Password"
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
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
          </div>

          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Password Confirmation</p>
            <input
              placeholder="Re-Enter Password "
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
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
          </div>

          <!--------------------------------------->

          <!-- <div class="p-4 border-b flex justify-center py-6">
                        <button type="submit"
                            class="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md  bg-indigo-600 hover:bg-indigo-700 text-white">
                            Submit
                        </button>
        </div> -->
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
            border-2 border-purple-400
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
                <img
                  class="w-24"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                  alt=""
                />
              </li>
              <li class="mx-2">
                <img
                  class="w-24"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                  alt=""
                />
              </li>
              <li class="ml-5">
                <img
                  class="w-14"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                  alt=""
                />
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
              Food Safety for Caterers and Private Chefs - Level 2
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
              £ 30.00
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
                            class="
                              form-select
                              appearance-none
                              block
                              w-full
                              px-5
                              py-2
                              border
                              rounded-lg
                              bg-white
                              shadow-lg
                              placeholder-gray-400
                              text-gray-700
                              focus:ring focus:outline-none
                            "
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
                            class="
                              form-select
                              appearance-none
                              block
                              w-full
                              px-5
                              py-2
                              border
                              rounded-lg
                              bg-white
                              shadow-lg
                              placeholder-gray-400
                              text-gray-700
                              focus:ring focus:outline-none
                            "
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
                    Make payment and submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

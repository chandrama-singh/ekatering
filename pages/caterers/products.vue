<template>
  <div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-lg">
          <div class="w-full md:w-1/5 h-auto max-h-screen">
            <div class="top flex items-center px-5 h-16 bg-gray-800 text-white">
              <div class="ml-3 flex flex-col text-xl">Product</div>
            </div>
            <div class="bg-gray-300 w-full h-full sm:flex md:block border-r-2">
              <!---------------------------Side Bar Menu---------------------------->
              <button
                id="button-1"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 1,
                  'text-white bg-purple-600': openTab === 1,
                }"
                class="
                  w-full
                  border-b-2
                  flex
                  justify-between
                  items-center
                  px-5
                  py-2
                  hover:bg-purple-500 hover:text-white
                  cursor-pointer
                  focus:outline-none
                "
              >
                <span><i class="fa fa-inbox w-6"></i>Products</span>
              </button>
              <button
                id="button-2"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 2,
                  'text-white bg-purple-600': openTab === 2,
                }"
                class="
                  w-full
                  border-b-2
                  flex
                  justify-between
                  items-center
                  px-5
                  py-2
                  hover:bg-purple-500 hover:text-white
                  cursor-pointer
                  focus:outline-none
                "
              >
                <span><i class="fa fa-envelope w-6"></i>Categories</span>
              </button>
              <button
                id="button-3"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 3,
                  'text-white bg-purple-600': openTab === 3,
                }"
                class="
                  w-full
                  border-b-2
                  flex
                  justify-between
                  items-center
                  px-5
                  py-2
                  hover:bg-purple-500 hover:text-white
                  cursor-pointer
                  focus:outline-none
                "
              >
                <span><i class="fa fa-bookmark w-6"></i>Discounts</span>
              </button>
             <!---------------------------Side Bar Menu---------------------------->
            </div>
          </div>

          <div class="w-full md:w-4/5 max-h-screen">
            <div
              class="
                top
                flex
                items-center
                px-5
                h-16
                bg-gray-700
                text-white text-2xl
              "
            >
              <!--------------------------Products--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <span>Product List</span>
                <span class="float-right">
                  <button
                    v-show="isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-blue-600
                      text-white
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Back
                  </button>
                  <button
                    v-show="!isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Product
                  </button></span
                >
              </div>
              
              
              <!----------------Product ADD END --------------------->
              <!--------------------------Categories ADD--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <span>Categories</span>
                <span class="float-right">
                  <button
                    v-show="isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-blue-600
                      text-white
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Back
                  </button>
                  <button
                    v-show="!isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Categories
                  </button></span
                >
              </div>
              <!--------------------------Discount ADD--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <span>Discount</span>
                <span class="float-right">
                  <button
                    v-show="isShow1"
                    @click="isShow1 = !isShow1"
                    class="
                      bg-blue-600
                      text-white
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Back
                  </button>
                  <button
                    v-show="!isShow1"
                    @click="isShow1 = !isShow1"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Discount
                  </button></span
                >
              </div>
            </div>
            <div class="w-full max-h-screen overflow-y-auto bg-purple-50">
              <!--------------------------Products--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden shadow-lg">
                    <div class="w-full overflow-x-auto" v-show="!isShow">
                      <table class="w-full">
                        <thead>
                          <tr
                            class="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-white
                              bg-gray-800
                              border-b border-gray-600
                            "
                          >
                            <th class="px-4 py-2">Product ID</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">Category</th>
                            <th class="px-4 py-2">Price</th>
                            <!-- <th class="px-4 py-2">Product Type</th> -->
                            <th class="px-4 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                              <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                     <NewProduct v-show="isShow" />
                  </div>
                </section>
              </div>
              <!--------------------------Categories--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div
                  class="item-center text-center py-10 justify-items-center"
                  v-show="!isShow"
                >
                  <center>
                    <div
                      class="border border-gray-800 max-w-xl items-center py-10"
                    >
                      <span class="text-lg font-semibold"
                        >No Categories Exist</span
                      ><br />
                      <span>Categories are used to organize your products</span>
                    </div>
                  </center>
                  <!------------------------------------Category Table---------------------------------->
                  <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden shadow-lg">
                    <div class="w-full overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr
                            class="
                              text-md
                              font-semibold
                              tracking-wide
                              text-center text-white
                              bg-gray-800
                              border-b border-gray-600
                            "
                          >
                            <th class="px-4 py-2">Category ID</th>
                            <th class="px-4 py-2">Title</th>
                            <th class="px-4 py-2">Description</th>

                            <th class="px-4 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                              <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                  <!------------------------------------Category Table---------------------------------->
                </div>
                <NewCategory v-show="isShow" />
              </div>
              <!--------------------------Discount--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <div
                  class="item-center text-center py-10 justify-items-center"
                  v-show="!isShow1"
                >
                  <center>
                    <div
                      class="border border-gray-800 max-w-xl items-center py-10"
                    >
                      <span class="text-lg font-semibold"
                        >No Discount Exist</span
                      ><br />
                      <span
                        >Create discount code your customers can use at
                        checkout</span
                      >
                    </div>
                  </center>
                  <!------------------------------------Discount Table---------------------------------->
                  <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden shadow-lg">
                    <div class="w-full overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr
                            class=" text-center
                              text-md
                              font-semibold
                              tracking-wide
                               text-white
                              bg-gray-800
                              border-b border-gray-600
                            "
                          >
                            <th class="px-4 py-2">Coupon ID</th>
                            <th class="px-4 py-2">Coupon Code</th>
                            <th class="px-4 py-2">Discount Percentage</th>

                            <th class="px-4 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                              <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                              <button
                    class="
                      bg-blue-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white

                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none

                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                  <!------------------------------------Discount Table---------------------------------->
                </div>
                <NewCoupons v-show="isShow1" class="CategoryPage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from "@/components/cateres/NewProduct.vue";
import NewCategory from "@/components/cateres/NewCategory.vue";
import NewCoupons from "@/components/cateres/NewCoupons.vue";
export default {
  layout: "user",

  components: {
    NewCategory,
    NewCoupons,
    NewProduct
  },

  data() {
    return {
      openTab: 1,
      showModal: false,
      isShow: false,
      isShow1: false,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
</style>

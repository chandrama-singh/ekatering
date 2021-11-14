<template>
  <section>
       <div
               
                class="
                  fixed
                  inset-0
                  z-50
                  outline-none
                  focus:outline-none
                  justify-center
                  items-center
                  flex
                  overflow-y-scroll
                "
              >
       <div
                  class="
                    flex flex-col
                    w-11/12
                    sm:w-5/6
                    lg:w-1/2
                    max-w-2xl
                    mx-auto
                    rounded-lg
                    border border-gray-300
                    shadow-xl
                  "
                >
                  <div
                    class="
                      flex flex-row
                      text-center
                      justify-between
                      p-4
                      bg-purple-500
                      border-b border-gray-200
                      rounded-tl-lg rounded-tr-lg
                    "
                  >
                    <p class="font-semibold text-lg text-center text-white">
                      ADD Product
                    </p>
                    <svg
                      v-on:click="toggleModal()"
                      class="w-6 h-6 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col px-6 bg-gray-50 text-sm">
                    <p class=" font-semibold text-gray-700">
                      Product Banner
                    </p>
                    <div class="flex items-center py-2">
                      <div
                        class="
                          w-28
                          h-28
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-28 h-28 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div>
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
                    <div
                      class="
                        flex flex-col
                        sm:flex-row
                        items-center
                        mb-2
                        sm:space-x-5
                      "
                    >
                      <div class="w-full sm:w-1/2">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Name
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product Name"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                      <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Category
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product category"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                    </div>

                    <p class="mb-1 font-semibold text-gray-700">
                      Product Description
                    </p>
                    <input
                      type="textbox"
                      name=""
                      placeholder="Enter Product Description"
                      class="
                        py-6
                        mb-2
                        bg-white
                        border border-gray-200
                        rounded
                        shadow-sm
                      "
                      id=""
                    />


                    <div
                      class="
                        flex flex-col
                        sm:flex-row
                        items-center
                        mb-2
                        sm:space-x-5
                      "
                    >
                      <div class="w-full sm:w-1/2">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product ID
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product ID"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                      <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Price
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product Price"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      flex
                      text-lg
                      flex-row
                      items-center
                      justify-center
                      p-4
                      bg-white
                      border-t border-gray-200
                      rounded-bl-lg rounded-br-lg
                    "
                  >
                    <button
                      v-on:click="toggleModal()"
                      class="
                        px-4
                        py-2
                        text-white
                        
                        bg-red-500
                        rounded
                        mr-4
                      "
                    >
                      Cancel
                    </button>
                    <button
                      v-on:click="toggleModal()"
                      class="
                        px-4
                        py-2
                        text-white
                        
                        bg-purple-500
                        rounded
                      "
                    >
                      Save
                    </button>
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
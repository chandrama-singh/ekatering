<template>
  <section>
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
              <h2 class="font-semibold text-lg mr-auto text-center pb-4">Edit Product</h2>
              <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div class="mt-5">
              <div class="form">
               
                <div class="md:space-y-2 mb-3">
                  <label class="text-xs font-semibold text-gray-600 py-2"
                    >Product Image<abbr class="hidden" title="required"
                      >*</abbr
                    ></label
                  >
                  <div class="flex items-center py-6">
                    <div
                      class="
                        w-24
                        h-24
                        mr-4
                        flex-none
                        rounded-xl
                        border
                        overflow-hidden
                      "
                    >
                      <img
                        class="w-24 h-24 mr-4 object-cover"
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
                </div>
                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Product Name </label
                    >
                    <input
                      placeholder="Product Name"
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
                 
                </div>
              
                <!------------------------------------------------>
                <div class="flex-auto w-full mb-1 text-xs space-y-2">
                  <label class="font-semibold text-gray-600 py-2"
                    >Product Description</label
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
                    placeholder="Description"
                    spellcheck="false"
                  ></textarea>
                  <!-- <p class="text-xs text-gray-400 text-left my-3">
                    You inserted 0 characters
                  </p> -->
                </div>
            <!----------------------------------------------------------------->
            <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Product Category </label
                    >
                    <input
                      placeholder="Product Category"
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
                     
                    />
                    
                  </div>
                 
                </div>
            <!----------------------------------------------------------------->
                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div class="w-full flex flex-col mb-3">
                    <label class="font-semibold text-gray-600 py-2"
                      >Product ID</label
                    >
                    <input
                      placeholder="Product ID"
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
                      >Product Price<abbr title="required">*</abbr></label
                    >
                    <input
                      placeholder="Product Price"
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
                     
                      class="
                        px-4
                        py-2
                        text-white
                        
                        bg-purple-600
                        rounded
                        mr-4
                      "
                    >
                      Update
                    </button>
                    <button
                     
                      class="
                        px-4
                        py-2
                        text-white
                        
                        bg-red-600
                        rounded
                      "
                    >
                      Cancel
                    </button>
                  </div>
              </div>
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
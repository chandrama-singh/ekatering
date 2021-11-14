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
              <h2 class="font-semibold text-lg mr-auto text-center pb-4">Edit Coupon/Discount</h2>
              <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div class="mt-5">
              <div class="form">
              
                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Coupon Code </label
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
               <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2"
                      >Coupon Percentage </label
                    >
                    <input
                      placeholder="Coupon Percentage"
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
            <!----------------------------------------------------------------->
           

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
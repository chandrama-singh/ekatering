<template>
  <section class="py-10 bg-white">
      <div class=" flex items-center justify-center px-4">
    <div class="max-w-4xl  bg-blue-50 w-full rounded-lg shadow-xl border-2 border-purple-400 ">
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
            <h2 class="text-2xl font-semibold">
                My Training
            </h2>
            <!-- <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Module 1
                   
                </p>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Module 1
                   <span></span>
                </p>
                  <p class="text-gray-600 ">
                   Duration
                </p>
            </div>
            
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Last Name
                </p>
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Password
                </p>
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
            
         <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Password Confirmation
                </p>
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

  </section>

</template>

<script>
export default {

}
</script>

<style>

</style>
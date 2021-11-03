<template>
  <section class="py-10 bg-white">
      <div class="min-h-screen flex items-center justify-center px-4">
    
    <div class="max-w-4xl  bg-blue-50 w-full rounded-lg shadow-xl border-2 border-purple-400 ">
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
            <h2 class="text-2xl font-semibold">
                Contact Us
                <p class="text-sm"></p>
            </h2>
            <!-- <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div>
            <!-- <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Select the amount of product assessments required: 
                </p>
                 <input
                      placeholder=""
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
            </div> -->
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Name<span class="text-red-500">*</span>
                </p>
                 <input
                      placeholder="Enter Name"
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
                    I Need Help With :
                </p>
                 <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg  placeholder-blueGray-300
                          text-blueGray-600 focus:ring focus:outline-none"
                  x-model="expired.month"
                >
                  <option value="" selected disabled>A food safety report</option>
                  <option value="01">Improvement notice</option>
                  <option value="02">Prohibition notice</option>
                  <option value="03">Closure of my business</option>
                  <option value="04">Other</option>
                 
                </select>
            </div>
            
         <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600 ">
                    Message
                </p>
              <textarea
                      placeholder="Message"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-20
                        px-4
                      "
                      required="required"
                      type="text"
                     rows="8"
                    ></textarea>
            </div>
            
        <!--------------------------------------->
    
             <div class="p-4 border-b flex justify-center py-6">
                        <button type="submit"
                            class="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md  bg-indigo-600 hover:bg-indigo-700 text-white">
                            Submit
                        </button>
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
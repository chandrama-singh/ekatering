<template>
  <section>
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
                               @click="CouponEdit()"
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
                              @click="CouponEdit()"
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
  </section>
</template>

<script>
export default {

    methods:{
        
    CouponEdit(){
      this.$router.push("../caterers/edit-discount/");
    }
    }

}
</script>

<style>

</style>
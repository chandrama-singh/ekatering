<template>
  <div>
    <div class="w-full flex justify-center max-h-screen">
        <div class="w-full">
            <div class="w-full flex flex-col md:flex-row  overflow-hidden shadow-xl">
                
                <div class="w-full md:w-1/5 h-auto">
                    <div class="top flex items-center px-5 h-16 bg-purple-800 text-white">
                        <div class="ml-3 flex flex-col text-xl">
                           Product
                        </div>
                    </div>
                    <div class="bg-gray-300 w-full h-full sm:flex md:block">
                        <button id="button-1" v-on:click="toggleTabs(1)" v-bind:class="{' bg-purple-200': openTab !== 1, 'text-white bg-pink-600': openTab === 1}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-inbox w-6"></i>Products</span>
                        </button>
                        <button id="button-2" v-on:click="toggleTabs(2)" v-bind:class="{' bg-purple-200': openTab !== 2, 'text-white bg-pink-600': openTab === 2}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-envelope w-6"></i>Categories</span>
                            
                        </button>
                        <button id="button-3" v-on:click="toggleTabs(3)" v-bind:class="{' bg-purple-200': openTab !== 3, 'text-white bg-pink-600': openTab === 3}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-bookmark w-6"></i>Discounts</span>
                        </button>
                        <!-- <button id="button-4" onclick="showView(4)" class="w-full flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-trash w-6"></i>Orders</span>
                            
                        </button> -->
                    </div>
                </div>
                

                <div class="w-full md:w-4/5">
                    <div class="top flex items-center px-5 h-16 bg-purple-600 text-white text-2xl">
                        <!--------------------------Products--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          Products
                        </div>
                        <!--------------------------Categories--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          Products
                        </div>
                        <!--------------------------Discount--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          Products
                        </div>
                    </div>
                    <div class="w-full px-5 py-3 max-h-screen overflow-y-auto">
                      <!--------------------------Products--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          Products
                        </div>
                        <!--------------------------Categories--------------------------------->
                        <!--------------------------Discount--------------------------------->
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "user",
};
</script>

<style>
</style>
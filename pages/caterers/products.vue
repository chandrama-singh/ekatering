<template>
  <div>
    <div class="w-full flex justify-center max-h-screen ">
        <div class="w-full">
            <div class="w-full flex flex-col md:flex-row  overflow-hidden shadow-lg">
                
                <div class="w-full md:w-1/5 h-auto max-h-screen">
                    <div class="top flex items-center px-5 h-16 bg-gray-800 text-white">
                        <div class="ml-3 flex flex-col text-xl">
                           Product
                        </div>
                    </div>
                    <div class="bg-gray-300 w-full h-full sm:flex md:block border-r-2">
                        <button id="button-1" v-on:click="toggleTabs(1)" v-bind:class="{' bg-purple-200': openTab !== 1, 'text-white bg-purple-600': openTab === 1}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-inbox w-6"></i>Products</span>
                        </button>
                        <button id="button-2" v-on:click="toggleTabs(2)" v-bind:class="{' bg-purple-200': openTab !== 2, 'text-white bg-purple-600': openTab === 2}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-envelope w-6"></i>Categories</span>
                            
                        </button>
                        <button id="button-3" v-on:click="toggleTabs(3)" v-bind:class="{' bg-purple-200': openTab !== 3, 'text-white bg-purple-600': openTab === 3}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-bookmark w-6"></i>Discounts</span>
                        </button>
                        <!-- <button id="button-4" onclick="showView(4)" class="w-full flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span><i class="fa fa-trash w-6"></i>Orders</span>
                            
                        </button> -->
                    </div>
                </div>
                

                <div class="w-full md:w-4/5 max-h-screen">
                    <div class="top flex items-center px-5 h-16 bg-gray-700 text-white text-2xl">
                        <!--------------------------Products--------------------------------->
                        <div class="px-2 flex-1" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          <span>New Category</span>
                          <span class="float-right">
                           <!-- <button class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Setting
        </button> -->
                           <button class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Product
        </button></span>
                        </div>
                        <!--------------------------Categories--------------------------------->
                        <div class="px-2 flex-1 " v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                          <span>Categories</span>
                           <span class="float-right">
                           <button class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Setting
        </button>
                           <button class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Categories
        </button></span>
                        </div>
                        <!--------------------------Discount--------------------------------->
                        <div class="px-2 flex-1 " v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                          <span>Discount</span>
                           <span class="float-right">
                           <button class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Setting
        </button>
                           <button class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Discount
        </button></span>
                        </div>
                    </div>
                    <div class="w-full max-h-screen overflow-y-auto">
                      <!--------------------------Products--------------------------------->
                        <div class="" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          <section class="container-fluid mx-auto font-mono">
  <div class="w-full mb-8 overflow-hidden shadow-lg">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-white bg-gray-800  border-b border-gray-600">
            <th class="px-4 py-2">Product ID</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Price</th>
            <!-- <th class="px-4 py-2">Product Type</th> -->
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white">
           <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
           
            <td class="px-4 py-3 text-sm border">
              Acceptable 
            </td>
           
            <td class="px-4 py-3 text-sm border">
               <nuxt-link to="">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="text-gray-700">
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
           
            <td class="px-4 py-3 text-sm border">
               <nuxt-link to="">Edit</nuxt-link>
            </td>
          </tr>
          <tr class="text-gray-700">
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
           
            <td class="px-4 py-3 text-sm border">
               <nuxt-link to="">Edit</nuxt-link>
            </td>
          </tr>
           <tr class="text-gray-700">
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
             <td class="px-4 py-3 text-ms font-semibold border">22</td>
           
            <td class="px-4 py-3 text-sm border">
               <nuxt-link to="">Edit</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
                        </div>
                        <!--------------------------Categories--------------------------------->
                        <div class="" v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                           <NewCategory class=""/>
                        </div>
                        <!--------------------------Discount--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                          Discount
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NewCategory from '@/components/cateres/NewCategory.vue'
export default {
  layout: "user",

  components:{
    NewCategory,
  },

  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
};
</script>

<style>
</style>
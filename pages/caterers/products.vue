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
                          <span>Product List</span>
                          <span class="float-right">
                           <!-- <button class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Setting
        </button> -->
                           <button v-on:click.stop.prevent="toggleModal()" class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Product
        </button></span>
                        </div>
                        <!----------------Model component --------------------->
                            <!----------------Model component --------------------->
<div v-if="showModal"  class=" fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div
          class="flex flex-row text-center justify-between p-4 bg-purple-500 border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p class="font-semibold  text-lg text-center text-white">ADD Product</p>
          <svg v-on:click="toggleModal()"
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
        <div class="flex flex-col px-6 py-5 bg-gray-50 text-sm">
          <p class="mb-2 font-semibold text-gray-700">Product Banner</p>
          <div class="flex items-center py-3">
             
                    <div
                      class="
                        w-96
                        h-24
                        mr-4
                        flex-none
                        rounded-xl
                        border
                        overflow-hidden
                      "
                    >
                      <img
                        class="w-96 h-24 mr-4 object-cover"
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
          <p class="mb-2 font-semibold text-gray-700">Product Name</p>
          <input
            type="text"
            name=""
            placeholder="Enter Full Name"
            class="p-4 mb-5 bg-white border border-gray-200 rounded shadow-sm"
            id=""
          >

<p class="mb-2 font-semibold text-gray-700">Product Category</p>
          <input
            type="text"
            name=""
            placeholder="Product Category"
            class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
            id=""
          >

          <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div class="w-full sm:w-1/2">
              <p class="mb-2 font-semibold text-gray-700">Product ID</p>
              <input
                type="text"
                name=""
                placeholder="Product ID"
                class="w-full p-4 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              >
            </div>
            <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p class="mb-2 font-semibold text-gray-700">Product Price</p>
              <input
                type="text"
                name=""
                placeholder="Product Price"
                class="w-full p-4 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id=""
              >
            
            </div>
          </div>
         

        </div>
        <div
          class="flex text-lg flex-row items-center justify-center p-4 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button v-on:click="toggleModal()" class="px-4 py-2 text-white font-semibold bg-red-500 rounded mr-4">Cancel</button>
          <button v-on:click="toggleModal()" class="px-4 py-2 text-white font-semibold bg-purple-500 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  <!----------------Model component --------------------->
  <!----------------Model component --------------------->
                        <!--------------------------Categories--------------------------------->
                        <div class="px-2 flex-1 " v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                          <span>Categories</span>
                           <span class="float-right">
                           <button v-show="isShow" @click="isShow = !isShow" class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Back
        </button>
                           <button v-show="!isShow"  @click="isShow = !isShow" class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Categories
        </button></span>
                        </div>
                        <!--------------------------Discount--------------------------------->
                        <div class="px-2 flex-1 " v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                          <span>Discount</span>
                           <span class="float-right">
                           <button v-show="isShow1"  @click="isShow1 = !isShow1" class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Back
        </button>
                           <button v-show="!isShow1"  @click="isShow1 = !isShow1" class="bg-pink-600 text-white float-right active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         + New Discount
        </button></span>
                        </div>
                    </div>
                    <div class="w-full max-h-screen overflow-y-auto bg-purple-50">
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
            <th class="px-4 py-2">Category</th>
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
                          <div class="item-center text-center py-10 justify-items-center" v-show="!isShow" >
                            <center><div class="border border-gray-800 max-w-xl items-center py-10">
                            <span class="text-lg font-semibold">No Categories Exist</span><br/>
                          <span>Categories are used  to organize your products</span>
                            </div></center>
                          </div>
                          <NewCategory v-show="isShow"/>
                        </div>
                        <!--------------------------Discount--------------------------------->
                        <div class="px-2" v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                          <div class="item-center text-center py-10 justify-items-center" v-show="!isShow1" >
                            <center><div class="border border-gray-800 max-w-xl items-center py-10">
                            <span class="text-lg font-semibold">No Discount Exist</span><br/>
                          <span>Create discount code your customers can use at checkout</span>
                            </div></center>
                          </div>
                          <NewCoupons v-show="isShow1" class="CategoryPage"/>
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
import NewCoupons from '@/components/cateres/NewCoupons.vue'
export default {
  layout: "user",

  components:{
    NewCategory,
    NewCoupons
  },

  data() {
    return {
      openTab: 1,
       showModal: false,
        isShow: false,
        isShow1: false,
        
    }
  },
  methods: {
    
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
     toggleModal: function(){
      this.showModal = !this.showModal;
    },
  }
};
</script>

<style>
</style>
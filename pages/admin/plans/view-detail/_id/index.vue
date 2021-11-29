<template>
  <div>
      <section class="bgcolor">
      <div class="py-20  ">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-2xl mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <!-- <span class="text-purple-600 font-bold">Dolor sit amet consectutar</span> -->
          <h2 class="mb-2 text-3xl lg:text-4xl font-bold font-heading">eKatering Subscription</h2>

          <p class="mb-8 text-gray-500">Home/Event caterers and Private Chefs can turn their passion into cash</p>
        </div>

      </div>
      <div v-if="plan" class="flex flex-wrap ">

    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">{{plan.name}}</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">{{plandescription}}</p>


        <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                    <input v-model="plan.name" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">product ID</label>

                    <input v-model="plan.productID" class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
                </div>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>

                <textarea v-model="plan.description" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save Plan</button>
            </div>
        </div>
    </section>
        <div class="py-10 w-full md:w-1/2 bg-purple-600 lg:rounded-r overflow-hidden flex flex-col">
          <img class="w-full md:max-w-xs mx-auto my-auto" src="~assets/why-img.png" alt="">
          <h3 class="mb-4 max-w-sm mx-auto text-center text-xl text-white">
            Best for
            <span class="font-bold">freelance developers</span>
            who need to save their time.
          </h3>
          <!-- <div class="text-center">
            <button class="inline-block mr-2 w-2 h-2 bg-purple-400 rounded-full"></button>
            <button class="inline-block mr-2 w-2 h-2 bg-purple-400 rounded-full"></button>
            <button class="inline-block mr-2 w-2 h-2 bg-white rounded-full"></button>
            <button class="inline-block w-2 h-2 bg-purple-400 rounded-full"></button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
      </section>

  </div>
</template>

<script>

import {GET_PLAN_BY_ID, SUBSCRIBE_PLAN} from "@/graphql/query";
export default {
    name: 'payment',
     layout:"admin",
     data () {

    return {
      interval:'',
      loading: false,
      showAlert:false,
    };
  },
   apollo: {
      plan: {
        query: GET_PLAN_BY_ID,
        variables() {
          return {
            id: this.$route.params.id
          };
        },
        error(error) {
          console.log(error);
        }
      }
    },



    methods: {
    async savePlan () {

    },


  },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

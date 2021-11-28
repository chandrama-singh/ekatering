<template>
 <section>
    <div class="py-20 bg-gray-100 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center mb-16">
          <span class="text-purple-600 font-bold">Manage Your Plans</span>
          <h2 class="mb-2 text-xl lg:text-4xl font-bold font-heading">
             Manage which plan you should offer to the users
          </h2>

        </div>
        <div v-if="plans" class="flex flex-wrap -mx-4">
           <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div class="p-8 bg-white shadow-lg rounded">
              <h4 v-if="plans[2]" class="mb-2 text-2xl font-bold ">{{plans[2].name}}</h4>
             <span class="text-4xl font-bold">£{{plans[2].price/100}}</span>
              <p class="mt-3 mb-6 leading-loose text-gray-500">
                eKatering has developed practical eLearning training specifically for home/event caterers and private chefs. The eKatering online training modules listed below.
              </p>
              <ul class="mb-6 text-gray-500">
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Food Allergen for Caterers and Private Chefs - Level 1</span>
                </li>
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Food Safety for Caterers and Private Chefs - Level 2</span>
                </li>

              </ul>
                <div
              @click="viewDetail(plans[2].id)"
                class="
                  inline-block
                  text-center
                  py-2
                  px-4
                  w-full
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-400
                  font-bold
                  leading-loose
                  transition
                  duration-200
                "
                >
                View Detail
                </div>

            </div>
          </div>
           <client-only>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div class="p-8 bg-purple-600 shadow-lg rounded">
              <h4 v-if="plans[1]" class="mb-2 text-2xl font-bold ">{{plans[1].name}}</h4>
              <span class="text-4xl font-bold">£{{plans[1].price/100}}</span>
              <p class="mt-3 mb-6 text-gray-50 leading-loose">
                At registration, you are required to submit a few pieces of
                documentation. Checks will be done to verify all documentation.
              </p>
              <ul class="mb-6 text-gray-50">
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Proof of Address</span>
                </li>
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Local Authority Food Registration Letter</span>
                </li>
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Food Hygiene Rating Scheme award letter</span>
                </li>

              </ul>
              <div
              @click="viewDetail(plans[1].id)"
                class="
                  inline-block
                  text-center
                  py-2
                  px-4
                  w-full
                  rounded-xl
                  bg-white
                  hover:bg-gray-200
                  font-bold
                  leading-loose
                  transition
                  duration-200
                "
                >
                View Detail
                </div>
            </div>
          </div>
</client-only>
          <div class="w-full lg:w-1/3 px-4">
            <div class="p-8 bg-white shadow-lg rounded">
             <h4 v-if="plans[0]" class="mb-2 text-2xl font-bold ">{{plans[0].name}}</h4>
              <span class="text-4xl font-bold">£{{plans[0].price/100}}</span>
              <!-- <span class="text-6xl font-bold">$48</span> -->
              <span class="text-gray-400 text-xs">Price mentioned on Consultations Page</span>
              <p class="mt-3 mb-6 text-gray-500 leading-loose">
                The consultancy team of eKatering provides ALL food businesses with professional advice on how to start and run a successful catering business.
              </p>
              <ul class="mb-6 text-gray-500">
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Local Authority Food Business Registration</span>
                </li>
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>VRI</span>
                </li>
                <li class="mb-2 flex">
                  <svg
                    class="mr-2 w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Legal Advice, etc...</span>
                </li>

              </ul>
                <div
              @click="viewDetail(plans[0].id)"
                class="
                  inline-block
                  text-center
                  py-2
                  px-4
                  w-full
                  rounded-xl
                   bg-purple-600
                  hover:bg-purple-400
                  font-bold
                  leading-loose
                  transition
                  duration-200
                "
                >
               View Detail
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
 import {
    GET_ALL_PLAN
  } from '@/graphql/query'

export default {
layout:'admin',
data () {

    return {
       loading: false,
    };
  },

 apollo: {
      plans: {
        query: GET_ALL_PLAN,
        error(error) {
          console.log(error)
        }
      }
    },
    computed:{
      planOne(){
        console.log(plans);
        if(plans)
        {
          return plans[0];
        }
        return null;
      },
      planTwo(){
        if(plans)
        {
          return plans[1];
        }
        return null;
      },
      planThree(){
        if(plans)
        {
          return plans[2];
        }
        return null;
      }

    },
methods: {

  viewDetail(id){
console.log(this.plans)
     this.$router.push({
        path: `/view-detail/${id}`,
      })
  }

  },
}
</script>

<style>

</style>

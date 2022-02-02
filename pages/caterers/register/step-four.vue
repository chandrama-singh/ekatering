<template>
  <section class="bg-red-50 py-10">
      <div class="max-w-xl mx-auto my-4 pb-4">
	<div class="flex pb-3">
		<div class="flex-1">
		</div>

		<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-purple-500 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>


		<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">2</span>
			</div>
		</div>

		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-purple-500 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>
    	<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">3</span>
			</div>
		</div>

	<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-purple-500 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>

    	<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-grey-darker text-center w-full">4</span>
			</div>
		</div>

		<div class="flex-1">
		</div>
	</div>

</div>
<div class=" max-w-4xl mx-auto py-10 space-y-6">
<!---------------------------Form-------------------------------->
  <div>
      <section class="bgcolor">
      <div class="py-10 bg-gray-50 ">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-2xl mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <!-- <span class="text-purple-600 font-bold">Dolor sit amet consectutar</span> -->
          <h2 class="mb-2 text-3xl lg:text-4xl font-bold font-heading">eKatering Subscription</h2>

          <p class="mb-8 text-gray-500">Home/Event caterers and Private Chefs can turn their passion into cash</p>
        </div>

      </div>
      <div  class="flex flex-wrap bg-blue-50 rounded shadow">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 pt-11 text-center">
          <h2  class="mb-2 justify-center text-3xl lg:text-4xl font-bold font-heading text-center">Registration</h2>
<h2  class="mb-2 mt-2 justify-center text-2xl lg:text-3xl font-semibold font-heading text-center">£0</h2>

          <!-- <h2  class="mb-2 mt-2 justify-center text-2xl lg:text-3xl font-semibold font-heading text-center">£49.99</h2> -->

        <div class="flex justify-center ">

        <t-button @click="makePayment" class="mt-16">Make Payment</t-button>
        </div>
        </div>
        <div class="py-10 w-full md:w-1/2 bg-purple-600 lg:rounded-r overflow-hidden flex flex-col">
          <img class="w-full md:max-w-xs mx-auto my-auto" src="~assets/why-img.png" alt="">

          <!-- <h3 class="mb-4 max-w-sm mx-auto text-center text-xl text-white">
            Best for
            <span class="font-bold">freelance developers</span>
            who need to save their time.
          </h3> -->

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
        <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    />
  </div>
        <!------------------------------------Button----------------------------------->
</div>
  </section>
</template>
<script>

import { StripeCheckout } from '@vue-stripe/vue-stripe'
import {PAY_REGISTRATION, GET_ME} from "@/graphql/query";
export default {
    name: 'payment',
     layout:"register",
     middleware: 'auth',
     data () {

    return {
      interval:'',
       publishableKey : "pk_test_51JwHpkBIQ7NOZ6okDluA6xP6CnAd2mfF70QFO4ZCfqBSHUdzE5qSNrXWVy4qjlXeosy68dbkSjBN9dRsmEDzWduE00WPUwEucO",
     sessionId: '',
      loading: false,

      showAlert:false,
      lineItems: [ ],
    };
  },
    components:{
         StripeCheckout,
    },
     apollo: {
      mySelf: {
        query: GET_ME,
        error(error) {
          console.log(error)
        }
      }
    },
    methods: {
    async makePayment () {

      console.log("entry");
      try {
          const {data} = await this.$apollo.mutate({
            mutation: PAY_REGISTRATION
          })

          console.log(data);
          if(data.result!=null)
          {
          this.sessionId=data.result;
          this.$refs.checkoutRef.redirectToCheckout();
           }
           else{
             alert("Either you are already registered or getting some error")

           }
          //this.goToWorkout();

        } catch (error) {
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
           console.log(error);
        }
        this.loading = false;
      //get sessionid

      // You will be redirected to Stripe's secure checkout page

    },

    checkForm(){


    }


  },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

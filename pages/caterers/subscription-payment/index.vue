<template>
  <div>
      <section class="bgcolor">
      <div class="py-20 bg-gray-50 ">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-2xl mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <!-- <span class="text-purple-600 font-bold">Dolor sit amet consectutar</span> -->
          <h2 class="mb-2 text-3xl lg:text-4xl font-bold font-heading">eKatering Subscription</h2>

          <p class="mb-8 text-gray-500">Home/Event caterers and Private Chefs can turn their passion into cash</p>
        </div>

      </div>
      <div  class="flex flex-wrap bg-blue-50 rounded shadow">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 pt-11">
          <h2  class="mb-2 justify-center text-3xl lg:text-4xl font-bold font-heading">Subscription</h2>
           <div class="flex flex-wrap justify-center">
          <label class="md:mr-4 w-full sm:w-auto flex items-center mr-8 mb-2">
            <span class="mx-2 font-semibold">Monthly Billing</span>
            <span class="inline-flex items-center justify-center w-16 h-10 bg-purple-600 text-white font-semibold rounded-lg">£19.99</span>
          </label>

        </div>
        <div class="flex justify-center ">

        <t-button @click="makePayment" class="mt-16">Make Payment</t-button>
        </div>
        </div>
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
        <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    />
  </div>
</template>

<script>
import PaymentUs from '@/components/PaymentUs.vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { SUBSCRIBE_CATERER} from "@/graphql/query";
export default {
    name: 'payment',
     layout:"none",
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
        PaymentUs,
         StripeCheckout,
    },
    methods: {
    async makePayment () {
      try {
          const {data} = await this.$apollo.mutate({
            mutation: SUBSCRIBE_CATERER
          })

          console.log(data);
          this.sessionId=data.result;


          this.$refs.checkoutRef.redirectToCheckout();
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


  },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

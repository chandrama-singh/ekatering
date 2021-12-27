<template>
  <div class="bg-gray-100 h-screen">
      <div class="bg-white p-6 md:w-1/2 md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div>
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <!-- <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">{{data}}</h3> -->
            <p class="text-gray-600 text-center">Thank you for completing your secure online payment. Have a great day!  </p>
            <div class="flex flex-col mx-auto content-center justify-center">
              <p class="my-3 text-lg ">Take screenshot for future reference</p>

              <span class=" font-bold flex p-3">catererId: <p class="mx-3"> {{response.catererId}} </p> </span>
              
              <span class=" font-bold flex p-3">status: <p class="mx-3">  {{response.status}} </p> </span>
              <span class=" font-bold flex p-3">customer: <p class="mx-3">  {{response.customer}} </p> </span>
              <span class=" font-bold flex p-3">payment_intent: <p class="mx-3">  {{response.payment_intent}} </p> </span>
              <span class=" font-bold flex p-3">mode: <p class="mx-3">  {{response.mode}} </p> </span>


            </div>

            <div class="py-10 text-center">
                <h2>Thanks for Payment! We will review your application soon</h2>
                <p>After Verification a verification email will be sent to you.</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import {
    VERIFY_REGISTRATION_PAYMENT
  } from '@/graphql/query';
  export default {
    layout:'none',
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      try {
        const {
          data
        } = await client.mutate({
          mutation: VERIFY_REGISTRATION_PAYMENT,
          variables: {
            id: context.route.params.id
          }
        })
        console.log(data)
        return {
          isVerified: true,
          error: null,
          response: data.response
        };
      } catch (err) {
        console.log(err)
        return {
          isVerified: false,
          error: err,
          response: null
        };
      }
    },

    methods: {
      onNext() {
        this.$router.push("/")
      }
    }
  }

</script>

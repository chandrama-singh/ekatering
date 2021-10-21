<template>
  <section>

  <div class="py-20 bg-gray-50 ">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-2xl mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <!-- <span class="text-purple-600 font-bold">Dolor sit amet consectutar</span> -->
          <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">eKatering Subscription</h2>
          <p class="mb-8 text-gray-500">Home/Event caterers and Private Chefs can turn their passion into cash</p>
        </div>
        <div class="flex flex-wrap justify-center">
          <label class="md:mr-4 w-full sm:w-auto flex items-center mr-8 mb-2">
            <input type="radio" name="billing" value="1">
            <span class="mx-2 font-semibold">Monthly Billing</span>
            <span class="inline-flex items-center justify-center w-16 h-10 bg-purple-600 text-white font-semibold rounded-lg">£19.99</span>
          </label>
          <label class="flex w-full sm:w-auto items-center mb-2">
            <input type="radio" name="billing" value="2">
            <span class="mx-2 font-semibold">One time Payment</span>
            <span class="inline-flex items-center justify-center w-16 h-10 bg-purple-600 text-white font-semibold rounded-lg">£49.99</span>
          </label>
        </div>
      </div>
      <div class="flex flex-wrap bg-white rounded shadow">
        <div class="w-full md:w-1/2 mb-8 md:mb-0 pt-11">
          <div class="px-6 py-8 lg:px-8 text-center">
            <span class="text-gray-400">Sign Up</span>
            <h4 class="mb-8 text-2xl font-heading">Finish your payment</h4>
            <form class="mb-4" action="">
               <div class="flex mb-4 px-4 bg-gray-50 rounded">
                <input class="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none" type="text" placeholder="user_name" v-model="formData.username">
                <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <div class="flex mb-4 px-4 bg-gray-50 rounded">
                <input class="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none" type="email" placeholder="pat@shuffle.com" v-model="formData.email">
                <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <div class="flex mb-6 px-4 bg-gray-50 rounded">
                <input class="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none" type="password" placeholder="Enter your password" v-model="formData.password">
                <button class="ml-4">
                  <svg class="h-6 w-6 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>
              <div class="text-left mb-5 text-sm text-gray-400">
                <label class="flex">
                  <input type="checkbox" name="terms" value="1">
                  <span class="ml-1 text-xs">By signing up, you agree to our <Nuxt-Link to="/privacy" class="text-purple-600 font-bold hover:text-purple-700">Terms,</Nuxt-Link><Nuxt-Link to="/privacy" class="text-purple-600 font-bold hover:text-purple-700">Data Policy</Nuxt-Link> and <Nuxt-Link to="/cookies" class="text-purple-600 font-bold hover:text-purple-700">Cookies Policy.</Nuxt-Link></span>
                </label>
              </div>
              <button class="block w-full p-4 text-center text-white font-bold leading-none bg-purple-600 hover:bg-purple-700 rounded-xl rounded-t-xl transition duration-200" @click="onSubmit">Buy Monthly Plan</button>

            </form>
            <p class="text-xs text-gray-400">Already have an account? <Nuxt-Link to="/signin" class="text-purple-600 hover:underline">Sign In</Nuxt-Link></p>
             
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
</template>

<script>
import { REGISTER_USER } from '@/graphql/query'
export default {
  data(){
    return {
      formData:{
        email:null,
        username:null,
        password:null,
      },
      loading:false,
      showAlert:false,

    }
  },
   methods: {
      async onSubmit() {
        this.loading = true;
        this.showAlert = false;
        console.log( this.formData)
        console.log(this.$apollo)

        try {
          const res = await this.$apollo.mutate({
            mutation: REGISTER_USER,
            variables: {
              data: this.formData
            }
          })

          console.log(res);

          await this.$apolloHelpers.onLogin(res.data.result.token, undefined, {
            expires: 30
          });

          this.$store.commit('setUser', {user: res.data.result.user, isLogin: false});
        } catch (error) {
          console.log(error);
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
        }
        this.loading = false;
      },
   }

}
</script>

<style>

</style>

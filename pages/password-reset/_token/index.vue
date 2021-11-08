<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="max-w-md w-full px-6" v-show="!isSent">
      <h2 class="mt-10 text-3xl font-semibold text-center font-display">Change your password</h2>
      <div class="mt-5">
        <div class="rounded-md shadow-sm mb-4">
          <input aria-label="New password" name="password" type="password" autofocus="" class="border-gray-300 placeholder-gray-500 focus:shadow-outline-blue focus:border-blue-300  appearance-none relative block w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none sm:text-sm" placeholder="New password" v-model="password">
        </div>
        <div class="rounded-md shadow-sm mb-4">
          <input aria-label="Confirm password" name="passwordc" type="text" required="" autofocus="" class="border-gray-300 placeholder-gray-500 focus:shadow-outline-blue focus:border-blue-300  appearance-none relative block w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none sm:text-sm" placeholder="Confirm password" v-model="confirmPassword">
        </div>
        <p v-show="!isPasswordMatch" class="text-red-500 my-2">Password is not matched</p>
        <div class="mt-5">
          	<button
									class="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
									type="button" @click="resetPassword"
								>
									Reset Password
								</button>
         
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-show="isSent">
      <img src="/email-sent.svg" class="mb-4" />
      <p class="my-2 text-lg text-green-600 text-center font-bold">Your password is successfully changed!!</p>
    </div>
    <div class="my-2">
      <p class="text-sm">Nevermind! <nuxt-link to="/login" class="underline"> Take me back to login</nuxt-link>
      </p>
    </div>
  </div>
</template>


<script>
  import { RESET_USER_PASSWORD } from "@/graphql/query";
  export default {
    layout: 'main',
    data() {
      return {
        password: null,
        confirmPassword: null,
        isSent: false,
        response: null,
        isError: false,
        loading: false
      };
    },
    computed: {
      isPasswordMatch() {
        if (this.password === this.confirmPassword) {
          return true;
        }
        return false;
      }
    },
    methods: {

      async resetPassword() {
        if (this.isPasswordMatch) {
          this.loading = true;
          try {
            const {
              data
            } = await this.$apollo.mutate({
              mutation: RESET_USER_PASSWORD,
              variables: {
                reqId: this.$route.params.token,
                password: this.password
              },
            });
            this.isSent = true;
            this.response = data;
          } catch (error) {
            this.response = error;
            this.isError = true;
            console.log(error);
          }
          this.loading = false;
        }
      }
    },
  }

</script>

<template>
  <div class="mt-6">
    <div class="flex flex-col bg-white px-10 py-8 rounded w-full">
      <div class="pb-6 border-b">
            <h4 class="text-base font-medium">Change password</h4>
            <p class="text-xs">Provide new password to change your account password.</p>
        </div>
      <div>
        <div class="flex flex-col my-6">
          <!-- <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label> -->
          <div class="relative mb-4">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>
            <t-input id="password" type="password" name="password" class="w-full pl-10" placeholder="New password"
              v-model="password" />
          </div>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>
            <t-input id="password" type="password" name="password" class="w-full pl-10"
              placeholder="Confirm new password" v-model="confirmPassword" />
          </div>
          <p v-if="!isPasswordMatch" class="text-red-500 my-2">Password is not matched</p>
        </div>
        	<button
									class="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
									type="button" @click="resetPassword"
								>
									Reset Password
								</button>


      </div>
    </div>
    <div class="flex flex-col bg-white px-10 py-8 rounded w-full" v-if="isSent" >
      <img src="/email-sent.svg" class="mb-4" />
      <p class="my-2 text-lg text-green-600 text-center font-bold">Your password is successfully changed!!</p>
    </div>
     <Loading v-if="loading" />

  </div>
</template>


<script>
  import {
    CHANGE_PASSWORD
  } from "@/graphql/query";
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
              mutation: CHANGE_PASSWORD,
              variables: {
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
          this.$toast.success("Password Changed Successfully!");
        }
        
      }
    },
  }

</script>

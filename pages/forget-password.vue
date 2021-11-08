<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="max-w-md w-full px-6" v-show="!isSent">

    <h2 class="mt-10 text-3xl font-semibold text-center font-display">Reset your password</h2>
    <p class="mt-5 text-sm text-center text-gray-600">
      Enter your email and we'll send you a link to reset your password.
    </p>

    <div class="mt-5">
      <div class="rounded-md shadow-sm">
        <input aria-label="Email address" name="email" type="email" required="" autofocus="" class="border-gray-300 placeholder-gray-500 focus:shadow-outline-blue focus:border-blue-300  appearance-none relative block w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none sm:text-sm" placeholder="Email address" v-model="email">
      </div>

      <div class="mt-5">
        <PrimaryButton title="Reset password" color="green-800" :isLoading="loading" @click="sendResetLink" class="w-full">
        <template v-slot:icon>
          <i class="fas fa-chevron-right text-white"></i>
        </template>
      </PrimaryButton>
      </div>
    </div>

    </div>
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-show="isSent">
      <img src="/email-sent.svg" class="mb-4" />
      <p class="my-2">Check your email <strong>{{email}}</strong> inbox for reset link and instructions on how to reset
        your password.</p>
    </div>
    <div class="my-2">
      <p class="text-sm">Nevermind! <nuxt-link to="/login" class="underline"> Take me back to login</nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
  import {
    FORGOT_PASSWORD
  } from "@/graphql/query";
  export default {
    layout: 'main',
    data() {
      return {
        email: null,
        showAlert: false,
        message: "",
        type: null,
        isSent: false,
        loading: false

      };
    },

    methods: {
      async sendResetLink() {
        this.loading = true;
        if (this.email) {
          try {
            const {
              data
            } = await this.$apollo.mutate({
              mutation: FORGOT_PASSWORD,
              variables: {
                email: this.email
              },
            });

            this.message = data.result
            this.isSent = true;

          } catch (error) {
            console.log(error)
            this.message = error.message;
            this.type = "danger"
            this.showAlert = true
          }
        }
        this.loading = false;
      }
    }
  }

</script>
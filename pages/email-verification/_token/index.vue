<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-if="isVerified">
      <img src="/email-sent.svg" class="mb-4" />
      <p class="text-green-600 font-semi-bold text-lg text-center">{{response}}. </p>
      <p class="text-center"> Now you can go back to login again.</p>
    </div>
    <div class="flex flex-col bg-white shadow px-10 py-8 rounded-lg w-full max-w-md" v-else>
      <img src="/email-sent.svg" class="mb-4" />
      <p class="text-red-500 font-semi-bold text-lg text-center">{{error}}. </p>
      <p class="text-center"> it seems link is expired. register again</p>

    </div>

    <div class="my-2">
      <p class="text-sm">Nevermind! 	<nuxt-link to="/signin" class="underline"> Take me back to login</nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
  import {
    VERIFY_CATERER_EMAIL
  } from '@/graphql/query';
  export default {
    layout: 'main',
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      try {
        const {
          data
        } = await client.mutate({
          mutation: VERIFY_CATERER_EMAIL,
          variables: {
            id: context.route.params.token
          }
        })
        return {
          isVerified: true,
          error: null,
          response: data.verifyCatererEmail
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

<template>

		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style="background-image: url('https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p class="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>
						</div>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
									v-model="email"
								/>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
									type="button" @click="sendResetLink"
								>
									Reset Password
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<Nuxt-Link to="/signup"
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"

								>
									Create an Account!
								</Nuxt-Link>
							</div>
							<div class="text-center">
								<Nuxt-Link to="/signin"
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</Nuxt-Link>
							</div>
						</form>
						    <t-alert :variant="type" :show="isSent">
              {{ message }}
            </t-alert>
					</div>
				</div>
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
            console.log(data);

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


<style>

</style>

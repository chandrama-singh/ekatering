<template>
  <section>
    <div class="relative min-h-screen flex flex-wrap justify-center  py-8 px-4 sm:px-6 lg:px-8  ">
	<div class="absolute opacity-60 inset-0 z-0"></div>
  	<div class="max-w-md w-full space-y-8  p-10 bg-white rounded-xl z-10">
		<div class="text-center mb-10">
			<h2 class="mt-6 text-3xl font-bold text-gray-900">
				Log In
			</h2>
			<!-- <p class="mt-2 text-sm text-gray-600">Please sign in to your account</p> -->
		</div>

		<!-- <div class="flex items-center justify-center space-x-2">
			<span class="h-px w-16 bg-gray-300"></span>
			<span class="text-gray-500 font-normal">OR</span>
			<span class="h-px w-16 bg-gray-300"></span>
		</div> -->
		<div class="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true">
			<div class="relative">
				<div class="absolute right-0 mt-10 pr-2"><svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
                </div>
				<label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
				<input v-model="email" class=" w-full text-base py-2 px-2 border border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com" >
            </div>
			<div class="mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					Password
				</label>
				<input v-model="password" class="w-full content-center text-base py-2 px-2 border border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" >
            </div>
			<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded">
						<label for="remember_me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
					</div>
				<div class="text-sm">
					<a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
								Forgot your password?
					</a>
				</div>
			</div>
			<div>

			</div>
			<p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
				<span>Don't have an account?</span>
				<a href="#" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</a>
			</p>

      <t-alert :variant="type" :show="showAlert">
              {{ message }}
            </t-alert>

		</div>
    	<button @click="onLogin"  class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-lg tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                    Sign in
                </button>

	</div>

  <img
          class="lg:absolute top-0 right-5 lg:w-2/5 pr-22 pl-12  lg:h-100 object-cover "
          src="@/assets/why-img.png"
          alt=""
        />

</div>
  </section>
</template>

<script>
  import { LOGIN_USER } from '@/graphql/query'
  export default {
    layout: 'default',
    data() {
      return {
        loading: false,
        message: null,
        showAlert: false,
        type: null,
        email: null,
        password: null
      }
    },
    methods: {
      async onLogin() {
        this.loading = true;
        try {
          const { data } = await this.$apollo.mutate({
            mutation: LOGIN_USER,
            variables: {
              email: this.email,
              password: this.password
            },
          })

          console.log(data)

          await this.$apolloHelpers.onLogin(data.loginUser.token, undefined, {
            expires: 1
          });

          this.$store.commit('setUser', {user: data.loginUser.user, isLogin: true});
        } catch (error) {
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
        }
        this.loading = false;
      }
    }
  }

</script>


<style>

</style>

<template>
  <div>
    <button title="user" v-click-outside="closeDropdown" @click="isOpen = !isOpen" class="h-full w-full rounded-full border focus:outline-none focus:shadow-outline">
    <img v-if="user.photo" class="h-10 w-10 rounded-full mx-auto" :src="user.photo" />
    <img v-else class="h-10 w-10 rounded-full mx-auto" src="/profile.jpg" />
    </button>
    <div style="background-color: #2a2a2e; width:19rem;" class="absolute right-2 mt-2 text-white rounded shadow-lg overflow-hidden z-20" :class="{hidden: !isOpen}">
        <div class="py-2">
            <a href="#" class="flex flex-col items-center px-4 py-2 border-b border-black">
                <div class="my-4 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                    <div class="relative shadow mx-auto h-16 w-16 rounded-full overflow-hidden border-4">
                        <img v-if="user.photo" class="object-cover w-full h-full" :src="user.photo">
						<img v-else class="object-cover w-full h-full" src="/profile.jpg">
                    </div>
                    <div class="mt-6">
                        <h1 class="text-lg text-center font-semibold"> {{user.name}}</h1>
                        <p class="text-sm text-gray-200 text-center">
                            {{user.email}}
                        </p>
                    </div>
                </div>
            </a>
            <nuxt-link :to=linkProfile class="flex items-center px-4 py-2 border-b border-black hover:bg-red-500">
                <i class="fas fa-user-circle text-lg mr-4"></i>
                <p>MY PROFILE</p>
            </nuxt-link>
            <nuxt-link to="/user/dashboard" class="flex items-center px-4 py-2 border-b border-black hover:bg-red-500" v-if="user.role==='user'">
                <i class="fas fa-cog text-lg mr-4"></i>
                <p>DASHBOARD</p>
            </nuxt-link>
            <div  class="flex items-center px-4 py-2 hover:bg-red-500" @click="logout">
                <i class="fas fa-sign-out-alt text-lg mr-4"></i>
                <p>LOG OUT</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
			isOpen: false,
			user:this.$store.state.user
        }
	},
	computed:{
		linkProfile(){
			return "/"+this.user.role+"/profile"
		}
	},
	methods:{
		closeDropdown(){
			this.isOpen=false
        },
        logout(){
            this.$apolloHelpers.onLogout();
      this.$store.commit('logoutUser')
    }
	}
}
</script>
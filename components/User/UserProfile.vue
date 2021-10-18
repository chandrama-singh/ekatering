<template>
      <div class="flex items-center justify-start">
          <img v-if="user.photo"  class="w-10 rounded-full my-2" :src="user.photo" alt="user-photo" />
          <img  v-else class="w-10 rounded-full my-2" src="/user_avatar.png" alt="" />
          <div class="px-4">
            <div class="flex justify-between">
              <h2 class="font-semibold text-gray-900 dark:text-white -mt-3">{{user.name}} </h2>
            </div>
            <p class="text-gray-700 dark:text-gray-400 text-sm -mt-3">{{user.email}}</p>
          </div>
        </div>

</template>

<script>
import Vue from "vue";
export default Vue.extend({ 
  data() {
    return {
	  user: {},
	  status: true
    };
  },
  methods: {
    preview() {
      this.$router.push({
        name: "user-profile",
        params: { uid: this.user.id },
      });
    },
  },
  created() {
    
    if(this.params.node.data.name){
      this.user = this.params.node.data;
    }
    else if (this.params.node.data.user.name) {
      this.user = this.params.node.data.user;
    }
  
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>
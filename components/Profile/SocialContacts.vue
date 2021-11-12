<template>
    <div class="bg-white border rounded shadow-sm">
        <div class="p-6 border-b">
            <h4 class="text-base font-medium">Social contact</h4>
            <p class="text-xs">Provide your social contact for user to communicate with you.</p>
        </div>
        <div class="flex justify-between items-center p-6 border-b">
            <i class="fab fa-2x pr-6 text-blue-500 fa-facebook"></i>
            <p class="text-base font-medium w-72">Facebook</p>
            <t-input type="text" v-model="links.facebook" placeholder="Your facebook link" />
            <!-- <t-toggle class="ml-6" /> -->
        </div>
        <div class="flex justify-between items-center p-6 border-b">
            <i class="fab fa-2x pr-6 text-red-500 fa-instagram"></i>
            <p class="text-base font-medium w-72">Instagram</p>
            <t-input type="text" v-model="links.instagram" placeholder="Your instagram id" />
            <!-- <t-toggle class="ml-6" checked /> -->
        </div>
        <div class="flex justify-between items-center p-6">
            <i class="fab fa-2x pr-6 text-blue-500 fa-twitter"></i>
            <p class="text-base font-medium w-72">Twitter</p>
            <t-input type="text" v-model="links.twitter" placeholder="Your Twitter id" />
            <!-- <t-toggle class="ml-6" /> -->
        </div>
        <div class="p-6 border-t flex justify-end">
            	<button
									class="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
									type="button" @click="updateContact"
								>
								Update
								</button>

        </div>
         <Loading v-if="loading" />
    </div>
</template>

<script>
import {UPDATE_USER_SOCIAL} from '@/graphql/query';

export default {
    data() {
        return {
            loading: false
        }
    },
    computed:{
      user(){
        return {...this.$store.state.user}
      },
      links(){
        if(this.user){
        return {
          facebook:this.user.facebook,
          instagram:this.user.instagram,
          twitter:this.user.twitter
        }
      }
      else{
        return null
      }
      }
    },
    methods:{
    async updateContact(){

        try {
            this.loading = true;
            const res = await this.$apollo.mutate({
                mutation: UPDATE_USER_SOCIAL,
                variables: this.links
            });
            this.loading = false;
        } catch (error) {
            this.loading = false;
            console.log(error);
        }
    }
    }
}
</script>

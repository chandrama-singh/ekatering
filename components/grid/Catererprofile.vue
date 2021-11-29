<template>
<div>
   <div v-if="caterer" class=" bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a v-if="caterer.photo" href="#" class="block relative">
                        <img alt="profil" :src="caterer.photo" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <a v-else href="#" class="block relative">
                        <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>

                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div  class="font-semibold dark:text-white">
                       {{caterer.business_name}}
                    </div>
                    <div class="text-gray-800 dark:text-gray-200 text-sm">
                       {{caterer.business_email}}
                    </div>

                </div>

            </div>
            </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      caterer: null,
    };
  },
  methods: {
    preview() {
      console.log(this.caterer)
      // this.$root.$router.push({
      //     path: `/admin/caterers/details/${this.CatererId }`
      // })
    },
    addLedger(){
      this.$root.$router.push({
          path: `/admin/caterers/add-ledger/${this.CatererId}`
      })
    }
  },
  created() {
    this.caterer = this.params.node.data;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>

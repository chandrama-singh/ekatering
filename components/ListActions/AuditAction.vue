<template>
  <div class="flex mt-2">
	   <div class="flex flex-wrap items-center content-center" v-for= '(item, index) in ledgers' :key="index">
         <span @click="preview(item)" class="inline-block rounded-full text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3">{{item}}}</span>
      </div> 
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({ 
  data() {
    return {
      ledgers:[],
    };
  },
  methods: {
    preview(value) {
	this.$root.$router.push({
    path: `/admin/ledgers/details/${value }`
})
     
    },
  },
  created() {
    this.ledgers = this.params.node.data.ledgers;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>
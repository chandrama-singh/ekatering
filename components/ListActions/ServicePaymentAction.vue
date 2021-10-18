<template>
  <div class="flex mt-2">
	   <ActionButton color="red-700" :outline="true"  @click="preview">
        <template v-slot:icon>
          <i class="fas fa-eye"></i>
        </template>
      </ActionButton> 
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({ 
  data() {
    return {
      PaymentId: "",
    };
  },
  methods: {
    preview() {
	this.$root.$router.push({
    path: `/admin/service-payment/details/${this.PaymentId }`
})
     
    },
  },
  created() {
    this.PaymentId = this.params.node.data.id;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>
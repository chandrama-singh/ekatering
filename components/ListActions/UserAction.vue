<template>
  <div class="flex mt-2">
	   <ActionButton color="red-700" :outline="true"  @click="preview">
        <template v-slot:icon>
          <i class="fas fa-eye"></i>
        </template>
      </ActionButton>
      <ActionButton color="green-700" :outline="true" class="ml-4"  @click="addLedger">
        <template v-slot:icon>
          <i class="fas fa-plus"></i>
        </template>
      </ActionButton>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      CatererId: "",
    };
  },
  methods: {
    preview() {
      this.$root.$router.push({
          path: `/admin/caterers/details/${this.CatererId }`
      })
    },
    addLedger(){
      this.$root.$router.push({
          path: `/admin/caterers/add-ledger/${this.CatererId}`
      })
    }
  },
  created() {
    this.CatererId = this.params.node.data.id;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>

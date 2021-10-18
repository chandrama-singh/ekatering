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
      UserId: "",
    };
  },
  methods: {
    preview() {
      this.$root.$router.push({
          path: `/admin/users/details/${this.UserId }`
      })
    },
    addLedger(){
      this.$root.$router.push({
          path: `/admin/users/add-ledger/${this.UserId}`
      })
    }
  },
  created() {
    this.UserId = this.params.node.data.id;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>
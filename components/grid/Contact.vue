<template>
  <div>
    <div
      v-if="user"
      class="bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
    >
      <div v-if="user.address" class="flex-1 pl-1 md:mr-16">
        <div v-if="user.address.town"  class="font-medium dark:text-white">
          {{ user.address.town }} {{ user.address.country }}
        </div>

      </div>
       <div class="font-semibold dark:text-white">
          {{ user.mobile }}
        </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      user: null,
    };
  },
  methods: {
    preview() {
      console.log(this.user);
      // this.$root.$router.push({
      //     path: `/admin/caterers/details/${this.CatererId }`
      // })
    },
    addLedger() {
      this.$root.$router.push({
        path: `/admin/caterers/add-ledger/${this.CatererId}`,
      });
    },
  },
  created() {
    this.user = this.params.node.data;
  },
});
</script>

<style scoped>
.btn-action {
  height: 36px;
  width: 36px;
}
</style>

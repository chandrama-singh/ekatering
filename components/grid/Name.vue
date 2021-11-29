<template>
  <div>
    <div
      v-if="user"
      class="bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-2"
    >
      <div class="flex-1 leading-snug ">
        <p  class="font-semibold dark:text-white">
          {{ user.fullName }}
        </p>
        <p  class="font-medium  dark:text-white">
          {{ user.email }}
        </p>

        <span class="text-xs">{{ user.createdAt | moment("LLL") }}</span>
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

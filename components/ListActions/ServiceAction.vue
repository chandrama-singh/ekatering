<template>
  <div class="flex mt-2">
    <button @click="preview" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">

          <i class="fas fa-pencil-alt"></i>

    </button>

  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      ProductId: "",
    };
  },
  methods: {
    preview() {
	this.$root.$router.push({
    path: `/caterers/services/details/${this.ServiceId }`
})

    },
  },
  created() {
    this.ServiceId = this.params.node.data.id;
  },
})
</script>

<style scoped>
.btn-action{
    height: 36px;
    width: 36px;
}
</style>

<template>
  <section>
    <div class="w-full flex justify-center max-h-screen">
        <div class="w-full">
            <div class="w-full flex flex-col md:flex-row  overflow-hidden shadow-xl">
                <div class="w-full md:w-1/5 h-auto max-h-screen border-r-2">
                    <div class="bg-gray-300 w-full h-full sm:flex md:block">
                        <button id="button-1" v-on:click="toggleTabs(1)" v-bind:class="{' bg-purple-200': openTab !== 1, 'text-white bg-purple-600': openTab === 1}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span>New Product</span>
                        </button>

                    </div>
                </div>
     <div class="w-full md:w-4/5 max-h-screen">
                    <div class="w-full px-5 py-3 max-h-screen overflow-y-auto">
                      <!--------------------------Products--------------------------------->
                        <div class="" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          <section class="container-fluid mx-auto font-mono" >
  <div class="w-full mb-8 overflow-hidden ">
    <div class="w-full overflow-y-auto">
            <div class="w-full px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                <div class="flex-auto">

                  <div class="flex flex-col px-6 bg-gray-50 text-sm">
                    <p class=" font-semibold text-gray-700">
                      Product Banner
                    </p>
                    <div class="flex items-center py-2">
                      <div
                        class="
                          w-28
                          h-28
                          mr-4
                          flex-none
                          rounded-xl
                          border
                          overflow-hidden
                        "
                      >
                        <img
                          class="w-28 h-28 mr-4 object-cover"
                          src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                          alt="Avatar Upload"
                        />
                      </div>
                      <label class="cursor-pointer">
                        <span
                          class="
                            focus:outline-none
                            text-white text-sm
                            py-2
                            px-4
                            rounded-full
                            bg-green-400
                            hover:bg-green-500 hover:shadow-lg
                          "
                          >Browse</span
                        >
                        <input
                          type="file"
                          class="hidden"
                          :multiple="multiple"
                          :accept="accept"
                        />
                      </label>
                    </div>
                    <div
                      class="
                        flex flex-col
                        sm:flex-row
                        items-center
                        mb-2
                        sm:space-x-5
                      "
                    >
                      <div class="w-full sm:w-1/2">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Name
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product Name"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                      <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Category
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product category"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                    </div>

                    <p class="mb-1 font-semibold text-gray-700">
                      Product Description
                    </p>
                    <input
                      type="textbox"
                      name=""
                      placeholder="Enter Product Description"
                      class="
                        py-6
                        mb-2
                        bg-white
                        border border-gray-200
                        rounded
                        shadow-sm
                      "
                      id=""
                    />


                    <div
                      class="
                        flex flex-col
                        sm:flex-row
                        items-center
                        mb-2
                        sm:space-x-5
                      "
                    >
                      <div class="w-full sm:w-1/2">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product ID
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product ID"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                      <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                        <p class="mb-2 font-semibold text-gray-700">
                          Product Price
                        </p>
                        <input
                          type="text"
                          name=""
                          placeholder="Product Price"
                          class="
                            w-full
                            p-1
                            bg-white
                            border border-gray-200
                            rounded
                            shadow-sm
                            appearance-none
                          "
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      flex
                      text-lg
                      flex-row
                      items-center
                      justify-center
                      p-4
                      bg-white
                      border-t border-gray-200
                      rounded-bl-lg rounded-br-lg
                    "
                  >
                    <button
                      v-on:click="toggleModal()"
                      class="
                        px-4
                        py-2
                        text-white

                        bg-red-500
                        rounded
                        mr-4
                      "
                    >
                      Cancel
                    </button>
                    <button
                      v-on:click="toggleModal()"
                      class="
                        px-4
                        py-2
                        text-white

                        bg-purple-500
                        rounded
                      "
                    >
                      Save
                    </button>
                  </div>
                </div>
       </div>
            </div>
    </div>
  </div>
  </section>
                        </div>
                    </div>
     </div>
            </div>
        </div>
    </div>
  </section>
</template>


<script>
  import {
    ADD_NEW_PRODUCT } from '@/graphql/query'
  export default {
    layout: "user",
    data() {
      return {
        openTab: 1,
        loading: false,
        message: null,
        showAlert: false,
        type: null,
        formData: {
          title: null,
          description: null
        }

      }
    },

    methods: {
 toggleModal: function(tabNumber){
   this.$parent.toggleModal();

    },
    GoBack(){
      this.$rounter.push('/caterers/products');
    },
      async onSubmit() {
        this.loading = true;
        try {
          const {data} = await this.$apollo.mutate({
            mutation: ADD_NEW_PRODUCT,
            variables: {
              data: this.formData
            },
          })
          console.log(data);
        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)

        } catch (error) {
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
           console.log(error);
        }
        this.loading = false;
      }
    }
  }

</script>

<style>
</style>

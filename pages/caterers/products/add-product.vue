<template>
  <section>
     <div class="bg-white p-2 border-b border-gray-300 pr-4 flex items-center justify-between">
        <div class="flex items-center">
          <t-button to="/caterers/products/" type="button" variant="secoundry"
            class="py-3 border-r focus:ring-0 focus:bg-green-400 ">
            <span class="fas fa-arrow-left"> Go Back</span>
          </t-button>
          <h2 class="text-lg font-semibold mx-6">Add New Product
          </h2>
        </div>

      </div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-xl">
          <!-- <div class="w-full md:w-1/5 h-auto max-h-screen border-r-2">
            <div class="bg-gray-300 w-full h-full sm:flex md:block">
              <button
                id="button-1"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 1,
                  'text-white bg-purple-600': openTab === 1,
                }"
                class="
                  w-full
                  border-b-2
                  flex
                  justify-between
                  items-center
                  px-5
                  py-2
                  hover:bg-purple-500 hover:text-white
                  cursor-pointer
                  focus:outline-none
                "
              >
                <span>New Product</span>
              </button>
            </div>
          </div> -->
          <div class="w-full  ">
            <div class="w-full px-5 py-3 ">
              <!--------------------------Products--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden">
                    <div class="w-full overflow-y-auto">
                      <div class="w-full px-4">
                        <div
                          class="
                            relative
                            flex flex-col
                            min-w-0
                            break-words
                            w-full
                            mb-6
                          "
                        >
                          <div class="flex-auto py-2">
                            <div class="flex flex-col px-6 bg-gray-50 text-sm">
                               <!------------------------Info Value-------------------------------->
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
                                      px-2
                                      bg-white
                                      border border-gray-200
                                      rounded
                                      shadow-sm
                                      appearance-none
                                    "
                                    id="product-name"
                                    v-model="formData.name"
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
                                      px-2
                                      bg-white
                                      border border-gray-200
                                      rounded
                                      shadow-sm
                                      appearance-none
                                    "
                                    id="product-category"
                                    v-model="formData.category"
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
                                  px-2
                                  mb-2
                                  bg-white
                                  border border-gray-200
                                  rounded
                                  shadow-sm
                                "
                                id="product-description"
                                v-model="formData.description"
                              />
                              <!------------------------Buttons-------------------------------->         
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
                                v-on:click="toggleTabs()"
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
                                v-on:click="onSubmit()"
                                class="
                                  px-4
                                  py-2
                                  text-white
                                  bg-purple-500
                                  rounded
                                "
                              >
                                Next
                              </button>
                            </div>
            <!------------------------Buttons END--------------------------------> 
             <!------------------------Info Value-------------------------------->
             <!------------------------Banner -------------------------------->
                              <p class="font-semibold text-gray-700">
                                Product Banner
                              </p>
                              <div class="flex flex-wrap justify-center">
                                 <input
                                  type="file"
                                  ref="banner"
                                  accept="image/*"
                                  v-show="false"
                                  @change="previewBanner"
                                />
  <div class="w-8/12 sm:w-6/12 px-4">
   <img
     v-if="bannerImage"
      alt="..."
      class="rounded max-w-full h-auto align-middle border-none"
      :src="bannerImage"
       @click="selectBanner"
    />
    <img
     v-else
      src="https://mdbootstrap.com/img/new/standard/city/026.jpg"
      alt="..."
      class="rounded max-w-full h-auto align-middle border-none"
       @click="selectBanner"
    />
    <p>Click to change banner</p>
  </div>

</div>      
            <!------------------------Buttons-------------------------------->         
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
                                v-on:click="toggleTabs()"
                                class="
                                  px-4
                                  py-2
                                  text-white
                                  bg-red-500
                                  rounded
                                  mr-4
                                "
                              >
                                Back
                              </button>
                              <button
                                v-on:click="onSubmit()"
                                class="
                                  px-4
                                  py-2
                                  text-white
                                  bg-purple-500
                                  rounded
                                "
                              >
                                Next
                              </button>
                            </div>
            <!------------------------Buttons END--------------------------------> 
               <!------------------------Banner END-------------------------------->
             
              <!------------------------Price -------------------------------->
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
                                    MRP
                                  </p>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="MRP"
                                    class="
                                      w-full
                                      p-1
                                      bg-white
                                      border border-gray-200
                                      rounded
                                      shadow-sm
                                      appearance-none
                                    "
                                    id="product-mrp"
                                    v-model="formData.mrp"
                                  />
                                </div>
                                <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                                  <p class="mb-2 font-semibold text-gray-700">
                                    Product Price
                                  </p>
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Price"
                                    class="
                                      w-full
                                      p-1
                                      bg-white
                                      border border-gray-200
                                      rounded
                                      shadow-sm
                                      appearance-none
                                    "
                                    id="product-price"
                                    v-model="formData.price"
                                  />
                                </div>
                              </div>
                            </div>
             <!------------------------Price END-------------------------------->
           <!------------------------Buttons-------------------------------->         
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
                                v-on:click="toggleTabs()"
                                class="
                                  px-4
                                  py-2
                                  text-white
                                  bg-red-500
                                  rounded
                                  mr-4
                                "
                              >
                                Back
                              </button>
                              <button
                                v-on:click="onSubmit()"
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
            <!------------------------Buttons END-------------------------------->  
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
import { ADD_NEW_PRODUCT,UPDATE_PRODUCT_BANNER } from "@/graphql/query";
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
        name: "",
        description: "",
        price: "",
        mrp: "",
        category: "",
        status: "DRAFT",
      },
      banner:'',
      bannerImage:''
    };
  },

  methods: {
    toggleTabs: function () {
      this.$parent.toggleTabs(1);
    },
    GoBack() {
      this.$rounter.push("/caterers/products");
    },
     selectBanner() {
      this.$refs.banner.click();
    },
    previewBanner(event) {
      this.banner = event.target.files[0];
      if (this.banner.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.bannerImage = URL.createObjectURL(this.banner);
        this.loading = true;
        this.updateBanner();
      }
    },
      async updateBanner() {
      console.log(this.banner);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_BANNER,
          variables: {
            file: this.banner,
          },
        });
        this.loading = false;
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
         this.loading = false;
      }
    },
    async onSubmit() {
      this.loading = true;
      this.formData.mrp = parseInt(this.formData.mrp);
      this.formData.price = parseInt(this.formData.price);
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_NEW_PRODUCT,
          variables: {
            data: this.formData,
          },
        });
        console.log(data);
        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>

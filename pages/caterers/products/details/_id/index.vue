<template>
  <section>
    <div
      class="
        bg-white
        p-2
        border-b border-gray-300
        pr-4
        flex
        items-center
        justify-between
      "
    >
      <div class="flex items-center">
        <t-button
          @click="goBack()"
          type="button"
          variant="secoundry"
          class="py-3 border-r focus:ring-0 focus:bg-green-400"
        >
          <span class="fas fa-arrow-left"> Go Back</span>
        </t-button>
        <h2 class="text-lg font-semibold mx-6">Edit Product</h2>
      </div>
      <div
        class="
          flex
          text-lg
          flex-row
          items-center
          justify-center
          p-4
          rounded-bl-lg rounded-br-lg
        "
      >
        <button
          class="
            px-4
            py-2
            mx-2
            text-white
            bg-purple-500
            rounded
          "
          v-if="product.status=='DRAFT'"
          @click="changeStatus('PUBLISHED')"
        >
          Publish
        </button>
         <button
          class="
            px-4
            py-2
            mx-2
            text-white
            bg-purple-500
            rounded
          "
          v-else
          @click="changeStatus('DRAFT')"
        >
          Draft
        </button>
         <button
          class="
            px-4
            mx-3
            py-2
            text-white
            bg-red-500
            rounded
          "
          @click="deleteProduct"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-xl">
          <div class="w-full">
            <div class="w-full px-5 py-3">
              <!--------------------------Products--------------------------------->
              <div class="">
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
                            mb-4
                          "
                        >
                          <div class="flex-auto py-2 rounded-lg">
                            <div class="flex flex-col px-6 bg-gray-50 text-sm">

                              <div >
                                <div
                                  class="
                                    flex flex-col
                                    sm:flex-row
                                    items-center
                                    mb-2
                                    sm:space-x-5
                                    py-4
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
                                      v-model="product.name"
                                    />
                                  </div>
                                  <div
                                    v-if="categories"
                                    class="w-full sm:w-1/2 mt-2 sm:mt-0"
                                  >
                                   <div class="flex flex-row justify-around">
                                     <p class="mb-2 font-semibold text-gray-700">
                                      Select Category
                                    </p>
                                     <p v-if="this.product.category" class="mb-2 font-semibold text-gray-700">
                                      {{this.product.category.title}}
                                    </p>

                                  </div>
                                    <multiselect
                                      v-model="selectedCategory"
                                      class="mb-3"
                                      track-by="title"
                                      label="title"
                                      placeholder="Select one"
                                      :options="categories"
                                      :searchable="false"
                                      :allow-empty="false"
                                    >
                                    </multiselect>
                                  </div>
                                </div>
                                 <div
                                  class="
                                    flex flex-col
                                    sm:flex-row
                                    items-center
                                    mb-2
                                    sm:space-x-5
                                    py-4
                                  "
                                >
                                <div class="w-full sm:w-1/2">

                                <p class="mb-1 font-semibold text-gray-700">
                                  Product Description
                                </p>

<textarea name=""
                                  placeholder="Enter Product Description"
                                  class="
                                    py-6
                                    px-2
                                    mb-2
                                    bg-white
                                    border border-gray-200
                                    rounded
                                    shadow-sm
                                    w-full
                                  "
                                  id="product-description"
                                  v-model="product.description">
                                </textarea>

                                
                                </div>
                                 <div
                                    v-if="activeCuisines"
                                    class="w-full sm:w-1/2 mt-2 sm:mt-0"
                                  >
                                  <div class="flex flex-row justify-around">
                                     <p class="mb-2 font-semibold text-gray-700">
                                      Select Cuisine
                                    </p>
                                     <p v-if="this.product.cuisine" class="mb-2 font-semibold text-gray-700">
                                      {{this.product.cuisine.name}}
                                    </p>

                                  </div>

                                    <multiselect
                                      v-model="selectedCusine"
                                      class="mb-3"
                                      track-by="name"
                                      label="name"
                                      placeholder="Select one"
                                      :options="activeCuisines"
                                      :searchable="false"
                                      :allow-empty="false"
                                    >
                                    </multiselect>
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
                                    rounded-bl-lg rounded-br-lg
                                  "
                                >
                                  <button
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-purple-500
                                      rounded
                                    "
                                    @click="onSubmit"
                                  >
                                    Save
                                  </button>
                                </div>
                                <!------------------------Buttons END-------------------------------->
                              </div>

                              <div >
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
                                      v-if="product.banner"
                                      alt="..."
                                      class="
                                        rounded
                                        max-w-full
                                        h-auto
                                        align-middle
                                        border-none
                                      "
                                      :src="product.banner"
                                      @click="selectBanner"
                                    />
                                    <img
                                      v-else
                                      src="/noImage.jpg"
                                      alt="..."
                                      class="
                                        rounded
                                        max-w-full
                                        h-auto
                                        align-middle
                                        border-none
                                      "
                                      @click="selectBanner"
                                    />
                                    <p>Click to change banner</p>
                                  </div>
                                </div>
                                <!------------------------Multiple image upload-------------------------------->
                                <!-- scroll area -->
                                <p class="font-semibold text-gray-700">
                                  More Images
                                </p>
                                <section
                                  class="
                                    overflow-auto
                                    p-8
                                    w-full
                                    h-full
                                    flex flex-col
                                  "
                                >
                                  <header
                                    class="
                                      border-dashed border-2 border-gray-400
                                      py-12
                                      flex flex-col
                                      justify-center
                                      items-center
                                    "
                                  >
                                    <label
                                      class="
                                        w-64
                                        flex flex-col
                                        items-center
                                        px-4
                                        py-6
                                        bg-white
                                        rounded-md
                                        shadow-md
                                        tracking-wide
                                        uppercase
                                        border border-blue
                                        cursor-pointer
                                        hover:bg-purple-600 hover:text-white
                                        text-purple-600
                                        ease-linear
                                        transition-all
                                        duration-150
                                      "
                                      @click="selectProductImage"
                                    >
                                      <i
                                        class="fas fa-cloud-upload-alt fa-3x"
                                      ></i>
                                      <span
                                        class="mt-2 text-base leading-normal"
                                        >Select More Images</span
                                      >
                                    </label>
                                    <input
                                      ref="productImage"
                                      accept="image/*"
                                      type="file"
                                      v-show="false"
                                      @change="uploadImage"
                                    />
                                  </header>

                                  <h1
                                    class="
                                      pt-8
                                      pb-3
                                      font-semibold
                                      sm:text-lg
                                      text-gray-900
                                    "
                                  >
                                    Uploaded
                                  </h1>

                                  <ul
                                    id="gallery"
                                   class="flex  flex-wrap -m-1 justify-center"
                                  >
                                    <li
                                      v-for="(item, index) in product.images"
                                      :key="index"
                                      class="
                                        h-full
                                        text-center
                                        flex
                                        m-4
                                        justify-center
                                        items-center
                                      "
                                    >
                                      <img
                                        class=" w-32 relative"
                                        :src="item"
                                        alt="no data"
                                      />
                                      <img @click="removeImage(item)" class="absolute center z-20 w-12" src="@/assets/remove.svg"/>

                                    </li>
                                  </ul>
                                </section>

                              </div>

                              <div >
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
                                     MRP(£) optional Normal price
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
                                      v-model="product.mrp"
                                    />
                                  </div>
                                  <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p class="mb-2 font-semibold text-gray-700">
                                      Product Price(£)- will be seen by customers
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
                                      v-model="product.price"
                                    />
                                  </div>
                                </div>

                                <!-- Toggle option -->
                                 <div class="flex justify-start p-4">
                                  <label
                                    for="toogleButton"
                                    class="flex items-center cursor-pointer"
                                  >
                                    <div class="px-2 text-xl font-bold">
                                      Will you deliver
                                    </div>
                                    <!-- toggle -->
                                   <t-toggle @change="changeWillDeliver" v-model="willDeliver"  />
                                  </label>
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
                                    rounded-bl-lg rounded-br-lg
                                  "
                                >

                                  <button
                                    v-on:click="updatePrice()"
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-purple-500
                                      rounded
                                    "
                                  >
                                    Save price
                                  </button>
                                </div>
                              </div>
                              <!------------------------Buttons END-------------------------------->
                            </div>
                            <!------------------------Price END-------------------------------->
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
  GET_ALL_CATEGORY,
  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_BANNER,
  UPDATE_PRODUCT_IMAGES,
  UPDATE_PRODUCT_PRICE,
  GET_ALL_ACTIVE_CUSINE,
  REMOVE_PRODUCT_IMAGE,
  CHANGE_PRODUCT_WILLDELIVER,
  CHANGE_PRODUCT_STATUS ,
  DELETE_PRODUCT

} from "@/graphql/query";
import Multiselect from "vue-multiselect";
export default {
  layout: "user",
  middleware: 'authUser',
  data() {
    return {
      openTab: 3,
      loading: false,
      message: null,
      showAlert: false,

      selectedCategory: "",
      selectedCusine: "",
      willDeliver:null,
      product: { id: null, name: "" },
      type: null,

      priceData: {
        price: 0,
        mrp: 0,
      },
      banner: "",
      productImage: [],

      productImageFile: [],
      bannerImage: "",
    };
  },
  components: { Multiselect },

  apollo: {
     product: {
        query: GET_PRODUCT_BY_ID,
        variables() {
          return {
            id: this.$route.params.id
          };
        },
        error(error) {
          console.log(error);
        }
      },
    categories: {
      query: GET_ALL_CATEGORY,
      error(error) {
        console.log(error);
      },
    },
    activeCuisines: {
      query: GET_ALL_ACTIVE_CUSINE,
      error(error) {
        console.log(error);
      },
    },
  },
  computed:{
    selectedCategory(){
      return
    }

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
    selectProductImage() {
      this.$refs.productImage.click();
    },

    async updateBanner() {
      console.log(this.banner);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_BANNER,
          variables: {
            file: this.banner,
            id: this.product.id,
          },
        });
        this.loading = false;

        console.log(res.data.result);
        this.refetchData();
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    previewBanner(event) {
      this.banner = event.target.files[0];
      if (this.banner.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.product.banner = URL.createObjectURL(this.banner);
        this.loading = true;
        this.updateBanner();
      }
    },
    uploadImage(event) {
      this.productImageFile = event.target.files[0];
      if (this.productImageFile.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        // this.bannerImage = URL.createObjectURL(this.banner);
        this.loading = true;
        this.uploadProduct();
      }
    },
    async uploadProduct() {
      console.log(this.productImageFile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_IMAGES,
          variables: {
            file: this.productImageFile,
            id: this.product.id,
          },
        });
        this.loading = false;
        this.productImage.push(res.data.result);
        console.log(res.data.result);
        this.refetchData();
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    async onSubmit() {
      this.loading = true;
      let formData ={
        category : this.selectedCategory.id,
        cuisine : this.selectedCusine.id,
        name: this.product.name,
        description: this.product.description
      }
      // this.formData.price = parseInt(this.formData.price);
      console.log(formData);
      console.log(this.product.id);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT,
          variables: {
            data: formData,
            id: this.product.id,
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

    async updatePrice() {
      this.loading = true;
      this.priceData.mrp = parseInt(this.product.mrp);
      this.priceData.price = parseInt(this.product.price);
      console.log(this.priceData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_PRICE,
          variables: {
            data: this.priceData,
            id: this.product.id,
          },
        });
        console.log(data);
         this.$toast.success("Product Updated Successfully!");
        this.$router.push('/caterers/products/')


        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },

     async changeWillDeliver() {
      this.loading = true;
      console.log(this.willDeliver);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: CHANGE_PRODUCT_WILLDELIVER,
          variables: {
            status: this.willDeliver,
            id: this.product.id,
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

     refetchData() {
        this.$apollo.queries.product.refetch()

      },

     async removeImage(url){
        this.loading = true;
      console.log(this.willDeliver);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: REMOVE_PRODUCT_IMAGE,
          variables: {
            url: url,
             id: this.product.id,
          },
        });
        console.log(data);
        this.refetchData();


        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;

      },
    async deleteProduct(){

         this.loading = true;

      try {
        const { data } = await this.$apollo.mutate({
          mutation: DELETE_PRODUCT,
          variables: {
             id: this.product.id,
          },
        });
        console.log(data);
        this.$toast.success("Product Deleted Successfully!");
        this.$router.push('/caterers/products/')



        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;

      },

   async changeStatus(val){

         this.loading = true;
      console.log(this.willDeliver);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: CHANGE_PRODUCT_STATUS ,
          variables: {
            status: val,
             id: this.product.id,
          },
        });
        console.log(data);
        this.refetchData();


        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;

      },
       goBack(){
      this.$router.push('/caterers/products/')
    }


  },
};
</script>

<style>

.toggle-circle {
  top: 0.2rem;
  left: 0.25rem;
  transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
  transform: translateX(100%);
}
input:checked ~ .toggle-path {
  background-color: #81e6d9;
}
</style>

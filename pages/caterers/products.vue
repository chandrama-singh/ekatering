<template>
  <div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-lg">
          <div class="w-full md:w-1/5 h-auto max-h-screen">
            <div class="top flex items-center px-5 h-16 bg-gray-800 text-white">
              <div class="ml-3 flex flex-col text-xl">Product</div>
            </div>
            <div class="bg-gray-300 w-full h-full sm:flex md:block border-r-2">
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
                <span><i class="fa fa-inbox w-6"></i>Products</span>
              </button>
              <button
                id="button-2"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 2,
                  'text-white bg-purple-600': openTab === 2,
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
                <span><i class="fa fa-envelope w-6"></i>Categories</span>
              </button>
              <button
                id="button-3"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  ' bg-purple-200': openTab !== 3,
                  'text-white bg-purple-600': openTab === 3,
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
                <span><i class="fa fa-bookmark w-6"></i>Discounts</span>
              </button>
              
            </div>
          </div>
          <div class="w-full md:w-4/5 max-h-screen">
            <div
              class="
                top
                flex
                items-center
                px-5
                h-16
                bg-gray-700
                text-white text-2xl
              "
            >
              <!--------------------------Products--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <span>Product List</span>
                <span class="float-right">
                  <!-- <button class="bg-blue-600 text-white  active:bg-blue-600 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
         Setting
        </button> -->
                  <button
                    v-on:click.stop.prevent="toggleModal()"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Product
                  </button></span
                >
              </div>
              <!----------------Model component --------------------->
              <!----------------Model component --------------------->
             
               <NewProduct  v-if="showModal"/>
             
              <div
                v-if="showModal"
                class="opacity-25 fixed inset-0 z-40 bg-black"
              ></div>
              <!----------------Model component --------------------->
              <!----------------Model component --------------------->
              <!--------------------------Categories--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <span>Categories</span>
                <span class="float-right">
                  <button
                    v-show="isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-blue-600
                      text-white
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Back
                  </button>
                  <button
                    v-show="!isShow"
                    @click="isShow = !isShow"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Categories
                  </button></span
                >
              </div>
              <!--------------------------Discount--------------------------------->
              <div
                class="px-2 flex-1"
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <span>Discount</span>
                <span class="float-right">
                  <button
                    v-show="isShow1"
                    @click="isShow1 = !isShow1"
                    class="
                      bg-blue-600
                      text-white
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Back
                  </button>
                  <button
                    v-show="!isShow1"
                    @click="isShow1 = !isShow1"
                    class="
                      bg-pink-600
                      text-white
                      float-right
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-4
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      mr-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    + New Discount
                  </button></span
                >
              </div>
            </div>
            <div class="w-full max-h-screen overflow-y-auto bg-purple-50">
              <!--------------------------Products View Start--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
               <ProductView/>
              </div>
              <!--------------------------Products View End--------------------------------->
              <!--------------------------Categories--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div
                  class="item-center text-center py-10 justify-items-center"
                  v-show="!isShow"
                >
                  <CategoryView/>
                  <!------------------------------------Category Table---------------------------------->
                </div>
                <NewCategory v-show="isShow" />
                <EditCategory v-show="isShowCT"/>
              </div>
              <!--------------------------Discount--------------------------------->
              <div
                class=""
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <div
                  class="item-center text-center py-10 justify-items-center"
                  v-show="!isShow1"
                >
                  <DiscountView/>
                  <!------------------------------------Discount Table---------------------------------->
                </div>
                <NewCoupons v-show="isShow1" class="CategoryPage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from "@/components/cateres/NewProduct.vue";
import ProductView from "@/components/cateres/ProductView.vue";
import NewCategory from "@/components/cateres/NewCategory.vue";
import CategoryView from "@/components/cateres/CategoryView"
import NewCoupons from "@/components/cateres/NewCoupons.vue";
import DiscountView from "@/components/cateres/DiscountView.vue";
import EditCategory from "@/components/cateres/EditCategory.vue";
export default {
  layout: "user",

  components: {
    NewProduct,
    ProductView,
    NewCategory,
    CategoryView,
    NewCoupons,
    DiscountView,
    EditCategory
  },

  data() {
    return {
      openTab: 1,
      showModal: false,
      isShow: false,
      isShow1: false,
      isShowCT: false,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    ProductEdit(){
      this.$router.push("../caterers/edit-product/");
    },
    CategoryEdit(){
      this.$router.push("../caterers/edit-category/");
    },
    CouponEdit(){
      this.$router.push("../caterers/edit-discount/");
    }
  },
};
</script>

<style>
</style>
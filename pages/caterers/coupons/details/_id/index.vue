<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
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
            to="/caterers/coupons/"
            type="button"
            variant="secoundry"
            class="py-3 border-r focus:ring-0 focus:bg-green-400"
          >
            <span class="fas fa-arrow-left"> Go Back</span>
          </t-button>
          <h2 class="text-lg font-semibold mx-6">
            Coupon: {{ coupon.code }}
          </h2>



        </div>

      </div>
      <div class="w-full">

            <section class="container-fluid mx-auto font-mono">
              <div class=" max-w-xl mx-auto ">
                      <div class="flex-auto ">

                  <div class="relative w-full mb-3 mt-8">
                    <label class="block  text-blueGray-600 text-xs font-bold mb-2" for="full-name">Discount Code</label>
                    <input v-model="coupon.code" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Coupon Code">
                  </div>
                  <div class="relative w-full mb-3">
                    <label class="block  text-blueGray-600 text-xs font-bold mb-2" for="email">Discount Percentage</label>
                    <input v-model="coupon.discount" type="number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="discount">
                  </div>

                  <div class="text-center mt-6">

                    <button @click="deleteCoupon" class="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Delete
                    </button>
                  </div>
                </div>
                </div>
            </section>
            <div v-if="showAlert">

    <div v-if="type=='success'" class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-green-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
            </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-green-500 dark:text-green-400">Success</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">{{message}}</p>
            </div>
        </div>
    </div>

    <div v-else class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-red-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">{{error}}</p>
            </div>
        </div>
    </div>
    </div>


      </div>
    </div>
  </div>
</template>


<script>
import { GET_COUPON_BY_ID, DELETE_COUPON } from "@/graphql/query";

export default {
  layout: "user",
  middleware: 'authUser',

  data() {
    return {
      message: "",
      showAlert: false,
      type: "",
      error: null,
    };
  },

  apollo: {
    coupon: {
      query: GET_COUPON_BY_ID,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      error(error) {
        console.log(error);
      },
    },
  },

  methods: {
    //change the component on button clicked
    toggle(val) {
      this.component = val;
    },
    // refetch coupon on each changes in the coupon
    reloadCoupon() {
      console.log("reload calls");
      this.$apollo.queries.coupon.refetch();
    },
    deleteCoupon() {
      let message = `<strong>Are you sure want to change status of this coupon?</strong>`;
      let options = {
        html: true, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
        loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
        reverse: false, // switch the button positions (left to right, and vise versa)
        okText: "Yes",
        cancelText: "Close",
        animation: "zoom", // Available: "zoom", "bounce", "fade"
        type: "soft", // coming soon: 'soft', 'hard', 'basic'
        verification: "Lecture", // for hard confirm, user will be prompted to type this to enable the proceed button
        verificationHelp: 'Type "[+:verification]" below to confirm', // Verification help text. [+:verification] will be matched with 'options.verification' (i.e 'Type "continue" below to confirm')
        clicksCount: 3, // for soft confirm, user will be asked to click on "proceed" btn 3 times before actually proceeding
        backdropClose: false, // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask
        customClass: "", // Custom class to be injected into the parent node for the current dialog instance
      };
      const self = this;
      this.$dialog
        .confirm(message, options)
        .then(async function () {

          try {
            const res = await self.$apollo.mutate({
              mutation: DELETE_COUPON,
              variables: {
                id: self.coupon.id,
              },
            });
            console.log(res);
            self.goBack();
            //show success by notification
            self.message = res.data.result;
            self.showAlert = true;
            self.type = "success";
          } catch (error) {
            console.log(error);
            self.message = error.message;
            self.showAlert = true;
            self.type = "danger";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goBack(){
      this.$router.push('/caterers/coupons/')
    }

  },
  created() {
    let cid = this.$route.params.id;
    console.log("id", cid);
  },
};
</script>

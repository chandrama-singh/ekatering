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
            to="/caterers/categories/"
            type="button"
            variant="secoundry"
            class="py-3 border-r focus:ring-0 focus:bg-green-400"
          >
            <span class="fas fa-arrow-left"> Go Back</span>
          </t-button>
          <h2 class="text-lg font-semibold mx-6">
            Category: {{ category.title }}
          </h2>

          <div class="text-left" v-if="category.status">
            <span
              class="
                inline-block
                rounded-full
                text-white
                bg-green-500
                px-2
                py-1
                text-xs
                font-bold
                mr-3
              "
              >ENABLE</span
            >
          </div>
          <div v-else class="text-left">
            <span
              class="
                inline-block
                rounded-full
                text-white
                bg-red-500
                px-2
                py-1
                text-xs
                font-bold
                mr-3
              "
              >DISABLE</span
            >
          </div>
        </div>
        <t-button
          type="button"
          variant="success"
          v-if="category.status"
          v-on:click="changeStatus(true)"
        >
          ENABLE
        </t-button>
        <t-button
          type="button"
          variant="error"
          v-else
          v-on:click="changeStatus(false)"
        >
          DISABLE
        </t-button>
      </div>
      <div class="w-full">
        <div class="w-full md:w-4/5 max-h-screen">
          <div class="w-full px-5 py-3 max-h-screen overflow-y-auto">
            <!--------------------------Products--------------------------------->

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
                      <div class="flex-auto">
                        <div class="relative w-full mb-3 mt-8">
                          <label
                            class="
                              block
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            for="full-name"
                            >Title</label
                          >
                          <input
                            v-model="category.title"
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Full Name"
                          />
                        </div>
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            for="email"
                            >Description</label
                          >
                          <textarea
                            v-model="category.description"
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Description"
                          >
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!--------------------------Categories--------------------------------->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { GET_CATEGORY_BY_ID, UPDATE_CATEGORY_STATUS } from "@/graphql/query";

export default {
  layout: "none",
  //middleware: 'authAdmin',

  data() {
    return {
      message: "",
      showAlert: false,
      type: "",
      error: null,
    };
  },

  apollo: {
    category: {
      query: GET_CATEGORY_BY_ID,
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
  computed: {
    statusClass() {
      if (this.category.status === "PUBLISHED") {
        return "bg-green-500";
      }
      if (this.category.status === "DELETED") {
        return "bg-red-500";
      }
      return "bg-orange-500";
    },
  },
  methods: {
    //change the component on button clicked
    toggle(val) {
      this.component = val;
    },
    // refetch category on each changes in the category
    reloadCategory() {
      console.log("reload calls");
      this.$apollo.queries.category.refetch();
    },
    changeStatus(value) {
      let message = `<strong>Are you sure want to change status of this category?</strong>`;
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
              mutation: UPDATE_CATEGORY_STATUS,
              variables: {
                id: self.category.id,
                status: value,
              },
            });
            console.log(res);
            self.reloadCategory(); // reload category from parent
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
  },
  created() {
    let cid = this.$route.params.id;
    console.log("id", cid);
  },
};
</script>

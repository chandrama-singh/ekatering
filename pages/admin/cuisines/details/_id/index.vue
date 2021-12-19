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
            to="/admin/categories/"
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
          variant="error"
           v-if="category.status"

          v-on:click="changeStatus(false)"
        >
          DISABLE
        </t-button>
          <t-button
          type="button"
          variant="success"
            v-else
          v-on:click="changeStatus(true)"
        >
          ENABLE
        </t-button>
      </div>
      <div class="w-full">

            <section class="container-fluid mx-auto font-mono">
                      <div class="flex-auto p-12 max-w-xl mx-auto">
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

    <button @click="updateCategory" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
        Update
    </button>

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
import { GET_CATEGORY_BY_ID, UPDATE_CATEGORY_STATUS,UPDATE_CATEGORY } from "@/graphql/query";

export default {
  layout: "admin",
  middleware: 'authAdmin',

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
          console.log("data",value)
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
    async updateCategory(){
          let formData={title:this.category.title,description:this.category.description}
      try {
        console.log(formData);
            const res = await this.$apollo.mutate({
              mutation: UPDATE_CATEGORY,
              variables: {
                id: this.category.id,
                data: formData,
              },
            });
            console.log(res);
            this.reloadCategory(); // reload category from parent
            //show success by notification
            this.message = res.data.result;
            this.showAlert = true;
            this.type = "success";
          } catch (error) {
            console.log(error);
            this.message = error.message;
            this.showAlert = true;
            this.type = "danger";
          }

    }
  },
  created() {
    let cid = this.$route.params.id;
    console.log("id", cid);
  },
};
</script>

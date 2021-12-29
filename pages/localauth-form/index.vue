<template>
  <section class="py-10 bg-white">
    <div class="flex items-center justify-center px-4">
      <div
        class="
          max-w-4xl
          bg-blue-50
          w-full
          rounded-lg
          shadow-xl
          border-2 border-purple-400
        "
      >
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
          <h2 class="text-2xl font-semibold">
            LOCAL AUTHORITY REGISTRATION - Consultation
          </h2>
          <!-- <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Name<span class="text-red-500">*</span></p>
            <input
              placeholder="Enter Name"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-10
                px-4
              "
              required="required"
              type="text"
              v-model="formData.name"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              Email<span class="text-red-500">*</span>
            </p>
            <input
              placeholder="Email"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-10
                px-4
              "
              required="required"
              type="email"
              v-model="formData.email"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Phone</p>
            <input
              placeholder="Contact Number"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-10
                px-4
              "
              required="required"
              type="email"
              v-model="formData.contact_number"
            />
          </div>

          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Message</p>
            <textarea
              placeholder="Message"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-20
                px-4
              "
              required="required"
              type="text"
              rows="8"
              v-model="formData.message"
            ></textarea>
          </div>

          <!--------------------------------------->
          
          <!-- <div
            class="
              flex flex-wrap
              text-center
              -mx-px
              overflow-hidden
              md:-mx-1
              lg:-mx-1
              xl:-mx-2
            "
          >
            <div
              class="
                my-px
                px-px
                w-full
                overflow-hidden
                md:my-1 md:px-1 md:w-1/2
                lg:my-1 lg:px-1 lg:w-1/2
                xl:my-2 xl:px-2 xl:w-1/2
                font-bold
              "
            >
              Product Title
            </div>

            <div
              class="
                my-px
                px-px
                w-full
                overflow-hidden
                md:my-1 md:px-1 md:w-1/2
                lg:my-1 lg:px-1 lg:w-1/2
                xl:my-2 xl:px-2 xl:w-1/2
                font-bold
              "
            >
              Price
            </div>

            <div
              class="
                my-px
                px-px
                w-full
                overflow-hidden
                md:my-1 md:px-1 md:w-1/2
                lg:my-1 lg:px-1 lg:w-1/2
                xl:my-2 xl:px-2 xl:w-1/2
              "
            >
              Local Authority Food Registration
            </div>

            <div
              class="
                my-px
                px-px
                w-full
                overflow-hidden
                md:my-1 md:px-1 md:w-1/2
                lg:my-1 lg:px-1 lg:w-1/2
                xl:my-2 xl:px-2 xl:w-1/2
              "
            >
              £ 20.00
            </div>
          </div> -->

          <div class="p-4 border-b flex justify-center py-6">
            <button
              @click="onSubmit"
              class="
                inline-flex
                justify-center
                w-48
                py-3
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-semibold
                rounded-md
                bg-indigo-600
                hover:bg-indigo-700
                text-white
              "
            >
              Submit
            </button>
          </div>
          <stripe-checkout
            ref="checkoutRef"
            :pk="publishableKey"
            :session-id="sessionId"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ADD_LOCALFORM } from "@/graphql/query";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  data() {
    return {
      loading: false,
      message: null,
      showAlert: false,
      publishableKey:
        "pk_test_51JwHpkBIQ7NOZ6okDluA6xP6CnAd2mfF70QFO4ZCfqBSHUdzE5qSNrXWVy4qjlXeosy68dbkSjBN9dRsmEDzWduE00WPUwEucO",
      sessionId: "",
      formData: {
        name: "",
        email: "",
        contact_number: "",
        message: "",
      },
    };
  },
  components: {
    StripeCheckout,
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_LOCALFORM,
          variables: {
            data: this.formData,
          },
        });
        console.log(data);
        if (data.result != null) {
          this.sessionId = data.result;
          this.$refs.checkoutRef.redirectToCheckout();
        } else {
          alert(" getting some error");
        }
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

<style></style>

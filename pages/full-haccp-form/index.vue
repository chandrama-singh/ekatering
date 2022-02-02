<template>
  <section class="py-10 bg-white">
    <div class="min-h-screen flex items-center justify-center px-4">
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
          <!-- <h2 class="text-2xl font-semibold">
                Office Use
            </h2>
            <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div @submit.prevent="validateBeforeSubmit">

          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Date</p>
            <input
              placeholder="DD/MM/YYYY"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-gray-darker
                border border-grey-lighter
                rounded-lg
                h-10
                px-4
              "
              required="required"
              type="date"
              id="datetime"
              v-model="formData.date"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">
              Name <span class="text-red-600 font-bold">*</span>
            </p>
            <span class="float-right text-right w-full">
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
                id="name"
                name="name"
                v-validate="'required'"
                required="required"
                type="text"
                v-model="formData.name"
              />
              <small class="danger" v-if="errors.has('name')">{{
                errors.first("name")
              }}</small>
            </span>
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Job Titile</p>
            <input
              placeholder="Enter Job Title"
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
              v-model="formData.jobtitle"
            />
          </div>
          <!--------------------------------------------------------------------------------------->
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">
              Phone number <span class="text-red-600 font-bold">*</span>
            </p>
            <span class="float-right text-right w-full">
              <input
                placeholder="Phone Number"
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
                id="phone"
                name="phone"
                v-validate="'required|numeric'"
                required="required"
                type="text"
                v-model="formData.number"
              />
              <small class="danger" v-if="errors.has('phone')">{{
                errors.first("phone")
              }}</small>
            </span>
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">
              Email Address <span class="text-red-600 font-bold">*</span>
            </p>
            <span class="float-right text-right w-full">
              <input
                placeholder="Email Address"
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
                id="email"
                name="email"
                v-validate="'required|email'"
                required="required"
                type="text"
                v-model="formData.email"
              />
              <small class="danger" v-if="errors.has('email')">{{
                errors.first("email")
              }}</small>
            </span>
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Company Name</p>
            <input
              placeholder="Company Name"
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
              v-model="formData.companyName"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Trading Name (if different from above)</p>
            <input
              placeholder="Trading Name"
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
              v-model="formData.tradingName"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Company Registration Number</p>
            <input
              placeholder="Company Registration Number"
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
              v-model="formData.regNumber"
            />
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-3
              border-b
            "
          >
            <p class="text-gray-600">Business Trading Address</p>
            <input
              placeholder="Business Trading Address"
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
              v-model="formData.businessAddress"
            />
          </div>
          <!--------------------------------------------------------------------------------------->
          <div
            class="p-3 border-b flex justify-between bg-purple-500 text-white"
          >
            <h2 class="text-lg font-bold">
              Scope of Business (in 50 words or less): Who do you supply to;
              amount; locality
            </h2>
          </div>
          <div
            class="
              md:grid md:grid-cols-1
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <textarea
              placeholder="Scope of Business"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-24
                px-4
              "
              required="required"
              type="text"
              rows="10"
              v-model="formData.scope"
            ></textarea>
          </div>
          <div
            class="p-3 border-b flex justify-between bg-purple-500 text-white"
          >
            <h2 class="text-lg">
              <b>Product(s) description and intended use:</b> Please describe
              each product range in 150 words or less. We consider a “range of
              products” to be similar in flavour and similar process.
            </h2>
          </div>
          <div
            class="
              md:grid md:grid-cols-1
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <textarea
              placeholder="Description"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-24
                px-4
              "
              required="required"
              type="text"
              rows="8"
              v-model="formData.productDesc"
            ></textarea>
          </div>
          <!--------------------------------------->
          <div
            class="p-3 border-b flex justify-between bg-purple-500 text-white"
          >
            <h2 class="text-lg">
              <b
                >Is the product manufactured in accordance with an ISO
                standard?</b
              >
              Yes/No <br /><b>If no, how is quality managed? E.g.,</b> Quality
              is managed with an in-house quality program.
            </h2>
          </div>
          <div
            class="
              md:grid md:grid-cols-1
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <textarea
              placeholder="Description"
              class="
                appearance-none
                block
                w-full
                bg-grey-lighter
                text-grey-darker
                border border-grey-lighter
                rounded-lg
                h-24
                px-4
              "
              required="required"
              type="text"
              rows="8"
              v-model="formData.manufacture"
            ></textarea>
          </div>

          <span class="pl-4 w-full">
            <input
              type="checkbox"
              class="mr-2"
              id="agree"
              name="agree"
              v-validate="'required'"
              required="required"
            />I have read, understood and agree to the
            <Nuxt-Link to="/training-tc" class="text-indigo-500">
              Terms and Conditions
            </Nuxt-Link>
            <br />
            <small v-if="errors.has('agree')" class="danger pl-4">{{
              errors.first("agree")
            }}</small>
          </span>

          <div class="p-4 border-b flex justify-center py-6">
            <button
              type="submit"
              class="
                mr-4
                inline-flex
                justify-center
                w-24
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-semibold
                rounded-md
                text-white
                bg-gray-600
                hover:bg-gray-700
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              @click="onSubmit"
              class="
                inline-flex
                justify-center
                w-24
                py-2
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
import { ADD_FOOD_SAFETY_FORM } from "@/graphql/query";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  data() {
    return {
       loading: false,
      message: null,
      showAlert: false,
      publishableKey:"pk_test_51JwHpkBIQ7NOZ6okDluA6xP6CnAd2mfF70QFO4ZCfqBSHUdzE5qSNrXWVy4qjlXeosy68dbkSjBN9dRsmEDzWduE00WPUwEucO",
      sessionId: "",
      formData: {
        date: "",
        name: "",
        jobtitle: "",
        number: "",
        email: "",
        companyName: "",
        tradingName: "",
        regNumber: "",
        businessAddress: "",
        scope: "",
        productDesc: "",
        manufacture: "",
      },
    };
  },

  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.onSubmit();
          return;
        }

        alert("Fill all the fields correct!");
      });
    },

    async onSubmit() {
      this.loading = true;
      this.formData.date=new Date(this.formData.date);
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_FOOD_SAFETY_FORM,
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

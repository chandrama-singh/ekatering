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
                Office Use only
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
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Business Name</p>
            <span class="float-right text-right w-full">
            <input
              placeholder="Business Name"
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
               id="name" name="name" v-validate="'required'"
            />
             <small v-if="errors.has('name')" class="danger">{{ errors.first('name') }}</small>
            </span>
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
              type="text"
              v-model="formData.address"
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
            <p class="text-gray-600">Food Business Owner contact number</p>
             <span class="float-right text-right w-full">
            <input
              placeholder="Food Business Owner contact number"
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
              v-model="formData.contact_number"
              id="contact_number" name="contact_number" v-validate="'required|numeric'"
            />
            <small v-if="errors.has('contact_number')" class="danger">{{ errors.first('contact_number') }}</small>
             </span>
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
            <p class="text-gray-600">Food Business Email</p>
             <span class="float-right text-right w-full">
            <input
              placeholder="Food Business Email"
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
            id="email" name="email" v-validate="'required|email'"
                      :class="{ 'is-danger': errors.has('email') }">
                      <small v-if="errors.has('email')" class="danger">{{ errors.first('email') }}</small>
             </span>
          </div>
          <div
            class="p-3 border-b flex justify-between bg-purple-400 text-white"
          >
            <h2 class="text-xl">Type of Business</h2>
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
            <multiselect
              v-model="selectedBusiness"
              :multiple="true"
              class="mb-3"
              placeholder="Select one"
              :options="business_types"
              :searchable="false"
              :allow-empty="false"
            >
            </multiselect>
          </div>

          <div
            class="p-3 border-b flex justify-between bg-purple-400 text-white"
          >
            <h2 class="text-xl">
              Type of cuisine(e.g. English, Asian, Chinese, African)
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
              placeholder="Type of cuisine(e.g. English,  Asian, Chinese, African)"
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
              v-model="formData.type_of_cuisine"
              id="type_of_cuisine" name="type_of_cuisine" v-validate="'required'"
            ></textarea>
             <small v-if="errors.has('type_of_cuisine')" class="danger">{{ errors.first('type_of_cuisine') }}</small>
          </div>
          <div
            class="p-3 border-b flex justify-between bg-purple-400 text-white"
          >
            <h2 class="text-xl">
              Menu(e.g.state dishes for starters, main, dessert)
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
              placeholder="Menu(e.g.state dishes for starters, main, dessert)"
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
              v-model="formData.menu"
              id="menu" name="menu" v-validate="'required'"
            ></textarea>
            <small v-if="errors.has('menu')" class="danger">{{ errors.first('menu') }}</small>
          </div>
          <!--------------------------------------->
          <div
            class="p-3 border-b flex justify-between bg-purple-400 text-white"
          >
            <h2 class="text-xl">Delivery options for home caterers only</h2>
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
            <multiselect
              v-model="selectedOption"
              class="mb-3"
              placeholder="Select one"
              :options="delivery_options"
              :searchable="false"
              :allow-empty="false"
            >
            </multiselect>
          </div>

          <div
            class="p-3 border-b flex justify-between bg-purple-400 text-white"
          >
            <h2 class="text-xl">
              Private chefs/ Event Caterers/ Restaurants/Take away only
            </h2>
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
            <multiselect
              v-model="selectedService"
              :multiple="true"
              class="mb-3"
              placeholder="Select one"
              :options="service_options"
              :searchable="false"
              :allow-empty="false"
            >
            </multiselect>
          </div>


<span class="pl-4 w-full">
            <input
              type="checkbox"
              class="mr-2"
              id="agree"
              name="agree"
              v-validate="'required'"
              required="required"
            />I have read, understood and agree to the <Nuxt-Link to="/training-tc" class="text-indigo-500"> Terms and Conditions </Nuxt-Link>
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
              Reset
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
        </div>
        <stripe-checkout
          ref="checkoutRef"
          :pk="publishableKey"
          :session-id="sessionId"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ADD_CONSULTATION } from "@/graphql/query";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Multiselect from "vue-multiselect";
export default {
  data() {
    return {
      loading: false,
      message: null,
      showAlert: false,
      selectedBusiness: [],
      selectedOption: null,
      selectedService: null,
      delivery_options: [
        "Frozen only",
        "Chilled only",
        "Hot only",
        "Ambient",
        "All",
      ],
      service_options: [
        "Cold display service",
        "Hot holding service",
        "Plating",
        "Delivery",
        "All",
      ],
      business_types: [
        "Home caterer",
        "Private Chef",
        "Event Caterer",
        "Take away",
        "Restaurant",
        "Reatil",
      ],
      publishableKey:
        "pk_test_51JwHpkBIQ7NOZ6okDluA6xP6CnAd2mfF70QFO4ZCfqBSHUdzE5qSNrXWVy4qjlXeosy68dbkSjBN9dRsmEDzWduE00WPUwEucO",
      sessionId: "",
      formData: {
        name: "",
        email: "",
        contact_number: "",
        address: "",
        business_types: [],
        type_of_cuisine: "",
        menu: "",
        delivery_option: "",
        delivery_service: [],
      },
    };
  },
  components: {
    StripeCheckout,
    Multiselect,
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
         this.onSubmit();
         return
        }

        alert('Correct the errors!');
      });
    },
    async onSubmit() {
      this.loading = true;
      console.log(this.selectedOption);
      this.formData.business_types = this.selectedBusiness;
      this.formData.delivery_option = this.selectedOption;
      this.formData.delivery_service = this.selectedService;
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_CONSULTATION,
          variables: {
            form_name: "SAFER_FOOD_FORM",
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

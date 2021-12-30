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
          <h2 class="text-2xl font-semibold">Food Standard ~ Coaching</h2>
          <!-- <p class="text-sm text-white">
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
            <p class="text-gray-600">Name<span class="text-red-500">*</span></p>
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
                required="required"
                type="text"
                v-model="formData.name"
                id="name"
                name="name"
                v-validate="'required'"
              />
              <small v-if="errors.has('name')" class="danger">{{
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
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              Email<span class="text-red-500">*</span>
            </p>
            <span class="float-right text-right w-full">
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
                id="email"
                name="email"
                v-validate="'required|email'"
                :class="{ 'is-danger': errors.has('email') }"
              />
              <small v-if="errors.has('email')" class="danger">{{
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
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Contact Number</p>
            <span class="float-right text-right w-full">
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
                type="mobile"
                v-model="formData.number"
                id="mobile"
                name="mobile"
                v-validate="'required|numeric'"
              />
              <small v-if="errors.has('mobile')" class="danger">{{
                errors.first("mobile")
              }}</small>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        number: "",
        message: "",
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

        alert("Correct the errors!");
      });
    },
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style></style>

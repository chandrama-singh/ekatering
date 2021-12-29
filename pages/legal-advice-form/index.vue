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
          <h2 class="text-2xl font-semibold">
            Contact Us
            <p class="text-sm"></p>
          </h2>
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
            id="email" name="email" v-validate="'required|email'"
                      :class="{ 'is-danger': errors.has('email') }">
                      <small v-if="errors.has('email')" class="danger">{{ errors.first('email') }}</small>
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
              Phone<span class="text-red-500">*</span>
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
              required="required"
              type="phone"
              v-model="formData.phone"
               id="mobile" name="mobile" v-validate="'required|numeric'"
            />
            
            <small v-if="errors.has('mobile')" class="danger">{{ errors.first('mobile') }}</small>
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
            <p class="text-gray-600">I Need Help With :<span class="text-red-500">*</span></p>
            <select
              v-model="formData.needhelp"
              name=""
              id=""
              class="
                form-select
                appearance-none
                block
                w-full
                px-5
                py-2
                border
                rounded-lg
                bg-white
                shadow-lg
                placeholder-blueGray-300
                text-blueGray-600
                focus:ring focus:outline-none
              "
              x-model="expired.month"
            >
              <option value="" selected="selected" disabled>
                Choose an option
              </option>
              <option value="A food safety report">A food safety report</option>
              <option value="Improvement notice">Improvement notice</option>
              <option value="Prohibition notice">Prohibition notice</option>
              <option value="Closure of my business">
                Closure of my business
              </option>
              <option value="Other">Other</option>
            </select>
            
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
        phone: "",
        needhelp: "",
        message: "",
      },
    };
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
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style>
select {
  padding: 15px;
  border-radius: 3px;
  height: 50px;
  color:black;
  padding-right: 30px;
  border-color: blue;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: rgb(0, 0, 0) url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='black'/></g></svg>") no-repeat;
  background-position: right 5px top 50%;
}
</style>

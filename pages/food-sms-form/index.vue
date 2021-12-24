<template>
  <section class="py-10 bg-white">
      <div class="min-h-screen flex items-center justify-center px-4">
    
    <div class="max-w-4xl  bg-blue-50 w-full rounded-lg shadow-xl border-2 border-purple-400">
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
            <!-- <h2 class="text-2xl font-semibold">
                Office Use 
            </h2>
            <p class="text-sm text-white">
                Ref: #025/2020
            </p> -->
        </div>
        <div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                    Ref:(Office Use)
                </p>
                 <input
                      placeholder="Reference Number"
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
                      v-model="formData.reference"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                   Date
                </p>
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                   Name <span class="text-red-600 font-bold">*</span>
                </p>
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                    Job Titile
                </p>
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
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                    Phone number <span class="text-red-600 font-bold">*</span>
                </p>
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
                      type="text"
                      v-model="formData.number"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                   Email Address <span class="text-red-600 font-bold">*</span>
                </p>
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
                      required="required"
                      type="text"
                      v-model="formData.email"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                   Company Name
                </p>
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                    Trading Name (if different from above)
                </p>
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
                      v-model="formData.businessName"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                   Company Registration Number
                </p>
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
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-3 border-b">
                <p class="text-gray-600 ">
                    Business Trading Address
                </p>
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
            <div class="p-3 border-b flex justify-between bg-purple-500 text-white">
            <h2 class="text-lg font-bold">
                Scope of Business (in 50 words or less): Who do you supply to; amount; locality
            </h2>
        </div>
         <div class="md:grid md:grid-cols-1 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
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
            <div class="p-3 border-b flex justify-between bg-purple-500 text-white">
            <h2 class="text-lg ">
                <b>Product(s) description and intended use:</b> Please describe each product range in 150 words or less. We consider a “range of products” to be similar in flavour and similar process.
            </h2>
        </div>
         <div class="md:grid md:grid-cols-1 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
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
        <div class="p-3 border-b flex justify-between bg-purple-500 text-white">
            <h2 class="text-lg ">
                <b>Is the product manufactured in accordance with an ISO standard?</b> Yes/No <br/><b>If no, how is quality managed? E.g.,</b> Quality is managed with an in-house quality program.
            </h2>
        </div>
         <div class="md:grid md:grid-cols-1 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
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
             <div class="p-4 border-b flex justify-center py-6">
            <button type="submit"
                            class="mr-4 inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md   text-white bg-gray-600 hover:bg-gray-700 ">
                            Cancel
                        </button>
                        <button type="submit" @click="onSubmit"
                            class="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md  bg-indigo-600 hover:bg-indigo-700 text-white">
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
  data(){
    return{
      formData:{
        reference:'',
        date:'',
        name:'',
        jobtitle:'',
        number:'',
        email:'',
        companyName:'',
        businessName:'',
        regNumber:'',
        businessAddress:'',
        scope:'',
        productDesc:'',
        manufacture:''
      }
    }
  },

  methods:{
    onSubmit(){
      console.log(this.formData);
    }
  }

}
</script>

<style>

</style>
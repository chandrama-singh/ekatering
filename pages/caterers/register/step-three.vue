<template>
  <section class="bg-red-50 py-10">
      <div class="max-w-xl mx-auto my-4 pb-4">
	<div class="flex pb-3">
		<div class="flex-1">
		</div>

		<div class="flex-1">
			<div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-450 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>


		<div class="flex-1">
			<div class="w-10 h-10 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">2</span>
			</div>
		</div>

		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 20%"></div>
			</div>
		</div>
    	<div class="flex-1">
			<div class="w-10 h-10 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">3</span>
			</div>
		</div>

	<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 20%"></div>
			</div>
		</div>

    	<div class="flex-1">
			<div class="w-10 h-10 bg-gray-300 border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-grey-darker text-center w-full">4</span>
			</div>
		</div>

		<div class="flex-1">
		</div>
	</div>

</div>
<div class=" max-w-4xl mx-auto py-10 space-y-6">
<!---------------------------Form-------------------------------->
<div>
  <div class="px-6">
            <table class="min-w-full table-auto">
              <thead class="justify-between">
                <tr class="bg-gray-800">

                  <th class="px-16 py-2">
                    <span class="text-gray-300">Document Name</span>
                  </th>
                  <th class="px-16 py-2">
                    <span class="text-gray-300">Upload</span>
                  </th>
                  <th class="px-16 py-2">
                    <span class="text-gray-300"></span>
                  </th>
                   <th class="px-16 py-2">
                    <span class="text-gray-300">Link</span>
                  </th>




                </tr>
              </thead>
              <tbody class="bg-gray-200">
                <tr class="bg-white border-4 border-gray-200">

                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Proof of address</span
                    >
                  </td>
                  <td class="px-16 py-2">
                    <button
                      class="
                        bg-indigo-500
                        text-white
                        px-4
                        py-2
                        border
                        rounded-md
                        hover:bg-white hover:border-indigo-500 hover:text-black
                      "
                      @click="selectAddressProof"
                    >
                      Upload File
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <div v-if="address_uploaded">Uploaded</div>
                   <input
        type="file"
        ref="address_proof"
        accept="doc/*"
        v-show="false"
        @change="previewAddressProof"
      />
                  </td>


                 <td class="px-16 py-2">
                   <a :href="documents.address_proof" target="_blank" class="border-gray-400" v-if="documents">
    <div class="select-none cursor-pointer bg-white rounded-md flex  md:flex-row flex-col md:text-left text-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="py-2 md:mr-16">
        <div class="font-medium">{{documents.address_proof}}</div>

      </div>
    </div>
  </a>
                  </td>
                </tr>
                <tr class="bg-white border-4 border-gray-200">

                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Local Authority Food Registration Letter</span
                    >
                  </td>
                  <td class="px-16 py-2">
                    <button
                      class="
                        bg-indigo-500
                        text-white
                        px-4
                        py-2
                        border
                        rounded-md
                        hover:bg-white hover:border-indigo-500 hover:text-black
                      "
                     @click="selectFoodRegistration"
                    >
                      Upload File
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <div v-if="food_uploaded">Uploaded</div>
                     <input
        type="file"
        ref="food_registration"
        accept="doc/*"
        v-show="false"
        @change="previewFoodRegistration"
      />
                  </td>


                  <td class="px-16 py-2">
                   <a :href="documents.food_registration_letter" target="_blank" class="border-gray-400" v-if="documents">
    <div class="select-none cursor-pointer bg-white rounded-md flex  md:flex-row flex-col md:text-left text-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="py-2 md:mr-16">
        <div class="font-medium">{{documents.food_registration_letter}}</div>

      </div>
    </div>
  </a>
                  </td>
                </tr>
                <tr class="bg-white border-4 border-gray-200">

                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Food Hygiene Rating Scheme (FHRS) award letter</span
                    >
                  </td>
                  <td class="px-16 py-2">
                    <button
                      class="
                        bg-indigo-500
                        text-white
                        px-4
                        py-2
                        border
                        rounded-md
                        hover:bg-white hover:border-indigo-500 hover:text-black
                      "
                      @click="selectFhrs"
                    >
                      Upload file
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <div v-if="fhrs_uploaded">Uploaded</div>
                    <input
        type="file"
        ref="fhrs_letter"
        accept="doc/*"
        v-show="false"
        @change="previewFHRS"
      />
                  </td>

                 <td class="px-16 py-2">

                   <a :href="documents.fhrs_letter" target="_blank" class="border-gray-400" v-if="documents">
    <div class="select-none cursor-pointer bg-white rounded-md flex  md:flex-row flex-col md:text-left text-center items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="py-2 md:mr-16">
        <div class="font-medium">{{documents.fhrs_letter}}</div>

      </div>
    </div>
  </a>
                  </td>
                </tr>
              </tbody>
            </table>
             <div>
        <button
          class="
            w-full
            px-4
            py-2
            font-bold
            text-white
            bg-purple-500
            rounded-full
            hover:bg-purple-700
            focus:outline-none focus:shadow-outline
          "
          type="button"
          @click="next4"
        >
          Next
        </button>
      </div>
          </div>
           <Loading v-if="loading" />
  </div>
        <!------------------------------------Button----------------------------------->
</div>
  </section>
</template>
<script>
import {  UPDATE_CATERER_ADDRESS_PROOF,UPDATE_CATERER_FOOD_REGISTRATION,UPDATE_CATERER_FHRS_LETTER  } from "@/graphql/query";
export default {
   layout:'register',
  data() {
    return {
      address_proof: null,
      food_registration: null,
      fhrs_letter: null,
      loading: false,
      address_uploaded:false,
      food_uploaded:false,
      fhrs_uploaded:false,

    };
  },
  computed:{
    documents(){
      return {...this.$store.state.user.documents};
    }
  },

  methods: {
    selectAddressProof() {
      this.$refs.address_proof.click();
    },

    selectFoodRegistration() {
      this.$refs.food_registration.click();
    },

    selectFhrs() {
      this.$refs.fhrs_letter.click();
    },

    previewAddressProof(event) {
      this.address_proof = event.target.files[0];
      if (this.address_proof.size > 2 * 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {

        this.loading = true;
        this.updateAddressProof();
      }
    },

    previewFoodRegistration(event) {
      this.food_registration = event.target.files[0];
      if (this.food_registration.size > 2 * 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {

        this.loading = true;
        this.updateFoodRegistratione();
      }
    },
    previewFHRS(event) {
      this.fhrs_letter = event.target.files[0];
      if (this.fhrs_letter.size > 2 * 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {

        this.loading = true;
        this.updateFhrs();
      }
    },

    async updateAddressProof() {
      console.log(this.profile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_ADDRESS_PROOF,
          variables: {
            file: this.address_proof,
          },
        });
        this.loading = false;
        console.log(res.data.result);
        this.address_uploaded=true;
      } catch (error) {
        console.log(error);
         this.loading = false;
      }
    },

     async updateFoodRegistratione() {
      console.log(this.profile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_FOOD_REGISTRATION,
          variables: {
            file: this.food_registration,
          },
        });
        this.loading = false;
        console.log(res.data.result);
        this.food_uploaded=true;
      } catch (error) {
        console.log(error);
         this.loading = false;
      }
    },
     async updateFhrs() {
      console.log(this.profile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_FHRS_LETTER,
          variables: {
            file: this.fhrs_letter,
          },
        });
        this.loading = false;
        console.log(res.data.result);
        this.fhrs_uploaded=true;
      } catch (error) {
        console.log(error);
         this.loading = false;
      }
    },
    next4(){
            this.$router.push("/caterers/register/step-four");
        }
  },

  created() {
    this.user = this.$store.state.user;
  },
};
</script>

<template>
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
          </div>
           <Loading v-if="loading" />
  </div>
</template>

<script>
import {  UPDATE_CATERER_ADDRESS_PROOF,UPDATE_CATERER_FOOD_REGISTRATION,UPDATE_CATERER_FHRS_LETTER  } from "@/graphql/query";
export default {
  data() {
    return {
      address_proof: null,
      food_registration: null,
      fhrs_letter: null,
      loading: false,
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
      } catch (error) {
        console.log(error);
         this.loading = false;
      }
    },
  },

  created() {
    this.user = this.$store.state.user;
  },
};
</script>


<style>

</style>

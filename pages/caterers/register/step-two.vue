<template>
  <section class="bg-red-50 py-10">
      <div class="max-w-xl mx-auto my-4 pb-4">
	<div class="flex pb-3">
		<div class="flex-1">
		</div>

		<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
			 	<div class="bg-purple-500 text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>


		<div class="flex-1">
			<div class="w-10 h-10 bg-purple-500 mx-auto rounded-full text-lg text-white flex items-center">
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
 <div
    v-if="address"
    class="
      bg-white
      mb-6
      p-6
      w-full
      justify-center
      items-center
      overflow-hidden
      rounded
      border-1 border-gray-600
      shadow-sm
    "
  >


    <div class="flex flex-col bg-white space-y-6">
      <div>
        <label class="block text-lg mb-2" for="name">Local Address/ Strret</label>
        <t-input type="text" v-model="address.address_line_1"  placeholder="address 1" />
      </div>
      <div>
        <t-input
          type="text"
          name="address_line_2"
          id="address_line_2"
          placeholder="address 2"
          v-model="address.address_line_2"
        />
      </div>

        <div>
        <label class="block text-lg mb-2" for="email">Town</label>
        <t-input
          type="text"
          name="town"
          id="town"
          placeholder="town"
          v-model="address.town"

        />
      </div>
        <div>
        <label class="block text-lg mb-2" for="email">Country</label>
        <t-input
          type="text"
          name="country"
          id="country"
          placeholder="country"
          v-model="address.country"

        />
      </div>
      <div>
        <label class="block text-lg mb-2" for="mobile">Post Code</label>
        <t-input
          type="text"
          name="postcode"
          id="postcode"
          placeholder="postcode"
          v-model="address.postcode"
        />
      </div>
       <div>
        <label class="block text-lg mb-2" for="mobile">Latitude (optional)</label>
        <t-input
          type="number"
          name="latitude"
          id="latitude"
          placeholder="latitude"
          v-model="address.latitude"
        />
      </div>


      <div>
        <label class="block text-lg mb-2" for="description">Longitude (optional)</label>
       <t-input
          type="number"
          name="longitude"
          id="longitude"
          placeholder="longitude"
          v-model="address.longitude"
        />
      </div>
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
          @click="onSubmit"
        >
          Update Detail
        </button>
      </div>
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
          @click="next3"
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
import {  UPDATE_CATERER_ADDRESS} from "@/graphql/query";
export default {
   layout:'register',
  data() {
    return {
      profile: null,
      loading: false,
    };
  },
  computed:{
    address(){
      return {...this.$store.state.user.address};
    }
  },

  methods: {


    async onSubmit() {
      this.loading = true;
      var formData = {
        address_line_1: this.address.address_line_1,
        address_line_2: this.address.address_line_2,
        town: this.address.town,
        country: this.address.country,
        postcode: this.address.postcode,
        latitude: this.address.latitude,
        longitude: this.address.longitude,
      };
      console.log("submit form", formData)
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_ADDRESS,
          variables: {
            data: formData,
          },
        });
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    next3(){
            this.$router.push("/caterers/register/step-three");
        }


  },

  created() {
    this.user = this.$store.state.user;
  },
};
</script>

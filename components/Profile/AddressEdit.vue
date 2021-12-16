<template>
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
        <label class="block text-lg mb-2" for="mobile">Latitude </label>
        <t-input
          type="number"
          name="latitude"
          id="latitude"
          placeholder="latitude"
          v-model="address.latitude"
        />
      </div>


      <div>
        <label class="block text-lg mb-2" for="description">Longitude</label>
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
    </div>
    <Loading v-if="loading" />
  </div>
</template>
<script>
import {  UPDATE_CATERER_ADDRESS} from "@/graphql/query";
export default {
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
        this.$toast.success("Address updated Successfully!");
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },


  },

  created() {
    this.user = this.$store.state.user;
  },
};
</script>

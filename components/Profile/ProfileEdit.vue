<template>
  <div class="max-w-4xl mx-auto py-10 space-y-6">
    <!---------------------------Form-------------------------------->
    <div
      v-if="user"
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
      <div>
        <div class="mx-auto flex flex-row justify-center">
          <div class="mb-12">
            <div
              class="
                relative
                shadow
                mt-6
                h-48
                w-48
                border-white
                rounded-full
                overflow-hidden
                border-4
              "
            >
              <input
                type="file"
                ref="profile"
                accept="image/*"
                v-show="false"
                @change="previewProfile"
              />
              <img
                v-if="user.photo"
                class="object-cover relative w-full h-full"
                :src="user.photo"
                @click="selectProfile"
              />
              <img
                v-else
                class="object-cover relative w-full h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                @click="selectProfile"
              />
            </div>
            <div class="absolute z-20">
              <p class="text-sm text-gray-600 text-center">
                click to change profile photo
              </p>
            </div>
          </div>
          <div class="float-right pl-12">
            <t-toggle
              v-model="user.isAvailable"
              @change="changeAvailability()"
              checked
            />
            <p class="my-2">Change Availability</p>
          </div>
        </div>
        <div>
          <div
            class="
              relative
              shadow
              mx-auto
              mt-6
              h-64
              w-2/3
              -my-12
              border-white
              overflow-hidden
              border-4
            "
          >
            <input
              type="file"
              ref="banner"
              accept="image/*"
              v-show="false"
              @change="previewBanner"
            />
            <img
              v-if="user.banner"
              class="object-cover w-full h-full"
              :src="user.banner"
              @click="selectBanner"
            />
            <img
              v-else
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              @click="selectBanner"
            />
          </div>
          <div class="mt-16">
            <p class="text-sm text-gray-600 text-center">
              click to change banner image
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start justify-start mb-4">
        <div class="flex flex-col">
          <label class="block text-lg mb-2" for="name">Choose Your Role</label>
          <multiselect
            v-model="selectedRole"
            :multiple="true"
            class="mb-3"
            track-by="name"
            label="name"
            placeholder="Select"
            :options="roles"
            :searchable="false"
            :allow-empty="false"
          >
          </multiselect>
        </div>
      </div>

      <div class="flex flex-col bg-white space-y-6">
        <div>
          <label class="block text-lg mb-2" for="name">First Name</label>
          <t-input type="text" v-model="user.first_name" />
        </div>
        <div>
          <label class="block text-lg mb-2" for="name">Last Name</label>
          <t-input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            v-model="user.last_name"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="email">Email</label>
          <t-input
            type="email"
            name="email"
            :disabled="true"
            id="email"
            placeholder="email"
            v-model="user.email"
            class="bg-gray-100"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="email">Business Name</label>
          <t-input
            type="text"
            name="businessname"
            id="businessename"
            placeholder="email"
            v-model="user.business_name"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="email">Business Email</label>
          <t-input
            type="email"
            name="businessemail"
            id="businessemail"
            placeholder="business email"
            v-model="user.business_email"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="mobile">Mobile</label>
          <t-input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="mobile number"
            v-model="user.mobile"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="mobile">Whatsapp </label>
          <t-input
            type="text"
            name="whatsapp"
            id="whatsapp"
            placeholder="whatsapp"
            v-model="user.whatsapp"
          />
        </div>
        <div>
          <label class="block text-lg mb-2">Gender</label>
          <div class="flex">
            <label class="flex items-center">
              <t-radio name="gender" v-model="user.gender" value="Male" />
              <span class="ml-3 text-sm">Male</span>
            </label>
            <label class="flex items-center ml-3">
              <t-radio name="gender" v-model="user.gender" value="Female" />
              <span class="ml-3 text-sm">Female</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-lg mb-2" for="description">Bio</label>
          <t-textarea
            type="text"
            name="text"
            id=""
            placeholder="write about yourself"
            v-model="user.bio"
          />
        </div>
        <div>
          <label class="block text-lg mb-2" for="stripe_key"
            >stripe account key</label
          >
          <t-textarea
            type="text"
            name="text"
            id=""
            placeholder="Enter Strip key..."
            v-model="user.STRIPE_PK"
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
            Save
          </button>
        </div>
      </div>
      <Loading v-if="loading" />
    </div>
    <!------------------------------------Button----------------------------------->
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import {
  UPDATE_CATERER,
  UPDATE_CATERER_PROFILE,
  UPDATE_CATERER_BANNER,
  UPDATE_CATERER_AVAILABILITY,
} from "@/graphql/query";
export default {
  layout: "register",
  middleware: "auth",
  data() {
    return {
      profile: null,
      banner: null,
      loading: false,
      selectedRole: null,

      roles: [
        { name: "Home Chef", value: "home_chef" },
        { name: "Event Caterer", value: "event_caterer" },
        { name: "Private Chef", value: "private_chef" },
      ],
    };
  },
  components: { Multiselect },
  computed: {
    user() {
      return { ...this.$store.state.user };
    },
  },

  methods: {
    selectProfile() {
      this.$refs.profile.click();
    },

    selectBanner() {
      this.$refs.banner.click();
    },
    previewProfile(event) {
      this.profile = event.target.files[0];
      if (this.profile.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.user.photo = URL.createObjectURL(this.profile);
        this.loading = true;
        this.updateProfile();
        this.$toast.success("Profile photo updated Successfully!");
      }
    },

    previewBanner(event) {
      this.banner = event.target.files[0];
      if (this.banner.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.user.banner = URL.createObjectURL(this.banner);
        this.loading = true;
        this.updateBanner();
        this.$toast.success("Banner image updated Successfully");
      }
    },

    async onSubmit() {
      this.loading = true;
      var category = [];

      this.selectedRole.forEach((element) => {
        category.push({ name: element.name, value: element.value });
      });

      var formData = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        mobile: this.user.mobile,
        whatsapp: this.user.whatsapp,
        bio: this.user.bio,
        gender: this.user.gender,
        business_name: this.user.business_name,
        business_category: category,
        business_email: this.user.business_email,
      };
      console.log("submit form", formData);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER,
          variables: {
            data: formData,
          },
        });
        console.log(res.data.result);
        this.$toast.success("Profile updated Successfully!");
      } catch (error) {
        console.log(error);
        alert(error);
      }
      this.loading = false;
    },

    async updateProfile() {
      console.log(this.profile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_PROFILE,
          variables: {
            file: this.profile,
          },
        });
        this.loading = false;
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async updateBanner() {
      console.log(this.banner);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_BANNER,
          variables: {
            file: this.banner,
          },
        });
        this.loading = false;
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async changeAvailability() {
      console.log(this.user.isAvailable);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_CATERER_AVAILABILITY,
          variables: {
            availability: this.user.isAvailable,
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
    this.selectedRole = this.user.business_category;
  },
};
</script>

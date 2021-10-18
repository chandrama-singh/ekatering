<template>
  <div class="bg-white mb-6 p-6 w-full justify-center items-center overflow-hidden rounded border-1 border-gray-600 shadow-sm">
    <div class="relative shadow mx-auto mt-6 h-48 w-48 -my-12 border-white rounded-full overflow-hidden border-4">
      <input type="file" ref="profile" accept="image/*" v-show="false" @change="previewProfile" />
      <img v-if="user.photo" class="object-cover w-full h-full" :src="user.photo" @click="selectProfile" />
      <img v-else class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" @click="selectProfile" />
    </div>
    <div class="mt-16">
      <p class="text-sm text-gray-600 text-center">
        click to change profile photo
      </p>
    </div>
    <form action="#" class="flex flex-col bg-white space-y-6">
      <div>
        <label class="block text-lg mb-2" for="name">Username</label>
        <t-input type="text" v-model="user.username" disabled />
      </div>
      <div>
        <label class="block text-lg mb-2" for="name">Full Name</label>
        <t-input type="text" name="name" id="" placeholder="name" v-model="user.name" />
      </div>
      <div>
        <label class="block text-lg mb-2" for="email">Email</label>
        <t-input type="email" name="email" id="" placeholder="email" v-model="user.email" disabled />
      </div>
      <div>
        <label class="block text-lg mb-2" for="mobile">Mobile</label>
        <t-input type="text" name="mobile" id="" placeholder="mobile no +91" v-model="user.mobile" />
      </div>
      <div>
        <label class="block text-lg mb-2">UPI Address</label>
        <t-input type="text" name="upi" id="upi" placeholder="UPI username or number" v-model="user.upi" />
        <t-input type="text" name="upiname" id="upiType" placeholder="Provider like (GooglePay, Paytm, PhonePay)" v-model="user.upiType" />
      </div>
      <div>
        <label class="block text-lg mb-2" for="bank">Bank Details</label>
        <t-textarea type="text" id="bank" name="bank" placeholder="Enter your bank detail with ifsc code" v-model="user.bankDetail" />
      </div>
      <div>
        <label class="block text-lg mb-2" for="description">Bio</label>
        <t-textarea type="text" name="text" id="" placeholder="write about yourself" v-model="user.bio" />
      </div>
      <div>
        <PrimaryButton title="Update Detail" :uppercase="true" :isLoading="loading" :color="'green-800'" @click="onSubmit" type="button">
          <template v-slot:icon>
            <i class="fas fa-chevron-right text-white"></i>
          </template>
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>
<script>
  import { UPDATE_USER, UPDATE_USER_PROFILE } from "@/graphql/query";
  export default {
    data() {
      return {
        profile: null,
        loading: false,
        user: this.$store.state.user
      };
    },

    methods: {
      selectProfile() {
        this.$refs.profile.click();
      },
      previewProfile(event) {
        this.profile = event.target.files[0];
        if (this.profile.size > 1024 * 1024) {
          alert("File too big (> 1MB)");
        } else {
          this.user.photo = URL.createObjectURL(this.profile);
          this.loading = true;
          this.updateProfile();
        }
      },

      async onSubmit() {
        this.loading = true;
        var formData = {
          name: this.user.name,
          mobile: this.user.mobile,
          bio: this.user.bio,
          upi: this.user.upi,
          upiType: this.user.upiType,
          bankDetail: this.user.bankDetail,
        };
        try {
          const res = await this.$apollo.mutate({
            mutation: UPDATE_USER,
            variables: {
              data: formData
            }
          });
          console.log(res.data.result);
        } catch (error) {
          console.log(error);
        }
        this.loading = false;
      },

      async updateProfile() {
        console.log(this.profile);
        try {
          const res = await this.$apollo.mutate({
            mutation: UPDATE_USER_PROFILE,
            variables: {
              file: this.profile
            }
          });
          this.loading = false;
          console.log(res.data.result);
        } catch (error) {
          console.log(error);
        }
      }
    },

    created() {
      this.user = this.$store.state.user;
    }
  };

</script>

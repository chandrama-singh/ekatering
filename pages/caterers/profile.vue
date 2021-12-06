<template>
  <div class="w-full relative shadow-2xl rounded overflow-hidden">
    <div
      v-if="myself"
      class="top h-64 w-full bg-blue-600 overflow-hidden relative"
    >
     <img
          v-if="myself.banner"
          :src="myself.banner"
          class="bg w-full h-full object-cover object-center absolute z-0"
        />
      <img
      v-else
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt=""
        class="bg w-full h-full object-cover object-center absolute z-0"
      />
      <div
        class="
          flex flex-col
          justify-center
          items-center
          relative
          h-full
          bg-black bg-opacity-50
          text-white
        "
      >
        <img
          v-if="myself.photo"
          :src="myself.photo"
          class="h-24 w-24 object-cover rounded-full"
        />
        <img
          v-else
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          class="h-24 w-24 object-cover rounded-full"
        />
        <h1 class="text-2xl font-semibold">{{ myself.business_name }}</h1>
        <h4 class="text-sm font-semibold">
          Joined Since {{ myself.createdAt | moment("MMMM Do YYYY") }}
        </h4>
      </div>
    </div>
    <div class="grid grid-cols-12 bg-white h-full max-h-full">
      <div
        class="
          col-span-12
          w-full
          px-2
          py-6
          justify-center
          flex
          space-x-2
          border-b border-solid
          md:space-x-0 md:space-y-2 md:flex-col md:col-span-2 md:justify-start
        "
      >
        <a
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            ' bg-gray-800': openTab !== 1,
            'text-white bg-pink-600': openTab === 1,
          }"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-indigo-700 hover:text-gray-200
          "
          >Edit Profile</a
        >

        <a
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            ' bg-gray-800': openTab !== 2,
            'text-white bg-pink-600': openTab === 2,
          }"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-indigo-700 hover:text-gray-200
          "
          >Change Password</a
        >

        <a
          v-on:click="toggleTabs(3)"
          v-bind:class="{
            ' bg-gray-800': openTab !== 3,
            'text-white bg-pink-600': openTab === 3,
          }"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-indigo-700 hover:text-gray-200
          "
          >Edit Social</a
        >

        <a
          v-on:click="toggleTabs(4)"
          v-bind:class="{
            ' bg-gray-800': openTab !== 4,
            'text-white bg-pink-600': openTab === 4,
          }"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-indigo-700 hover:text-gray-200
          "
          >Change Address</a
        >

        <a
          v-on:click="toggleTabs(5)"
          v-bind:class="{
            ' bg-gray-800': openTab !== 5,
            'text-white bg-pink-600': openTab === 5,
          }"
          class="
            text-sm
            p-2
            bg-indigo-200
            text-center
            rounded
            font-semibold
            hover:bg-indigo-700 hover:text-gray-200
          "
          >Upload Documents</a
        >
      </div>
      <!------------------------------------Basics----------------------------->
      <div
        class="
          col-span-8
          md:border-solid md:border-l md:border-black md:border-opacity-25
          h-full
          pb-12
        "
      >
        <!------------------------------------Basics----------------------------->
        <!------------------------------------Edit Profile----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
        >
          <ProfileEdit />
        </div>

        <!------------------------------------Change Password----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
        >
          <PasswordChange />
        </div>

        <!------------------------------------Edit Social Links----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
        >
          <SocialContacts />
        </div>
        <!------------------------------------Address----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
        >
          <AddressEdit />
        </div>
        <!------------------------------------Document----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
        >
          <UploadDocument />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "user",

  data() {
    return {
      openTab: 1,
    };
  },
  computed: {
    myself() {
      return this.$store.state.user;
    },
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    Onsave() {},
  },
};
</script>

<style>
</style>

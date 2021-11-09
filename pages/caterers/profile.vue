<template>
  <div class="w-full relative shadow-2xl rounded overflow-hidden">
    <div v-if="myself" class="top h-64 w-full bg-blue-600 overflow-hidden relative">
      <img
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
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          class="h-24 w-24 object-cover rounded-full"
        />
        <h1 class="text-2xl font-semibold">{{myself.email}}</h1>
        <h4 class="text-sm font-semibold">Joined Since {{ myself.createdAt | moment('MMMM Do YYYY') }}</h4>
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
          >Basic Information</a
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
          >Documentations</a
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
          >Change Password</a
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
          >Edit Profile</a
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
          >Edit Social</a
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
        <div
          class="px-2"
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
        >
          <section class="bg-blueGray-50">
            <div class="w-full lg:w-full px-4 mt-6">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  shadow-lg
                  rounded-lg
                  bg-blueGray-100
                  border-0
                "
              >
              
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form>
                    <h6
                      class="
                        text-blueGray-400 text-lg
                        mt-3
                        mb-6
                        font-bold
                        uppercase
                      "
                    >
                      Basic Information
                    </h6>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Enter User Name"
                          />
                         
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="User Email ID"
                            v-model="myself.email"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Business Name
                          </label>
                          <input
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Business Name"
                            v-model="myself.business_name"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Business Mail
                          </label>
                          <input
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Business Mail"
                            v-model="myself.business_email"
                          />
                        </div>
                      </div>
                    </div>

                    <hr class="mt-6 border-b-1 border-blueGray-300" />

                    <h6
                      class="
                        text-blueGray-400 text-sm
                        mt-3
                        mb-6
                        font-bold
                        uppercase
                      "
                    >
                      Contact Information
                    </h6>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Address
                          </label>
                          <textarea
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            rows="4"
                            placeholder="Address"
                            v-model="myself.address"
                          ></textarea>
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            City
                          </label>
                          <input
                            type="email"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            Placeholder="City"
                            v-model="myself.city"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            Placeholder="Country"
                            v-model="myself.country"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="
                              block
                              uppercase
                              text-blueGray-600 text-xs
                              font-bold
                              mb-2
                            "
                            htmlfor="grid-password"
                          >
                            Postal Code
                          </label>
                          <input
                            type="text"
                            class="
                              border-0
                              px-3
                              py-3
                              placeholder-blueGray-300
                              text-blueGray-600
                              bg-white
                              rounded
                              text-sm
                              shadow
                              focus:outline-none focus:ring
                              w-full
                              ease-linear
                              transition-all
                              duration-150
                            "
                            placeholder="Code"
                            v-model="myself.code"
                          />
                        </div>
                      </div>
                    </div>

                    <hr class="mt-6 border-b-1 border-blueGray-300 mb-4" />

                    <div class="w-full item-center justify-center flex">
                      <center>
                        <button
                        @click="Onsave()"
                          class="
                            bg-green-500
                            text-white
                            active:bg-blue-600
                            font-bold
                            uppercase
                            text-xs
                            px-4
                            py-2
                            rounded
                            shadow
                            hover:shadow-md
                            outline-none
                            focus:outline-none
                            mr-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          type="button"
                        >
                          Save
                        </button>
                        <button
                          class="
                            bg-red-500
                            text-white
                            active:bg-red-600
                            font-bold
                            uppercase
                            text-xs
                            px-4
                            py-2
                            rounded
                            shadow
                            hover:shadow-md
                            outline-none
                            focus:outline-none
                            mr-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          type="button"
                        >
                          Cancel
                        </button>
                         <button
                          class="
                            bg-blue-500
                            text-white
                            active:bg-red-600
                            font-bold
                            uppercase
                            text-xs
                            px-4
                            py-2
                            rounded
                            shadow
                            hover:shadow-md
                            outline-none
                            focus:outline-none
                            mr-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          type="button"
                        >
                          Edit
                        </button>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!------------------------------------Document----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 2, block: openTab === 3 }"
        >
          <div class="px-6">
            <table class="min-w-full table-auto">
              <thead class="justify-between">
                <tr class="bg-gray-800">
                  <th class="px-16 py-2">
                    <span class="text-gray-300"></span>
                  </th>
                  <th class="px-16 py-2">
                    <span class="text-gray-300">Name</span>
                  </th>
                  <th class="px-16 py-2">
                    <span class="text-gray-300">Invitation</span>
                  </th>
                  <th class="px-16 py-2">
                    <span class="text-gray-300">Date</span>
                  </th>

                  <th class="px-16 py-2">
                    <span class="text-gray-300">Time</span>
                  </th>

                  <th class="px-16 py-2">
                    <span class="text-gray-300">Status</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-200">
                <tr class="bg-white border-4 border-gray-200">
                  <td class="px-16 py-2 flex flex-row items-center">
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/men/30.jpg"
                      alt=""
                    />
                  </td>
                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Dean Lynch</span
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
                    >
                      Open Link
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <span>05/06/2020</span>
                  </td>
                  <td class="px-16 py-2">
                    <span>10:00</span>
                  </td>

                  <td class="px-16 py-2">
                    <span class="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h5"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr class="bg-white border-4 border-gray-200">
                  <td class="px-16 py-2 flex flex-row items-center">
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt=""
                    />
                  </td>
                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Ralph Barnes</span
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
                    >
                      Open Link
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <span>05/06/2020</span>
                  </td>
                  <td class="px-16 py-2">
                    <span>12:15</span>
                  </td>

                  <td class="px-16 py-2">
                    <span class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr class="bg-white border-4 border-gray-200">
                  <td class="px-16 py-2 flex flex-row items-center">
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      src="https://randomuser.me/api/portraits/men/38.jpg"
                      alt=""
                    />
                  </td>
                  <td>
                    <span class="text-center ml-2 font-semibold"
                      >Brett Castillo</span
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
                    >
                      Open Link
                    </button>
                  </td>
                  <td class="px-16 py-2">
                    <span>05/06/2020</span>
                  </td>
                  <td class="px-16 py-2">
                    <span>08:35</span>
                  </td>

                  <td class="px-16 py-2">
                    <span class="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!------------------------------------Change Password----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
        >
          <PasswordChange/>
         
        </div>
     
       <!------------------------------------Edit Profile----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
        >
          <ProfileEdit/>
         
        </div>
         <!------------------------------------Edit Social Links----------------------------->
        <div
          class="px-4 pt-4"
          v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
        >
         
          <SocialContacts/>
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
  computed:{
    myself(){
      return this.$store.state.user
    }

  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    Onsave(){

    }
  },
};
</script>

<style>
</style>
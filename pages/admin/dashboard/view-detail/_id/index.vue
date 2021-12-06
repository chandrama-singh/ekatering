<template>
<div>
  <div v-if="caterer" class="container mx-auto">
    <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
                <div class="lg:w-1/2">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">{{caterer.business_name}}</h2>
                    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{caterer.business_email}}</h2>

                    <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                        Hi I am  <a class="font-bold text-indigo-600 dark:text-indigo-400" href="#">{{caterer.fullName}}</a> , {{caterer.bio}}
                    </p>

                    <div class="flex items-center mt-6 -mx-2">
                        <a class="mx-2" :href="caterer.twitter" aria-label="Twitter">
                            <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/>
                            </svg>
                        </a>

                        <a class="mx-2" :href="caterer.facebook" aria-label="Facebook">
                            <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/>
                            </svg>
                        </a>

                        <a class="mx-2" :href="caterer.instagram" aria-label="Instagram">
                            <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
                            </svg>
                        </a>

                    </div>
                </div>

                <div class="mt-8 lg:mt-0 lg:w-1/2">
                    <div class="flex items-center justify-center lg:justify-end">
                        <div v-if="caterer.photo" class="max-w-lg">
                            <img class="object-cover object-center w-full h-64 rounded-md shadow" :src="caterer.photo" alt="photo">
                        </div>
                         <div v-else class="max-w-lg">
                            <img class="object-cover object-center w-full h-64 rounded-md shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<div class="bg-white shadow overflow-hidden sm:rounded-lg my-20">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Applicant Information
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Personal details and application.
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{caterer.fullName}}
        </dd>
      </div>
      <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Application for
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          e-Katering
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{caterer.email}}
        </dd>
      </div>

       <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Mobile
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{caterer.mobile}}
        </dd>
      </div>
       <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Whatsapp
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{caterer.whatsapp}}
        </dd>
      </div>

      <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Address
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <div v-if="caterer.address" class="flex flex-col justify-start">
           <p>
             {{caterer.address.address_line_1}},  {{caterer.address.address_line_2}}
           </p>

           <p>
             {{caterer.address.town}},  {{caterer.address.country}}
           </p>

           <p>
             {{caterer.address.postcode}}
           </p>
          </div>
        </dd>
      </div>

        <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          FHRS Next Inspection Due Date
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <div class="flex flex-col justify-start">
           <p>
            {{caterer.fhrs_date}}
           </p>
          </div>
        </dd>
      </div>


      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Documents
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul v-if="caterer.documents" role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 flex-1 w-0 truncate">
               Address Proof
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a :href="caterer.documents.address_proof" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
            <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 flex-1 w-0 truncate">
                  Food Registration Letter
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a :href="caterer.documents.food_registration_letter" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
             <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 flex-1 w-0 truncate">
                  FHRS Letter
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a :href="caterer.documents.fhrs_letter" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="pb-12 mb-20 bg-gray-50">
  <div v-if="caterer.isVerified==false" class="container px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
     <div v-if="caterer.status=='DECLINED'" class="container px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h3 class="text-xl font-extrabold tracking-tight text-gray-900 leading-9 sm:text-2xl sm:leading-10"> This application  is {{caterer.status}} <br> <span v-if="caterer.isVerified" class="text-indigo-600">Registration is Already Verified</span><span v-else class="text-indigo-600">Registration is Declined</span> </h3>
    </div>
    <div v-else class="container px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h3 class="text-xl font-extrabold tracking-tight text-gray-900 leading-9 sm:text-2xl sm:leading-10"> Verify or Decline this registration? <br> <span class="text-indigo-600">Mention the reson in remark field.</span> </h3>
    <div class="text-lg w-1/3">
      <label for="message" class="text-lg font-medium text-gray-900 block mb-2">Your remark</label>
<textarea v-model="remark" id="rmark" name="remark" rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Leave reasion for decline..."></textarea>

    </div>
    <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex shadow rounded-md">

    <button @click="verifyRegistration()" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">
       Verify
    </button>
        </div>
        <div class="inline-flex ml-3 shadow rounded-md">

    <button @click="declineRegistration()" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
        Decline!
    </button>
        </div>
      </div>
  </div>



    </div>


     <div v-else class="container px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h3 class="text-xl font-extrabold tracking-tight text-gray-900 leading-9 sm:text-2xl sm:leading-10"> This application  is {{caterer.status}} <br> <span v-if="caterer.isVerified" class="text-indigo-600">Registration is Already Verified</span><span v-else class="text-indigo-600">Registration is not Verified</span> </h3>
    </div>
  </div>


  </div>
  </div>
</template>

<script>
 import {
    GET_CATERER_BY_ID, VERIFY_CATERER, DECLINE_CATERER

  } from "@/graphql/query";
export default {
   layout:'admin',
   //middleware: 'authAdmin',
   data() {
      return {
        remark:'',
        message: "",
        showAlert: false,
        type: "",
        error: null,
        loading:false,
      }
   },

    apollo: {
      caterer: {
        query: GET_CATERER_BY_ID,
        variables() {
          return {
            id: this.$route.params.id
          };
        },
        error(error) {
          console.log(error);
        }
      }
    },
     methods: {

      reloadCaterer() {
        this.$apollo.queries.caterer.refetch();
      },
       goCatererList(){
         //if you want to send any data into server before redirection then you can do it here
        this.$router.push("/admin/caterers");
      },


      async verifyRegistration() {
        this.loading = true;

        try {
          const {data} = await this.$apollo.mutate({
            mutation:  VERIFY_CATERER,
            variables: {
              remark: this.remark,
              id:this.$route.params.id
            },
          })
          console.log(data)
          this.refetchData();
        } catch (error) {
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
           console.log(error);
        }
           this.loading = false;
      },

         async declineRegistration() {
        this.loading = true;

        try {
          const {data} = await this.$apollo.mutate({
            mutation:  DECLINE_CATERER,
            variables: {
              remark: this.remark,
              id:this.$route.params.id
            },
          })
          console.log(data)
          this.refetchData();
        } catch (error) {
          this.message = error.message;
          this.showAlert = true;
          this.type = "danger";
           console.log(error);
        }

        this.loading = false;
      },
       refetchData() {
        this.$apollo.queries.caterer.refetch()
      }

     }

}
</script>

<style>

</style>

<template>
  <div>
    <div class="bg-white p-2 border-b border-gray-300 pr-4 flex items-center justify-between">
      <div class="flex items-center">
        <t-button to="/admin/payments/" type="button" variant="secoundry" class="py-3 border-r focus:ring-0">
          <span class="fas fa-arrow-left"> Go Back</span>
        </t-button>
        <h2 class="text-lg font-semibold ml-4">Payment Detail</h2>
      </div>
    </div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else class="container px-5 py-8 mx-auto ">
      <div class="lg:w-2/3 w-full mx-auto overflow-auto bg-white mb-4 p-3 rounded">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">Payment Info</h1>
        <table class="table-auto w-full text-left whitespace-no-wrap  font-bold text-gray-600">
          <thead>
            <tr>
              <th
                class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Title</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Value</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">Payment ID</td>
              <td class="px-4 py-3">{{payment.id}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Amount</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.amount}}</td>
            </tr>
             <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Date</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{ payment.createdAt | moment("dddd, MMMM Do YYYY") }}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Payment Status</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.status}}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto bg-white mb-4 p-3 rounded">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">package Info</h1>
        <table class="table-auto w-full text-left whitespace-no-wrap font-bold text-gray-600">
          <thead>
            <tr>
              <th
                class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Title</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Value</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">Title</td>
              <td class="px-4 py-3">{{payment.package.title}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Description</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.package.description}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Price</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">Rs. {{payment.package.price}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">ActiveIncome</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">Rs. {{payment.package.activeIncome}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">PassiveIncome</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">Rs. {{payment.package.passiveIncome}}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto bg-white mb-4 p-3 rounded">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">User Info</h1>
        <table class="table-auto w-full text-left whitespace-no-wrap  bg-white font-bold text-gray-600">
          <thead>
            <tr>
              <th
                class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Title</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">Name</td>
              <td class="px-4 py-3">{{payment.user.name}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Email</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.user.email}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Mobile</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.user.mobile}}</td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Location</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">{{payment.user.location}}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    GET_PAYMENT_BY_ID
  } from '@/graphql/query'


  export default {
    layout: "default",
    middleware: 'authUser',
    data() {
      return {


      }
    },
    apollo: {
      payment: {
        query: GET_PAYMENT_BY_ID,
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

    }
  };

</script>

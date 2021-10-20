<template>
  <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
    <!-- Main content header -->
    <div
      class="
        flex flex-col
        items-start
        justify-between
        pb-6
        space-y-4
        border-b
        lg:items-center lg:space-y-0 lg:flex-row
      "
    >
      <h1 class="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
    </div>

    <!-- Start Content -->
    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      <template>
        <div
          class="
            p-4
            transition-shadow
            bg-gradient-to-r from-purple-600 to-indigo-300
            border
            rounded-lg
            shadow-sm
            hover:shadow-lg
          "
        >
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-50"
                >Total Sales:</span
              >
              <span class="text-lg text-white font-semibold"> €1,00,000</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-euro-sign"></i>
            </div>
          </div>
        </div>

        <div
          class="
            p-4
            transition-shadow
            bg-gradient-to-r from-purple-600 to-indigo-300
            border
            rounded-lg
            shadow-sm
            hover:shadow-lg
          "
        >
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-50"
                >Total Products:</span
              >
              <span class="text-lg text-white font-semibold">381</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-pizza-slice"></i>
            </div>
          </div>
        </div>

        <div
          class="
            p-4
            transition-shadow
            bg-gradient-to-r from-purple-600 to-indigo-300
            border
            rounded-lg
            shadow-sm
            hover:shadow-lg
          "
        >
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-50">Total Categories:</span>
              <span class="text-lg text-white font-semibold">100</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-directions"></i>
            </div>
          </div>
        </div>

        <div
          class="
            p-4
            transition-shadow
            bg-gradient-to-r from-purple-600 to-indigo-300
            border
            rounded-lg
            shadow-sm
            hover:shadow-lg
          "
        >
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-50">Total customer:</span>
              <span class="text-lg text-white font-semibold">400</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Table see (https://tailwindui.com/components/application-ui/lists/tables) -->
    <h3 class="mt-6 text-xl">Recent Payments</h3>
     <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Customer Name
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Email
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Product
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Payment Date
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Statements
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      demo@mail.com
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 font-semibold whitespace-no-wrap">
                      Product Title
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">20/12/2021</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-green-900
                        leading-tight
                      "
                    >
                      <span
                        aria-hidden
                        class="
                          absolute
                          inset-0
                          bg-gray-400
                          cursor-pointer
                          opacity-50
                          rounded-full
                        "
                      ></span>
                      <span class="relative cursor-pointer">View</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      demo@mail.com
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 font-semibold whitespace-no-wrap">
                      Product Title
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">20/12/2021</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-green-900
                        leading-tight
                      "
                    >
                      <span
                        aria-hidden
                        class="
                          absolute
                          inset-0
                          bg-gray-400
                          cursor-pointer
                          opacity-50
                          rounded-full
                        "
                      ></span>
                      <span class="relative cursor-pointer">View</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="
                px-5
                py-5
                bg-white
                border-t
                flex flex-col
                xs:flex-row
                items-center
                xs:justify-between
              "
            >
              <!-- <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span> -->
              
               <Nuxt-Link to="/caterers/payments"> <button
                  class="
                    text-sm
                    bg-green-400
                    hover:bg-green-700
                    text-gray-800
                    font-semibold
                    py-2
                    px-4
                    rounded-l
                  "
                >
                  See More >
                </button></Nuxt-Link>
                
              </div>
            </div>
          </div>
  </main>
</template>

<script>
export default {
  layout: "user",
};
</script>

<style>
</style>

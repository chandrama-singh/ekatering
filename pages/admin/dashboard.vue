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
                >Total number of Registered caterers:</span
              >
              <span class="text-lg text-white font-semibold">100</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-utensils"></i>
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
                >Total Training courses purchased:</span
              >
              <span class="text-lg text-white font-semibold">100</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-user-graduate"></i>
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
              <span class="text-gray-50">Total consultations purchased:</span>
              <span class="text-lg text-white font-semibold">100</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-hands-helping"></i>
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
              <span class="text-gray-50">Total customer users:</span>
              <span class="text-lg text-white font-semibold">100</span>
            </div>
            <div class="bg-gray-50 rounded-full p-4">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Table see (https://tailwindui.com/components/application-ui/lists/tables) -->
    <h3 class="mt-6 text-xl font-bold">Users</h3>
    <div class="flex flex-col mt-6">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              border-b border-gray-200
              rounded-md
              shadow-md
            "
          >
             <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Registered at
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-gray-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">View Profile</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">Delete</span>
                                    </span>
                                   
                                </td>
                            </tr>

                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-gray-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">View Profile</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">Delete</span>
                                    </span>
                                   
                                </td>
                            </tr>

                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-gray-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">View Profile</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">Delete</span>
                                    </span>
                                   
                                </td>
                            </tr>

                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Vera Carpenter
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-gray-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">View Profile</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-400 cursor-pointer opacity-50 rounded-full"></span>
                                        <span class="relative cursor-pointer">Delete</span>
                                    </span>
                                   
                                </td>
                            </tr>
   
                            
                        </tbody>
                    </table>
          </div>
        </div>
      </div>
    </div>
    <Nuxt-Link to="/admin/catererslist"><button class="mt-4 bg-green-400 px-2 py-1">See More ></button></Nuxt-Link>
  </main>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style>
</style>

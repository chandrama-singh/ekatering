<template>
  <div class="min-h-screen flex justify-center items-center py-20">
    <div
      class="
        md:px-4 md:grid md:grid-cols-2
        lg:grid-cols-2
        gap-5
        space-y-4
        md:space-y-0
      "
    >
      <div
        class="
          max-w-sm
          bg-white
          px-6
          pt-6
          pb-2
          rounded-xl
          shadow-lg
          transform
          hover:scale-105
          transition
          duration-500
        "
      >
        <h3 class="mb-3 text-xl font-bold text-indigo-600">Level 1</h3>
        <div class="relative">
          <img
            class="w-full rounded-xl"
            src="~/assets/level-1.jpg"
            alt="Colors"
          />
        </div>
        <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          Food Allergen for Caterers and Private Chefs Level 1
        </h1>
        <div class="my-4">
          <!-- <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>1:34:23 Minutes</p>
        </div> -->
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>6 Modules Total</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p>TEST - Multiple Choice</p>
          </div>
          <Nuxt-Link to="/caterers/my-training/level-1"
          >
            <button
              class="
                mt-4
                text-xl
                w-full
                text-white
                bg-indigo-600
                py-2
                rounded-xl
                shadow-lg
              "
            >
              Start
            </button></Nuxt-Link
          >
        </div>
      </div>
      <div
        class="
          max-w-sm
          bg-white
          px-6
          pt-6
          pb-2
          rounded-xl
          shadow-lg
          transform
          hover:scale-105
          transition
          duration-500
        "
      >
        <h3 class="mb-3 text-xl font-bold text-indigo-600">Level 2</h3>
        <div class="relative">
          <img
            class="w-full rounded-xl"
            src="~/assets/level-2.jpg"
            alt="Colors"
          />
        </div>
        <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          Food Safety for Caterers and Private Chefs - Level 2
        </h1>
        <div class="my-4">
          <!-- <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>1:34:23 Minutes</p>
        </div> -->
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>7 Modules Total</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p>TEST - Multiple Choice</p>
          </div>
          <Nuxt-Link to="/caterers/my-training/level-2"
            ><button
              class="
                mt-4
                text-xl
                w-full
                text-white
                bg-indigo-600
                py-2
                rounded-xl
                shadow-lg
              "
            >
              Start
            </button></Nuxt-Link
          >
        </div>
      </div>
    </div>
  </div>

  <!-- <section class="py-10 bg-white">
    <div class="flex items-center justify-center px-4">
      <div
        class="
          max-w-4xl
          bg-blue-50
          w-full
          rounded-lg
          shadow-xl
          border-2 border-purple-400
        "
      >
        <div class="p-4 border-b flex justify-between bg-purple-500 text-white">
          <h2 class="text-2xl font-semibold">My Training</h2>
        </div>
        <div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              Food Allergen for Caterers Private Chefs Level 1
            </p>
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">Purchase 7th June 2021</p>
          </div>
          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              <span class="font-bold"> Module 1</span>
              <br /><span>Lorem ipsum</span>
            </p>
            <p class="text-gray-600 text-center">Duration</p>
          </div>

          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              <span class="font-bold">Module 2</span>
              <br /><span>Lorem ipsum</span>
            </p>
            <p class="text-gray-600 text-center">Duration</p>
          </div>

          <div
            class="
              md:grid md:grid-cols-2
              hover:bg-gray-50
              md:space-y-0
              space-y-1
              p-4
              border-b
            "
          >
            <p class="text-gray-600">
              <span class="font-bold">Module 3</span>
              <br /><span>Lorem ipsum</span>
            </p>
            <p class="text-gray-600 text-center">Duration</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  layout: "user",
};

</script>

<style>
</style>
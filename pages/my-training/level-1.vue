<template>
  <section class="overflow-hidden">
    <!-- <img
      class="imgtop absolute mx-auto right-0 -mt-40 z-10"
      src="@/assets/h3.png"
      alt=""
    /> -->
    <section class="text-gray-700 bg-blue-50">
      <div class="container px-5 py-14 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              text-center
              title-font
              text-gray-900
              mb-4
            "
          >
            Training level-1
          </h1>
          <!-- <p class="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
            He legged it plastered cheeky loo what a plonker some dodgy chav a
            barney wellies, gutted mate quaint.
          </p> -->
        </div>
        <div class="w-full flex">
       <!-------------------------SideBar------------------>
        <div class="flex flex-wrap w-2/5 sm:mx-auto sm:mb-2 px-2 ">
          <div class="w-full">
            <details  v-on:click="toggleTabs(1)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 1,
            'text-white bg-gray-600': openTab === 1,
          }"
           class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 1
              </summary>
              
            </details>
            <details  v-on:click="toggleTabs(2)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 2,
            'text-white bg-gray-600': openTab === 2,
          }"
           class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 2
              </summary>
              
            </details>
            <details  v-on:click="toggleTabs(3)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 3,
            'text-white bg-gray-600': openTab === 3,
          }"
           class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 3
              </summary>
            </details>
          </div>
          <div class="w-full">
            <details  v-on:click="toggleTabs(4)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 4,
            'text-white bg-gray-600': openTab === 4,
          }"
             class="mb-4 cursor-pointer rounded-md" >
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 4
              </summary>

            </details>
            <details  v-on:click="toggleTabs(5)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 5,
            'text-white bg-gray-600': openTab === 5,
          }"
             class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 5
              </summary>

            </details>
            <details  v-on:click="toggleTabs(6)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 6,
            'text-white bg-gray-600': openTab === 6,
          }"
           class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Module 6
              </summary>
            </details>
            <details  v-on:click="toggleTabs(7)"
          v-bind:class="{
            ' bg-gray-200': openTab !== 7,
            'text-white bg-gray-600': openTab === 7,
          }"
           class="mb-4 cursor-pointer rounded-md">
              <summary class="font-semibold  rounded-md py-2 px-4">
                Test
              </summary>
            </details>
          </div>
        </div>
         <!-------------------------Video------------------>
         <div class="flex flex-wrap w-3/5 sm:mx-auto sm:mb-2 px-4 ">
          <!----------------1-------------------->
          <span class=" bg-transparent w-full"  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%201/story_html5.html"
                  width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------2-------------------->
              <span class=" w-full"  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%202/story_html5.html"
                  width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------3-------------------->
           <span class=" w-full"  v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%203/story_html5.html"
                  width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------4-------------------->
              <span class=" w-full"  v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%204/story_html5.html"
                 width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------5-------------------->
               <span class=" w-full"  v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%205/story_html5.html"
                 width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------6-------------------->
               <span class=" w-full"  v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Module%206/story_html5.html"
                 width="100%"
                  height="500"
                >
                </iframe>
              </span>
              <!----------------7-------------------->
               <span class=" w-full"  v-bind:class="{ hidden: openTab !== 7, block: openTab === 7 }">
                <iframe
                  src="https://training.ekatering.co.uk/level-1/Test/story_html5.html"
                 width="100%"
                  height="500"
                >
                </iframe>
              </span>
         </div>
         </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: "default",
   data() {
    return {
      openTab: 1,
    };
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

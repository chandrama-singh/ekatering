<template>
  <section>
      <div class="w-full flex justify-center max-h-screen">
        <div class="w-full">
            <div class="w-full flex flex-col md:flex-row  overflow-hidden shadow-xl">
                <div class="w-full md:w-1/5 h-auto max-h-screen border-r-2">
                    <div class="bg-gray-300 w-full h-full sm:flex md:block">
                        <button id="button-1" v-on:click="toggleTabs(1)" v-bind:class="{' bg-purple-200': openTab !== 1, 'text-white bg-purple-600': openTab === 1}"  class="w-full border-b-2 flex justify-between items-center px-5 py-2 hover:bg-purple-500 hover:text-white cursor-pointer focus:outline-none">
                            <span>New Category</span>
                        </button>

                    </div>
                </div>


                <div class="w-full md:w-4/5 max-h-screen">
                    <div class="w-full px-5 py-3 max-h-screen overflow-y-auto">
                      <!--------------------------Products--------------------------------->
                        <div class="" v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                          <section class="container-fluid mx-auto font-mono" >
  <div class="w-full mb-8 overflow-hidden ">
    <div class="w-full overflow-y-auto">
            <div class="w-full px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                <div class="flex-auto">
                  <h4 class="text-xl font-semibold">Basic Info</h4>

                  <div class="relative w-full mb-3 mt-8">
                    <label class="block  text-blueGray-600 text-xs font-bold mb-2" for="full-name">Title</label>
                    <input v-model="formData.title" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name">
                  </div>
                  <div class="relative w-full mb-3">
                    <label class="block  text-blueGray-600 text-xs font-bold mb-2" for="email">Description</label>
                    <textarea v-model="formData.description" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Description">
                    </textarea>
                  </div>

                  <div class="text-center mt-6">
                     <button  class="bg-red-800 text-white active:bg-red-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Back
                    </button>
                    <button @click="onSubmit" class="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  </div>
</section>
                        </div>
                        <!--------------------------Categories--------------------------------->

                    </div>
                </div>

            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
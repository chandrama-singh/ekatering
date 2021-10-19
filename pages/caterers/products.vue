<template>
  <div>
<!-- Product Head Section -->
<div class="min-w-screen  bg-gray-200 px-5 pb-5 pt-2">
    <div class="py-3 px-5 bg-white rounded shadow-xl">
        <div class="-mx-1">
            <ul class="flex w-full flex-wrap items-center h-10">
                <li class="block relative">
                    <h2 href="#" class="flex items-center font-bold">
                        Manage Products
                      
                    </h2>
                   
                <li class="block relative">
                    <a href="#" class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-purple-100">
                        
                        Add new product
                    </a>
                </li>
                
                    <div class="">
            <input type="text" name="search" placeholder="Search...">
            <span class="">
                <button class="bg-purple-600 text-white px-2 " type="submit">Search</button>
            </span>
        </div>
                    
                
                
               
            </ul>
        </div>
    </div>
</div>
      


    <div class="h-screen w-full flex">
      <!-- main -->
      <main class="w-full overflow-y-auto">
        
        <div class="px-10 grid grid-cols-4 gap-4">
          <div
            class="
              col-span-4
              sm:col-span-4
              md:col-span-2
              lg:col-span-1
              xl:col-span-1
              flex flex-col
              items-center
            "
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->

          <div
            class="
              col-span-4
              sm:col-span-4
              md:col-span-2
              lg:col-span-1
              xl:col-span-1
              flex flex-col
              items-center
            "
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->

          <div
            class="
              col-span-4
              sm:col-span-4
              md:col-span-2
              lg:col-span-1
              xl:col-span-1
              flex flex-col
              items-center
            "
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->

          <div
            class="
              col-span-4
              sm:col-span-4
              md:col-span-2
              lg:col-span-1
              xl:col-span-1
              flex flex-col
              items-center
            "
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->

          <div
            class="
              col-span-4
              sm:col-span-4
              md:col-span-2
              lg:col-span-1
              xl:col-span-1
              flex flex-col
              items-center
            "
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
        </div>
      </main>
    </div>
    <div class="flex justify-center gap-4 mb-2">
      <button class="bg-gray-400 py-1 px-2">Prev</button>
      <button class="bg-gray-400 py-1 px-2">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "user",
};
</script>

<style>
</style>
<template>
   <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden shadow-lg">
                    <div class="w-full overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr
                            class="
                              text-md
                              font-semibold
                              tracking-wide
                              text-left text-white
                              bg-gray-800
                              border-b border-gray-600
                            "
                          >
                            <th class="px-4 py-2">Product ID</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">Category</th>
                            <th class="px-4 py-2">Price</th>
                            <!-- <th class="px-4 py-2">Product Type</th> -->
                            <th class="px-4 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>

                            <td class="px-4 py-3 text-sm border">Acceptable</td>

                            <td class="px-4 py-3 text-sm border">
                               <button @click.stop.prevent="ProductEdit()"
                    class="
                      bg-blue-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                              <button
                    class="
                      bg-blue-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div
                                  class="
                                    relative
                                    w-8
                                    h-8
                                    mr-3
                                    rounded-full
                                    md:block
                                  "
                                >
                                  <img
                                    class="
                                      object-cover
                                      w-full
                                      h-full
                                      rounded-full
                                    "
                                    src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    class="
                                      absolute
                                      inset-0
                                      rounded-full
                                      shadow-inner
                                    "
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <!-- <p class="text-xs text-gray-600">Developer</p> -->
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-xs border">
                              <span
                                class="
                                  px-2
                                  py-1
                                  font-semibold
                                  leading-tight
                                  text-green-700
                                  bg-green-100
                                  rounded-sm
                                "
                              >
                                Acceptable
                              </span>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">
                              22
                            </td>

                            <td class="px-4 py-3 text-sm border">
                               <button
                    class="
                      bg-blue-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    class="
                      bg-red-600
                      text-white
                      
                      active:bg-blue-600
                      font-bold
                      text-sm
                      px-2
                      py-2
                      rounded
                      shadow
                      hover:shadow-md
                      outline-none
                      focus:outline-none
                      
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                  >
                    Delete
                  </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
<template>
  <section>
    <div
      class="
        bg-white
        p-2
        border-b border-gray-300
        pr-4
        flex
        items-center
        justify-between
      "
    >
      <div class="flex items-center">
        <t-button
          to="/caterers/products/"
          type="button"
          variant="secoundry"
          class="py-3 border-r focus:ring-0 focus:bg-green-400"
        >
          <span class="fas fa-arrow-left"> Go Back</span>
        </t-button>
        <h2 class="text-lg font-semibold mx-6">Add New Product</h2>
      </div>
    </div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-xl">
          <div class="w-full">
            <div class="w-full px-5 py-3">
              <!--------------------------Products--------------------------------->
              <div class="">
                <section class="container-fluid mx-auto font-mono">
                  <div class="w-full mb-8 overflow-hidden">
                    <div class="w-full overflow-y-auto">
                      <div class="w-full px-4">
                        <div
                          class="
                            relative
                            flex flex-col
                            min-w-0
                            break-words
                            w-full
                            mb-4
                          "
                        >
                          <div class="flex-auto py-2 rounded-lg">
                            <div class="flex flex-col px-6 bg-gray-50 text-sm">
                              <!-- component -->

                              <!------------------------Info Value-------------------------------->
                              <div v-if="step == 1">
                                <!-- component -->
                              <div class="w-full py-6">
                                <div class="flex">
                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Basic Detail
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-gray-200
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-gray-300
                                              py-1
                                              rounded
                                            "
                                            style="width: 100%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-gray-400
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Images
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-gray-200
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-gray-300
                                              py-1
                                              rounded
                                            "
                                            style="width: 33%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-white
                                          border-2 border-gray-200
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="
                                            text-center text-gray-600
                                            w-full
                                          "
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Set Pricing
                                    </div>
                                  </div>


                                </div>
                              </div>
                              <!-- component -->
                                <div
                                  class="
                                    flex flex-col
                                    sm:flex-row
                                    items-center
                                    mb-2
                                    sm:space-x-5
                                    py-4
                                  "
                                >
                                  <div class="w-full sm:w-1/2">
                                    <p class="mb-2 font-semibold text-gray-700">
                                      Product Name
                                    </p>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Product Name"
                                      class="
                                        w-full
                                        p-1
                                        px-2
                                        bg-white
                                        border border-gray-200
                                        rounded
                                        shadow-sm
                                        appearance-none
                                      "
                                      id="product-name"
                                      v-model="formData.name"
                                    />
                                  </div>
                                  <div
                                    v-if="categories"
                                    class="w-full sm:w-1/2 mt-2 sm:mt-0"
                                  >
                                    <p class="mb-2 font-semibold text-gray-700">
                                      Product Category
                                    </p>
                                    <multiselect
                                      v-model="selectedCategory"
                                      class="mb-3"
                                      track-by="title"
                                      label="title"
                                      placeholder="Select one"
                                      :options="categories"
                                      :searchable="false"
                                      :allow-empty="false"
                                    >
                                    </multiselect>
                                  </div>
                                </div>
                                 <div
                                  class="
                                    flex flex-col
                                    sm:flex-row
                                    items-center
                                    mb-2
                                    sm:space-x-5
                                    py-4
                                  "
                                >
                                <div class="w-full sm:w-1/2">

                                <p class="mb-1 font-semibold text-gray-700">
                                  Product Description (note all ingredients, food allergen)
                                </p>
<textarea name=""
                                  placeholder="Enter Product Description"
                                  class="
                                    py-6
                                    px-2
                                    mb-2
                                    bg-white
                                    border border-gray-200
                                    rounded
                                    shadow-sm
                                    w-full
                                  "
                                  id="product-description"
                                  v-model="formData.description">

                                
                                </textarea>
                                </div>
                                 <div
                                    v-if="activeCuisines"
                                    class="w-full sm:w-1/2 mt-2 sm:mt-0"
                                  >
                                    <p class="mb-2 font-semibold text-gray-700">
                                      Select Cuisine
                                    </p>
                                    <multiselect
                                      v-model="selectedCusine"
                                      class="mb-3"
                                      track-by="name"
                                      label="name"
                                      placeholder="Select one"
                                      :options="activeCuisines"
                                      :searchable="false"
                                      :allow-empty="false"
                                    >
                                    </multiselect>
                                  </div>

                                </div>
                                <!------------------------Buttons-------------------------------->
                                <div
                                  class="
                                    flex
                                    text-lg
                                    flex-row
                                    items-center
                                    justify-center
                                    p-4
                                    rounded-bl-lg rounded-br-lg
                                  "
                                >
                                  <button
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-purple-500
                                      rounded
                                    "
                                    @click="onSubmit"
                                  >
                                    Next
                                  </button>
                                </div>
                                <!------------------------Buttons END-------------------------------->
                              </div>
                              <!------------------------Info Value-------------------------------->
                              <!------------------------Banner -------------------------------->
                              <div v-if="step == 2">
                                <!-- component -->
                              <div class="w-full py-6">
                                <div class="flex">
                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Basic Detail
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-green-500
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-green-500
                                              py-1
                                              rounded
                                            "
                                            style="width: 100%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Images
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-gray-200
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-gray-300
                                              py-1
                                              rounded
                                            "
                                            style="width: 33%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-white
                                          border-2 border-gray-200
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="
                                            text-center text-gray-600
                                            w-full
                                          "
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Set Pricing
                                    </div>
                                  </div>


                                </div>
                              </div>
                              <!-- component -->
                                <p class="font-semibold text-gray-700">
                                  Product Banner
                                </p>
                                <div class="flex flex-wrap justify-center">
                                  <input
                                    type="file"
                                    ref="banner"
                                    accept="image/*"
                                    v-show="false"
                                    @change="previewBanner"
                                  />
                                  <div class="w-8/12 sm:w-6/12 px-4">
                                    <img
                                      v-if="bannerImage"
                                      alt="..."
                                      class="
                                        rounded
                                        max-w-full
                                        h-auto
                                        align-middle
                                        border-none
                                      "
                                      :src="bannerImage"
                                      @click="selectBanner"
                                    />
                                    <img
                                      v-else
                                      src="/noImage.jpg"
                                      alt="..."
                                      class="
                                        rounded
                                        max-w-full
                                        h-auto
                                        align-middle
                                        border-none
                                      "
                                      @click="selectBanner"
                                    />
                                    <p>Click to change banner</p>
                                  </div>
                                </div>
                                <!------------------------Multiple image upload-------------------------------->
                                <!-- scroll area -->
                                <p class="font-semibold text-gray-700">
                                  More Images
                                </p>
                                <section
                                  class="
                                    overflow-auto
                                    p-8
                                    w-full
                                    h-full
                                    flex flex-col
                                  "
                                >
                                  <header
                                    class="
                                      border-dashed border-2 border-gray-400
                                      py-12
                                      flex flex-col
                                      justify-center
                                      items-center
                                    "
                                  >
                                    <label
                                      class="
                                        w-64
                                        flex flex-col
                                        items-center
                                        px-4
                                        py-6
                                        bg-white
                                        rounded-md
                                        shadow-md
                                        tracking-wide
                                        uppercase
                                        border border-blue
                                        cursor-pointer
                                        hover:bg-purple-600 hover:text-white
                                        text-purple-600
                                        ease-linear
                                        transition-all
                                        duration-150
                                      "
                                      @click="selectProductImage"
                                    >
                                      <i
                                        class="fas fa-cloud-upload-alt fa-3x"
                                      ></i>
                                      <span
                                        class="mt-2 text-base leading-normal"
                                        >Select More Images</span
                                      >
                                    </label>
                                    <input
                                      ref="productImage"
                                      accept="image/*"
                                      type="file"
                                      v-show="false"
                                      @change="uploadImage"
                                    />
                                  </header>

                                  <h1
                                    class="
                                      pt-8
                                      pb-3
                                      font-semibold
                                      sm:text-lg
                                      text-gray-900
                                    "
                                  >
                                    Uploaded
                                  </h1>

                                  <ul
                                    id="gallery"
                                    class="flex  flex-wrap -m-1 justify-center"
                                  >
                                    <li
                                      v-for="(item, index) in productImage"
                                      :key="index"
                                      class="
                                        h-full

                                        text-center
                                        flex flex-wrap
                                        justify-center
                                        items-center
                                        m-4
                                      "
                                    >
                                       <img
                                        class=" w-32 relative"
                                        :src="item"
                                        alt="no data"
                                      />
                                      <img @click="removeImage(item)" class="absolute center z-20 w-12" src="@/assets/remove.svg"/>

                                    </li>
                                  </ul>
                                </section>

                                <!------------------------Buttons-------------------------------->
                                <div
                                  class="
                                    flex
                                    text-lg
                                    flex-row
                                    items-center
                                    justify-center
                                    p-4
                                    rounded-bl-lg rounded-br-lg
                                  "
                                >
                                  <button
                                    v-on:click="toggleTabs()"
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-red-500
                                      rounded
                                      mr-4
                                    "
                                  >
                                    Back
                                  </button>
                                  <button
                                    v-on:click="goToPrice()"
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-purple-500
                                      rounded
                                    "
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                              <!------------------------Buttons END-------------------------------->
                              <!------------------------Banner END-------------------------------->

                              <!------------------------Price -------------------------------->
                              <div v-if="step == 3">
                                   <!-- component -->
                              <div class="w-full py-6">
                                <div class="flex">
                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Basic Detail
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-green-500
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-green-500
                                              py-1
                                              rounded
                                            "
                                            style="width: 100%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="text-center text-white w-full"
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Add Images
                                    </div>
                                  </div>

                                  <div class="w-1/4">
                                    <div class="relative mb-2">
                                      <div
                                        class="
                                          absolute
                                          flex
                                          align-center
                                          items-center
                                          align-middle
                                          content-center
                                        "
                                        style="
                                          width: calc(100% - 2.5rem - 1rem);
                                          top: 50%;
                                          transform: translate(-50%, -50%);
                                        "
                                      >
                                        <div
                                          class="
                                            w-full
                                            bg-green-500
                                            rounded
                                            items-center
                                            align-middle align-center
                                            flex-1
                                          "
                                        >
                                          <div
                                            class="
                                              w-0
                                              bg-green-500
                                              py-1
                                              rounded
                                            "
                                            style="width: 33%"
                                          ></div>
                                        </div>
                                      </div>

                                      <div
                                        class="
                                          w-10
                                          h-10
                                          mx-auto
                                          bg-green-500
                                          border-2 border-gray-200
                                          rounded-full
                                          text-lg text-white
                                          flex
                                          items-center
                                        "
                                      >
                                        <span
                                          class="
                                            text-center text-gray-600
                                            w-full
                                          "
                                        >
                                          <svg
                                            class="w-full fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              class="heroicon-ui"
                                              d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      class="text-xs text-center md:text-base"
                                    >
                                      Set Pricing
                                    </div>
                                  </div>


                                </div>
                              </div>
                              <!-- component -->
                                <div
                                  class="
                                    flex flex-col
                                    sm:flex-row
                                    items-center
                                    mb-2
                                    sm:space-x-5
                                  "
                                >
                                  <div class="w-full sm:w-1/2">
                                    <p class="mb-2 font-semibold text-gray-700">
                                      MRP(£) optional Normal price
                                    </p>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="MRP"
                                      class="
                                        w-full
                                        p-1
                                        bg-white
                                        border border-gray-200
                                        rounded
                                        shadow-sm
                                        appearance-none
                                      "
                                      id="product-mrp"
                                      v-model="priceData.mrp"
                                    />
                                  </div>
                                  <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p class="mb-2 font-semibold text-gray-700">
                                      Product Price(£)- will be seen by customers
                                    </p>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Price"
                                      class="
                                        w-full
                                        p-1
                                        bg-white
                                        border border-gray-200
                                        rounded
                                        shadow-sm
                                        appearance-none
                                      "
                                      id="product-price"
                                      v-model="priceData.price"
                                    />
                                  </div>
                                </div>

                                <!-- Toggle option -->
                                <div class="flex justify-start p-4">
                                  <label
                                    for="toogleButton"
                                    class="flex items-center cursor-pointer"
                                  >
                                    <div class="px-2 text-xl font-bold">
                                      Will you deliver
                                    </div>
                                    <!-- toggle -->
                                   <t-toggle @change="changeWillDeliver" v-model="willDeliver"  />
                                  </label>
                                </div>
                                <!------------------------Buttons-------------------------------->
                                <div
                                  class="
                                    flex
                                    text-lg
                                    flex-row
                                    items-center
                                    justify-center
                                    p-4
                                    rounded-bl-lg rounded-br-lg
                                  "
                                >
                                  <button
                                    v-on:click="step == 2"
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-red-500
                                      rounded
                                      mr-4
                                    "
                                  >
                                    Back
                                  </button>
                                  <button
                                    v-on:click="updatePrice()"
                                    class="
                                      px-4
                                      py-2
                                      text-white
                                      bg-purple-500
                                      rounded
                                    "
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                              <!------------------------Buttons END-------------------------------->
                            </div>
                            <!------------------------Price END-------------------------------->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {
  GET_ALL_CATEGORY,
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT_BANNER,
  UPDATE_PRODUCT_IMAGES,
  UPDATE_PRODUCT_PRICE,
  GET_ALL_ACTIVE_CUSINE,
  REMOVE_PRODUCT_IMAGE,
  CHANGE_PRODUCT_WILLDELIVER
} from "@/graphql/query";
import Multiselect from "vue-multiselect";
export default {
  layout: "user",
  middleware: 'authUser',
  data() {
    return {
      openTab: 1,
      loading: false,
      message: null,
      showAlert: false,
      step: 1,
      selectedCategory: "",
      selectedCusine: "",
      willDeliver:null,
      product: { id: null, name: "" },
      type: null,
      formData: {
        name: "",
        description: "",
        category: "",
        cuisine:'',
        status: "DRAFT",

      },
      priceData: {
        price: 0,
        mrp: 0,
      },
      banner: "",
      productImage: [],

      productImageFile: [],
      bannerImage: "",
    };
  },
  components: { Multiselect },

  apollo: {
    categories: {
      query: GET_ALL_CATEGORY,
      error(error) {
        console.log(error);
      },
    },
    activeCuisines: {
      query: GET_ALL_ACTIVE_CUSINE,
      error(error) {
        console.log(error);
      },
    },
  },
  methods: {
    toggleTabs: function () {
      this.$parent.toggleTabs(1);
    },
    GoBack() {
      this.$rounter.push("/caterers/products");
    },
    selectBanner() {
      this.$refs.banner.click();
    },
    selectProductImage() {
      this.$refs.productImage.click();
    },

    async updateBanner() {
      console.log(this.banner);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_BANNER,
          variables: {
            file: this.banner,
            id: this.product.id,
          },
        });
        this.loading = false;

        console.log(res.data.result);
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    previewBanner(event) {
      this.banner = event.target.files[0];
      if (this.banner.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.bannerImage = URL.createObjectURL(this.banner);
        this.loading = true;
        this.updateBanner();
      }
    },
    uploadImage(event) {
      this.productImageFile = event.target.files[0];
      if (this.productImageFile.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        // this.bannerImage = URL.createObjectURL(this.banner);
        this.loading = true;
        this.uploadProduct();
      }
    },
    async uploadProduct() {
      console.log(this.productImageFile);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_IMAGES,
          variables: {
            file: this.productImageFile,
            id: this.product.id,
          },
        });
        this.loading = false;
        this.productImage.push(res.data.result);
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    async onSubmit() {
      this.loading = true;
      this.formData.category = this.selectedCategory.id;
      this.formData.cuisine = this.selectedCusine.id;
      // this.formData.price = parseInt(this.formData.price);
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_NEW_PRODUCT,
          variables: {
            data: this.formData,
          },
        });
        console.log(data);
        this.product = data.result;
        this.step = 2;
        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },

    async updatePrice() {
      this.loading = true;
      this.priceData.mrp = parseInt(this.priceData.mrp);
      this.priceData.price = parseInt(this.priceData.price);
      console.log(this.priceData);
      console.log(this.product.id);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT_PRICE,
          variables: {
            data: this.priceData,
            id: this.product.id,
          },
        });
        console.log(data);
        this.$toast.success("Product Added Successfully!");
 this.$router.push({ path: `/caterers/products/` })

        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },

     async changeWillDeliver() {
      this.loading = true;
      console.log(this.willDeliver);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: CHANGE_PRODUCT_WILLDELIVER,
          variables: {
            status: this.willDeliver,
            id: this.product.id,
          },
        });
        console.log(data);


        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },
      async removeImage(url){
        this.loading = true;
      console.log(this.willDeliver);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: REMOVE_PRODUCT_IMAGE,
          variables: {
            url: url,
             id: this.product.id,
          },
        });
        console.log(data);
        const index = this.productImage.indexOf(url);
        if (index > -1) {
          this.productImage.splice(index, 1);
        }

        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;

      },

    goToPrice(){
      this.step = 3;
    }
  },
};
</script>

<style>

.toggle-circle {
  top: 0.2rem;
  left: 0.25rem;
  transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
  transform: translateX(100%);
}
input:checked ~ .toggle-path {
  background-color: #81e6d9;
}
</style>

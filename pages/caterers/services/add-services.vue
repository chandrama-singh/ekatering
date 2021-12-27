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
          to="/caterers/services/"
          type="button"
          variant="secoundry"
          class="py-3 border-r focus:ring-0 focus:bg-green-400"
        >
          <span class="fas fa-arrow-left"> Go Back</span>
        </t-button>
        <h2 class="text-lg font-semibold mx-6">Add New Service</h2>
      </div>
    </div>
    <div class="w-full flex justify-center max-h-screen">
      <div class="w-full">
        <div class="w-full flex flex-col md:flex-row overflow-hidden shadow-xl">
          <div class="w-full">
            <div class="w-full px-5 py-3">
              <!--------------------------Services--------------------------------->
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
                                      Menu Title
                                    </p>
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Menu Name"
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
                                      id="service-name"
                                      v-model="formData.name"
                                    />
                                  </div>

                                </div>

                                <p class="mb-1 font-semibold text-gray-700">
                                  Description
                                </p>
                                <input
                                  type="textbox"
                                  name=""
                                  placeholder="Describe your service"
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
                                  id="service-description"
                                  v-model="formData.description"
                                />




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

                              </div>

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
                                 Upload Banner Image
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
                                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
                                    <p>Click on Image to change banner</p>
                                  </div>
                                </div>


                                <center>
                                <div
                                  class="
                                    sm:max-w-lg
                                    w-full
                                    p-10
                                    bg-white
                                    rounded-xl
                                    z-10
                                  "
                                >
                                  <div class="grid grid-cols-1 space-y-2 ">
                                    <label
                                      class="
                                        text-sm

                                        font-bold
                                        text-gray-500
                                        tracking-wide
                                      "
                                      >Upload Menu Details (PDF only)</label
                                    >
                                    <div
                                      class="
                                        flex
                                        items-center
                                        justify-center
                                        w-full
                                      "
                                    >
                                      <label
                                        class="
                                          flex flex-col
                                          rounded-lg
                                          border-4 border-dashed
                                          w-full
                                          h-60
                                          p-10
                                          group
                                          text-center
                                        "
                                      >
                                        <div
                                          class="
                                            h-full
                                            w-full
                                            text-center
                                            flex flex-col
                                            items-center
                                            justify-center
                                          "
                                        >
                                          <div
                                            class="
                                              flex flex-auto
                                              max-h-48
                                              w-2/5
                                              mx-auto
                                              -mt-10
                                            "
                                          >
                                            <img
                                             @click="selectCatalogue"
                                              class="
                                                has-mask
                                                h-36
                                                object-center
                                              "
                                              src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                              alt="freepik image"
                                            />
                                          </div>

                                        </div>
                                        <input
                                    type="file"
                                    ref="catalogue"
                                    accept="doc/*"
                                    hidden="true"
                                    v-show="false"
                                    @change="previewCatalogue"
                                  />
                                      </label>
                                    </div>
                                  </div>
                                  <p class="text-sm text-gray-300">
                                    <span
                                      >{{catalogueImage}}</span
                                    >
                                  </p>
                                  <div>
                                    <button
                                      @click="updateCatalogue"
                                      class="
                                        my-5
                                        w-full
                                        flex
                                        justify-center
                                        bg-blue-500
                                        text-gray-100
                                        p-4
                                        rounded-full
                                        tracking-wide
                                        font-semibold
                                        focus:outline-none focus:shadow-outline
                                        hover:bg-blue-600
                                        shadow-lg
                                        cursor-pointer
                                        transition
                                        ease-in
                                        duration-300
                                      "
                                    >
                                      Upload
                                    </button>
                                  </div>
                                </div>
</center>


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
                                    v-on:click="GoToPrice()"
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
                                      MRP
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
                                      Product Price
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
  ADD_CATERER_SERVICE,
  UPDATE_SERVICE_BANNER,
  UPDATE_SERVICE_PRICE,
  UPDATE_SERVICE_CATALOGUE,
} from "@/graphql/query";
export default {
  layout: "user",
  middleware: "authUser",
  data() {
    return {
      openTab: 1,
      loading: false,
      message: null,
      showAlert: false,
      step: 1,
      service: '',
      type: null,
      formData: {
        name: "",
        description: "",
      },
      priceData: {
        price: 0,
        mrp: 0,
      },
      banner: "",
      bannerImage: "",
      catalogue:'',
      catalogueImage:''
    };
  },

  methods: {
    toggleTabs: function () {
      this.$parent.toggleTabs(1);
    },
    GoBack() {
      this.$rounter.push("/caterers/services");
    },

     GoToPrice() {
      this.step = 3;
    },

    selectBanner() {
      this.$refs.banner.click();
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
    async updateBanner() {
      console.log(this.banner);
      console.log(this.service.id);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_SERVICE_BANNER,
          variables: {
            file: this.banner,
            id: this.service.id,
          },
        });
        this.loading = false;
        //this.step = 3;
        console.log(res.data.result);

      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

     selectCatalogue() {
      this.$refs.catalogue.click();
    },

     previewCatalogue(event) {
      this.catalogue = event.target.files[0];
      if (this.catalogue.size > 1024 * 1024) {
        alert("File too big (> 1MB)");
      } else {
        this.catalogueImage = URL.createObjectURL(this.catalogue);
        this.loading = true;

      }
    },

      async updateCatalogue() {
      console.log(this.banner);
      console.log(this.service.id);
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_SERVICE_CATALOGUE,
          variables: {
            file: this.catalogue,
            id: this.service.id,
          },
        });
        this.loading = false;
        //this.step = 3;
        console.log(res.data.result);

      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async onSubmit() {
      this.loading = true;
      // this.formData.mrp = parseInt(this.formData.mrp);
      // this.formData.price = parseInt(this.formData.price);
      console.log(this.formData);
      try {
        const { data } = await this.$apollo.mutate({
          mutation: ADD_CATERER_SERVICE,
          variables: {
            data: this.formData,
          },
        });
        console.log(data);
        this.service = data.result;
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
      try {
        const { data } = await this.$apollo.mutate({
          mutation: UPDATE_SERVICE_PRICE,
          variables: {
            data: this.priceData,
            id: this.service.id,
          },
        });
        console.log(data);
       // this.product = data.result;
        this.$toast.success("Services Added Successfully!");
       
         this.$router.push({ path: `/caterers/services/` })

        // this.$router.push(`/packages/manage/${this.data.addPackage.id}`)
      } catch (error) {
        this.message = error.message;
        this.showAlert = true;
        this.type = "danger";
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
.has-mask {
  position: absolute;
  clip: rect(10px, 150px, 130px, 10px);
}

.toggle-path {
  transition: background 0.3s ease-in-out;
}
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

<template>
  <section class="relative pt-10 pb-5 2xl:pb-40 overflow-hidden">
    
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0">
          <div class="max-w-7xl">
            <div
              class="
                relative
                min-h-screen
                flex flex-wrap
                justify-center
                py-8
                px-4
                sm:px-6
                lg:px-8
              "
            >
              <div class="absolute opacity-60 inset-0 z-0"></div>
              <div
                class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10"
              >
                <div class="text-center mb-10">
                  <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Contact Us
                  </h2>
                  <!-- <p class="mt-2 text-sm text-gray-600">Please sign in to your account</p> -->
                </div>

                <!-- <div class="flex items-center justify-center space-x-2">
			<span class="h-px w-16 bg-gray-300"></span>
			<span class="text-gray-500 font-normal">OR</span>
			<span class="h-px w-16 bg-gray-300"></span>
		</div> -->
                <form class="mt-8 space-y-6" action="#" method="POST">
                  <div class="relative">
                    <label class="text-sm font-bold text-gray-700 tracking-wide"
                      >Name</label
                    >
                    <input
                      class="
                        w-full
                        text-base
                        py-2
                        px-2
                        border border-gray-300
                        focus:outline-none focus:border-indigo-500
                      "
                      type=""
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div class="relative">
                    <label class="text-sm font-bold text-gray-700 tracking-wide"
                      >Email</label
                    >
                    <input
                      class="
                        w-full
                        text-base
                        py-2
                        px-2
                        border border-gray-300
                        focus:outline-none focus:border-indigo-500
                      "
                      type=""
                      placeholder="mail@gmail.com"
                    />
                  </div>
                  <div class="mt-8 content-center">
                    <label
                      class="text-sm font-bold text-gray-700 tracking-wide"
                    >
                      Contact Number
                    </label>
                    <input
                      class="
                        w-full
                        content-center
                        text-base
                        py-2
                        px-2
                        border border-gray-300
                        focus:outline-none focus:border-indigo-500
                      "
                      type="contact"
                      placeholder="Your Contact Number"
                    />
                  </div>

<div class="mt-8 content-center">
                    <label
                      class="text-sm font-bold text-gray-700 tracking-wide"
                    >
                      Reasone for Contact
                    </label>
                    <input
                      class="
                        w-full
                        content-center
                        text-base
                        py-2
                        px-2
                        border border-gray-300
                        focus:outline-none focus:border-indigo-500
                      "
                      type="text"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="
                        w-full
                        flex
                        justify-center
                        bg-purple-800
                        text-gray-100
                        p-4
                        rounded-lg
                        tracking-wide
                        font-semibold
                        focus:outline-none focus:shadow-outline
                        hover:bg-purple-900
                        shadow-lg
                        cursor-pointer
                        transition
                        ease-in
                        duration-300
                      "
                    >
                      Submit
                    </button>
                  </div>
                  
                    
                 
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          class="
            lg:absolute
            top-0
            right-5
            lg:w-2/5
            pr-22
            pl-4
            lg:h-100
            object-cover
          "
          src="@/assets/contact-side-img.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

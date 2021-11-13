<template>
  <section class="relative pt-4 pb-5 2xl:pb-40 overflow-hidden">
    <p></p>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0">
          <div class="max-w-7xl">
            <h2
              class="
                mb-2
                text-black text-3xl
                lg:text-4xl
                font-bold font-heading
              "
            >
              How much does it cost?
            </h2>
            <p class="max-w-6xl text-gray-900 text-justify">
              All our fees are noted in:
            </p>
           
            <p class="ml-4 text-justify text-purple-900 font-bold cursor-pointer">
              <Nuxt-Link to="/tr_level_2"
                >Food Safety for Caterers and Private Chefs - Level 2</Nuxt-Link
              >
            </p>
            <p class="ml-4 text-justify text-purple-900 font-bold cursor-pointer">
              <Nuxt-Link to="/tr_level_1">
                Food Allergen for Caterers and Private Chefs - Level
                1</Nuxt-Link
              >
            </p>
            <p class="ml-4 mt-2 max-w-6xl text-gray-900 text-justify">
              If you require further assistance or advice, do not hesitate to
              <Nuxt-Link to="/contactus" class="text-purple-800"
                >contact us</Nuxt-Link
              >
              with your enquiry.
            </p>

            <div
              class="
                mt-4
                flex flex-wrap
                overflow-hidden
                md:-mx-px
                lg:-mx-px
                xl:-mx-px
              "
            >
              <div
                class="
                  w-full
                  overflow-hidden
                  md:my-px md:px-px md:w-1/2
                  lg:my-px lg:px-px lg:w-1/2
                  xl:my-px xl:px-px xl:w-1/2
                "
              >
                <p class="ml-2 text-purple-900 text-center font-bold">
                  Food Safety for Caterers and Private Chefs - Level 2
                </p>
                <center>
                  <Nuxt-Link
                    to="/tr_level_2"
                    class="
                      inline-flex
                      px-8
                      py-4
                      text-xs text-white text-center
                      font-semibold
                      leading-none
                      bg-purple-600
                      hover:bg-purple-700
                      rounded
                    "
                    >More Info
                  </Nuxt-Link>
                </center>
              </div>

              <div
                class="mt-2
                  w-full
                  overflow-hidden
                  md:my-px md:px-px md:w-1/2
                  lg:my-px lg:px-px lg:w-1/2
                  xl:my-px xl:px-px xl:w-1/2
                "
              >
                <p class="ml-2 text-purple-900 text-center font-bold">
                  Food Allergen for Caterers and Private Chefs - Level 1
                </p>
                <center>
                  <Nuxt-Link
                    to="/tr_level_1"
                    class="
                      inline-flex
                      px-8
                      py-4
                      text-xs text-white text-center
                      font-semibold
                      leading-none
                      bg-purple-600
                      hover:bg-purple-700
                      rounded
                    "
                  >
                    More Info</Nuxt-Link
                  >
                </center>
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
            pl-12
            lg:h-100
            object-cover
          "
          src="@/assets/pngwing.png"
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

<template>
  <section class="bg-cover titlebg1">
    <div class="flex items-right py-32 px-10">
      <div class="opacity-50"></div>
      <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0 pl-16">
          <div class="max-w-6xl">
            <h2
              class="
                mb-6
                text-black text-3xl
                lg:text-4xl
                font-bold font-heading
                
              "
            >
              If you are Home/Event Caterer or a Private Chef explore your
              business.
            </h2>
           <div class="inline-block"> <Nuxt-Link
              to="/plans"
              class="
                block
                sm:inline-block
                py-4
                px-8
                mb-4
                
                sm:mb-0
                text-xs text-purple-900 text-center
                font-semibold
                leading-none
                bg-white
                rounded
              "
              >Get Started</Nuxt-Link
            ></div>
          </div>
        </div>
        <div
          class="
            relative
            lg:w-2/5
            transform
            transition
            duration-500
            hover:scale-110
          "
        >
          <img
            class="lg:absolute top-0 right-0 lg:h-100 object-cover"
            src="@/assets/phone.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.titlebg1 {
  background-image: url("@/assets/bg_5.png");
}
</style>
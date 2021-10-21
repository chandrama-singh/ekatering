<template>
 
        <section class=" bg-cover titlebg1" >
        <div class="relative flex items-right py-32">
          <div class=" opacity-50 "></div>
           <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0 pl-16">
          <div class="max-w-6xl ">
            <h2
              class="mb-6 text-black text-3xl lg:text-4xl font-bold font-heading ml-6"
            >
              If you are Home/Event Caterer or a Private Chef explor your business.
            </h2>
            <div class="pl-5"><Nuxt-Link to="/plans" class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-purple-900 text-center font-semibold leading-none bg-white rounded">Get Started</Nuxt-Link></div>
          </div>
        </div>
        <img
          class="lg:absolute top-0 right-5 lg:w-2/5 pr-22 pl-12  lg:h-100 object-cover "
          src="@/assets/phone.png"
          alt=""
        />
      </div>
        </div>
      </section>

</template>

<script>
export default {

}
</script>

<style>
.titlebg1
{
    background-image: url('@/assets/bg_5.png');
}
</style>
<template>
  <section class="relative pt-20 pb-5 2xl:pb-40 overflow-hidden bgabout">
    <p></p>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0">
          <div class="max-w-7xl">
            <h2
              class="mb-6 text-black text-3xl lg:text-4xl font-bold font-heading ml-6"
            >
              Why We Are Best For You
            </h2>
            <p class="ml-6 max-w-6xl text-gray-900 text-justify">
              Since the pandemic, our way of living has changed. The percentage
              of home working has increased. This has provided an opportunity
              for those working at home to buy home-cooked, nutritional,
              interesting, and authentic food prepared in a kitchen that
              compiles with food safety regulations. Homeworking customers can
              also support their community financially by using local home
              catering businesses.
            </p>
            <br/>
            <p class="ml-6 text-gray-900 text-justify">
              For those individuals, especially those in the hospitality sector,
              running a home catering business (Home/Event caterers and Private
              Chefs) can provide income for their household without the overhead
              expenses of running a takeaway or restaurant. Home/Event caterers
              and Private Chefs can turn their passion into cash.
            </p>
          </div><br/>
          <div class="ml-6"><a class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-purple-600 hover:bg-purple-700 rounded" href="#">Get Started</a></div>
        </div>
        <img
          class="lg:absolute top-4 mt-16 right-2 lg:w-2/5  lg:h-100 object-cover "
          src="@/assets/about-img.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.bgabout{
     background-image: url('@/assets/bg_1.png');
     background-size: cover;
     background-repeat: no-repeat;
}
</style>

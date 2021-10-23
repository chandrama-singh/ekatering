<template>
      <section class="py-52 overflow-hidden bg-img">
        <img class="left-img absolute mx-auto left-0 -mt-80 h-54 z-10" src="@/assets/h1.png" alt="">
        <div class="container px-4 lg:px-16 mx-auto">
          <div class="flex flex-wrap lg:flex-nowrap">
            <div class="w-full lg:w-1/2">
              <div class="py-20 ">
                <div class="mb-4">
                  <h2 class="text-4xl mt-3 font-bold font-heading mb-4">Katerers in Your Pocket</h2>
                  <p class="text-gray-700 leading-relaxed">See menus and photos for nearby katerers and bookmark your favorite places on the go.!</p>
                  <p class="text-gray-700 leading-relaxed">Download the eKatering app on your platform........</p>
                </div>
                <div class="flex items-start py-4">
                  <div class="">
                   <img class="relative mx-auto rounded-xl h-16 w-full z-10"  src="@/assets/apple-store.png"/>
                  </div>
                  <div>
                   <img class="relative mx-auto rounded-xl h-16 w-full z-10"  src="@/assets/play-store.png"/>
                    </div>
                </div>
                <!-- <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Food Safety Management</h3>
                    <p class="text-blueGray-400 leading-loose">A documented Food Safety Management System (FSMS) is a systematic approach to controlling food safety hazards within a food business to ensure that food is safe to eat.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-purple-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Virtual Remote Inspection</h3>
                    <p class="text-blueGray-400 leading-loose">VRI is the way forward in this changing world that we live in. This service applies to small catering kitchens such as those used by home/event caterers and private chefs.</p>
                  </div>
                 
                </div> -->
                 
              </div>
            </div>
            <div class="relative w-full lg:w-1/2 mt-12 transform transition duration-500 hover:scale-110">
              <img class="relative mx-auto rounded-xl w-full z-10" src="@/assets/icon_4.png" alt="">
              <!-- <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt="">
              <img class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="metis-assets/elements/blob-tear.svg" alt=""> -->
            </div>
          </div>
        </div>
        <!-- <span class="">
          <div id="triangle-bottomleft" class="absolute left-0 w-1/2 h-32 bg-gray-200 bg-transparent">
          
          </div>
          <div id="triangle-bottomright" class="absolute right-0 w-1/2 h-32 bg-gray-200">
          
          </div>
        </span> -->
      </section>
</template>

<script>
export default {

}
</script>

<style>
#triangle-bottomleft {
     
      border-bottom: 100px solid rgb(155, 155, 155);
      border-right: 700px solid transparent;
    }
#triangle-bottomright {
     
      border-bottom: 100px solid rgb(155, 155, 155);
      border-left: 700px solid transparent;
    }
.bg-img{
     /* background-image: url('@/assets/bg_4.png'); */
     background-image: url('@/assets/bg_h1.png');
     background-size: cover;
     background-repeat: no-repeat;
     /* width: full;
     height: full; */
     height: 100%;
}
.left-img{
  height: 75%;
}

@media only screen and (max-width: 600px) {
  .left-img {
    visibility: hidden;
  }
}
@media only screen and (max-width: 400px) {
  .left-img {
    visibility: hidden;
  }
}
</style>
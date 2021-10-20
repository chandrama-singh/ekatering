<template>
<section class="overflow-hidden lg:py-0 sm:py-20">
        <div class="container px-4 mx-auto py-4 lg:py-20 sm:py-20 flex flex-wrap">
          <div class=" pt-4 lg:pt-16 pl-4 text-left ">
            <div class=" mx-auto mb-8">
              <h2 class="text-3xl md:text-4xl mb-4 mt-12 text-purple-600 font-bold font-heading">
                <!-- <span></span><br> -->
                <div class="flex">
                  <!-- <img src="@/assets/hero-icon.png"> -->
                <span class="text-black text-5xl max-w-3xl font-poppins leading font-semibold">Your Catering Business, our assistance !</span>
               </div>
              </h2>
              <p class="text-gray-900 text-xl max-w-3xl font-poppins">We offer a step-by-step solution to Home/Events Caterers and Private Chefs to open and run their food business online while complying with food safety and standard regulations.</p>
            </div>
            <div><nuxt-link class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center  leading-none bg-purple-600 hover:bg-purple-700 rounded" to="/joinusform">Get Started</nuxt-link></div>
          </div>
          <!-- <div class="saturn flex items-center justify-center max-w-4xl mx-auto pt-12 pb-4 ">
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="~assets/a1.png" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="~assets/a2.png" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="~assets/a3.png" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="~assets/a4.png" alt="">
            </div>
            <div class="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="~assets/a1.png" alt="">
            </div>
          </div> -->
      
        <span class="imgrotets rotate flex ml-4 mb-4">
        <img
          class=" lg:absolute sm:relative pb-2 top-0 lg:my-40 sm:my-4 sm:mt-10 lg:w-3/5 sm:w-full   object-cover"
          src="@/assets/a2.png"
          alt=""
        />
       
        </span>
        
       
        <span class="">
        <img
          class=" lg:absolute sm:relative pb-4 lg:top-12 sm:top-0 pt-2 lg:my-40 sm:mt-10 right-4 lg:mr-28 sm:mr-0   object-cover"
          src="@/assets/abfood.png"
          alt=""
        />
        </span>
        
        <!-- <img
          class=" lg:absolute pb-4 top-0 lg:my-40 sm:mt-10 right-2 object-cover items-center"
          src="@/assets/abfood.png"
          alt=""
        /> -->
        </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.bgimg{
  background-image: url('@/assets/banner_1.png');
}
.rotate { width:100px; height:100px; margin-top:120px; transform-origin:200% center; position:relative; animation:rotate 6s linear infinite; }
.rotate:before { content:''; position:absolute; height:100%; width:100%;  animation:rotate 6s linear reverse infinite; }
@keyframes rotate { 100% { transform:rotate(-360deg); } }

.saturn {
    
    /* 
     * Make the initial position to be the center of the circle you want this
     * object follow.
     */
    position: absolute;
    left: 315px;
    top: 143px;

    /*
     * Sets up the animation duration, timing-function (or easing)
     * and iteration-count. Ensure you use the appropriate vendor-specific 
     * prefixes as well as the official syntax for now. Remember, tools like 
     * CSS Please are your friends!
     */
    -webkit-animation: myOrbit 4s linear infinite; /* Chrome, Safari 5 */
       -moz-animation: myOrbit 4s linear infinite; /* Firefox 5-15 */
         -o-animation: myOrbit 4s linear infinite; /* Opera 12+ */
            animation: myOrbit 4s linear infinite; /* Chrome, Firefox 16+, 
                                                      IE 10+, Safari 5 */
    
    
    
}

/*
 * Set up the keyframes to actually describe the begining and end states of 
 * the animation.  The browser will interpolate all the frames between these 
 * points.  Again, remember your vendor-specific prefixes for now!
 */
@-webkit-keyframes myOrbit {
    from { -webkit-transform: rotate(0deg) translateX(150px) rotate(0deg); }
    to   { -webkit-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}

@-moz-keyframes myOrbit {
    from { -moz-transform: rotate(0deg) translateX(150px) rotate(0deg); }
    to   { -moz-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}

@-o-keyframes myOrbit {
    from { -o-transform: rotate(0deg) translateX(150px) rotate(0deg); }
    to   { -o-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}

@keyframes myOrbit {
    from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}

@media only screen and (max-width: 600px) {
  .imgrotets {
    visibility: hidden;
  }
}
@media only screen and (max-width: 400px) {
  .imgrotets {
    visibility: hidden;
  }
}
</style>
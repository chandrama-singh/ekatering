<template>
  <section class="overflow-hidden lg:py-10 sm:py-10 xl:py-30 2xl:py-40 ">
    <div class=" px-4 py-4 lg:py-20 sm:py-10 flex flex-wrap">
      <div class="pt-4 lg:pt-16 lg:px-12 sm:px-4 text-left">
        <div class="mx-auto mb-8">
          <h2
            class="
              text-3xl
              md:text-4xl
              sm:text-2xl
              mb-4
              mt-12
              text-purple-600
              font-bold font-heading
            "
          >
            <!-- <span></span><br> -->
            <div class="flex">
              <!-- <img src="@/assets/hero-icon.png"> -->
              <span
                class="
                  text-black sm:text-center lg:text-left text-5xl
                  max-w-3xl
                  font-poppins
                  leading
                  font-semibold
                "
                >Your Catering Business, our assistance !</span
              >
            </div>
          </h2>
          <p class="text-gray-900 text-xl max-w-3xl font-poppins">
            We offer a step-by-step solution to Home/Events Caterers and Private
            Chefs to open and run their food business online while complying
            with food safety and standard regulations.
          </p>
        </div>
        <div>
          <nuxt-link
            class="
              block
              sm:inline-block
              py-4
              px-8
              mb-4
              sm:mb-0 sm:mr-3
              text-xs text-white text-center
              leading-none
              bg-purple-600
              hover:bg-purple-700
              rounded
            "
            to="/plans"
            >Get Started</nuxt-link
          >
        </div>
      </div>
      

      <!-- <span class="imgrotets rotate flex ml-4 mb-4">
        <img
          class=" lg:absolute sm:relative pb-2 top-0 lg:my-40 sm:my-4 sm:mt-10 lg:w-3/5 sm:w-full   object-cover"
          src="@/assets/a2.png"
          alt=""
        />
       
        </span> -->

      <!-- <div class="">
        <img
          class=" lg:absolute sm:relative lg:ml-6 pb-4 lg:top-12 sm:top-0 pt-2 lg:my-40 sm:mt-10 right-4 lg:mr-28 sm:mr-8 object-cover"
          src="@/assets/Slice.png"
          alt=""
        />
        </div> -->


  <div class="">
       <img
          class="rotating lg:relative pb-4 top-0 px-4 lg:my-10 sm:mt-6  lg:right-4 sm:right-2  lg:mr-10 sm:mr-0 object-cover"
          src="@/assets/heroimg1.png"
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
.bgimg {
  background-image: url("@/assets/banner_1.png");
}
.rotate {
  width: 100px;
  height: 100px;
  margin-top: 120px;
  transform-origin: 200% center;
  position: relative;
  animation: rotate 6s linear infinite;
}
.rotate:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  animation: rotate 6s linear reverse infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}

.saturn {
  /* 
     * Make the initial position to be the center of the circle you want this
     * object follow.
     */
  position: absolute;
  left: 300px;
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
  from {
    -webkit-transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

@-moz-keyframes myOrbit {
  from {
    -moz-transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

@-o-keyframes myOrbit {
  from {
    -o-transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

@keyframes myOrbit {
  from {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

@media only screen and (max-width: 600px) {
  .imgrotets {
    visibility: hidden;
  }
  .rotating {
  width:260px;
  height: 260;
  
}
}
@media only screen and (max-width: 400px) {
  .imgrotets {
    visibility: hidden;
  }
  .rotating {
  width:220px;
  height: 220px;
  
}
}




@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 8s linear infinite;
  -moz-animation: rotating 8s linear infinite;
  -ms-animation: rotating 8s linear infinite;
  -o-animation: rotating 8s linear infinite;
  animation: rotating 8s linear infinite;
}
.rotating {
  width:320px;
  height: 320px;
  
}

</style>
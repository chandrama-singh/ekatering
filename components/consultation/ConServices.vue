<template>
  <div class="">
    <h2
      class="pl-10 pt-10 text-black mb-4 text-4xl lg:text-4xl font-bold font-heading"
    >
      Consultancy Services
    </h2>
    <!-- <p class="text-black text-2xl max-w-full p-4 text-center">
      Full Suite of Consultations and Training<br />
      Start Your Learning with our Training and Consultations Services
    </p> -->
    <section class="pb-10 relative block bg-blueGray-800">
        <div class="container mx-auto px-4 lg:pt-12 lg:pb-20">
          <!-- <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Build something</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div> -->
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div class="text-lightBlue-300 w-24 h-24 inline-flex items-center justify-center">
                <img src="~assets/con1.png"/>

              </div>
              <Nuxt-Link to="/authorityfood"><h6 class="text-xl mt-5 font-semibold text-purple-600">
                Local Authority Food Business Registration
              </h6></Nuxt-Link>
              
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div class="text-lightBlue-300 w-24 h-24  inline-flex items-center justify-center">
                <img src="~assets/con2.png"/>

              </div>
             <Nuxt-Link to="/fsms"> <h5 class="text-xl mt-5 font-semibold text-purple-600">
                Documented Food Safety Management System
              </h5></Nuxt-Link>
              
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
             
                <div class="text-lightBlue-300 w-24 h-24 inline-flex items-center justify-center">
                <img src="~assets/con3.png"/>

             

              </div>
              <Nuxt-Link to="/vir"><h5 class="text-xl mt-5 font-semibold text-purple-600">Virtual/Remote Inspection
</h5></Nuxt-Link>
              
            </div>
          </div>
          <!----------------------------------------------------->
           <div class="flex flex-wrap mt-12 pt-10 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              
                <div class="text-lightBlue-300 w-24 h-24  inline-flex items-center justify-center">
                <img src="~assets/con4.png"/>

              
              </div>
              <Nuxt-Link to="/sfbb"><h6 class="text-xl mt-5 font-semibold text-purple-600">
                Safer Food Better Business Pack
              </h6></Nuxt-Link>
              
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div class="text-lightBlue-300 w-24 h-24  inline-flex items-center justify-center">
                <img src="~assets/con5.png"/>

              </div>
              <Nuxt-Link to="/foodstandard"><h5 class="text-xl mt-5 font-semibold text-purple-600">  
               Food Standard
              </h5></Nuxt-Link>
              
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div class="text-lightBlue-300 w-24 h-24  inline-flex items-center justify-center">
                <img src="~assets/con6.png"/>

              </div>
             <Nuxt-Link to="/legal"> <h5 class="text-xl mt-5 font-semibold text-purple-600">Legal Advice</h5></Nuxt-Link>
              
            </div>
          </div>
        </div>
      </section>
       <!---------------------------------------------------------------------------->
    <section class="py-4 px-2">
        <div class="w-full max-w-5xl mx-auto text-center">
          <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
          <!-- <h2 class="text-3xl mt-4  leading-tight font-semibold font-heading">TURN YOUR PASSION INTO CASH!</h2>
          <span class="text-sm">If you are a Home/Event Caterer or a Private Chef, help us kickstart your digital journey.</span><br/> -->
         <Nuxt-Link to="/contactus"> <button class="inline-block  py-4 px-8 leading-none text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded md:rounded-lg">Contact Us</button>
     </Nuxt-Link>   </div>
      </section>
    <!---------------------------------------------------------------------------->
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
<div>
  <section class="bgcolor">
      <TBanner title="Online Training"/>
      <TrainingAbout/>
      <TwhyKetring/>
      <Cost/>
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
      <Passion/>
    </section>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import TrainingAbout from '@/components/training/TrainingAbout.vue'
import TwhyKetring from '@/components/training/TwhyKetring.vue'
import Cost from '@/components/training/Cost.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",
  data(){
   return{
     
   }
  },
    components:{
        TBanner,
        TrainingAbout,
        TwhyKetring,
        Cost,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

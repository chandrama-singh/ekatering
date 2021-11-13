<template>
<div>
  <section class="bgcolor">
      <TBanner title="Training & Consultancy"/>
      <TrainingTC/>
      <!-- <Passion/> -->
    </section>
    
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import TrainingTC from '../components/TrainingTC.vue'
import Passion from '../components/training/Passion.vue'
export default {
    name: 'trainingTC',
     layout:"default",
    components:{
        
        TBanner,
        TrainingTC,

        Passion,
        
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

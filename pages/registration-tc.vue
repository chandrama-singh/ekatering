<template>
<div>
  <section class="bgcolor">
      <TBanner title="Registration T&C"/>
      <RegistrationTC/>
      <!-- <Passion/> -->
    </section>
    
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import RegistrationTC from '../components/RegistrationTC.vue'
import Passion from '../components/training/Passion.vue'
export default {
    name: 'registrationTC',
     layout:"default",
    components:{
        
        TBanner,
        RegistrationTC,
        Passion,
        
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

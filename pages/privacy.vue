<template>
<div>
  <section class="bgcolor">
      
      <TBanner/>
      <PrivacyPolicy/>
      <Passion/>
    </section>
      
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'

import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        PrivacyPolicy,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

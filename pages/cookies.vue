<template>
<div>
  <section class="bgcolor">
      
      <TBanner/>
      <CookiesPolicy/>
      <Passion/>
    </section>
     
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import CookiesPolicy from '@/components/CookiesPolicy.vue'

import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        CookiesPolicy,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

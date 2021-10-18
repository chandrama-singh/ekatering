<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <Legal/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import Legal from '@/components/Legal.vue'
import Passion from '@/components/training/Passion.vue'

export default {
    name: 'legal',
     layout:"default",

    components:{
        TBanner,
        Legal,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

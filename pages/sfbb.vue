<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <Sfbb/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import Sfbb from '@/components/Sfbb.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Sfbb,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

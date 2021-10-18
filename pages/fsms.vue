<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <Fsms/>
      <Passion/>
    </section>

  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Fsms from '@/components/Fsms.vue'

import Passion from '@/components/training/Passion.vue'

export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Fsms,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <TermCondition/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import TermCondition from '@/components/TermCondition.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        TermCondition,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

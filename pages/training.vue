<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <TrainingAbout/>
      <TwhyKetring/>
      <Cost/>
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

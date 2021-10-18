<template>
<div>
  <section class="bgcolor">
      <TBanner/>
      <Vir/>
      <Passion/>
    </section>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Vir from '@/components/Vir.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Vir,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

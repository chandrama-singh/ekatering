<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <Level2/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Level2 from '@/components/training/Level2.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",
    components:{
        TBanner,
        Level2,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

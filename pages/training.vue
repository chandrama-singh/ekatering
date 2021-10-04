<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <TrainingAbout/>
      <TwhyKetring/>
      <Cost/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import TrainingAbout from '@/components/training/TrainingAbout.vue'
import TwhyKetring from '@/components/training/TwhyKetring.vue'
import Cost from '@/components/training/Cost.vue'
import Passion from '@/components/training/Passion.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'training',
    
    components:{
        Header,
        TBanner,
        TrainingAbout,
        TwhyKetring,
        Cost,
        Passion,
        Footer,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>
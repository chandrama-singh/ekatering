<template>
  <div>
      <Header/>
      <TBanner/>
      <TrainingAbout/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import TrainingAbout from '@/components/training/TrainingAbout.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'training',
    
    components:{
        Header,
        TBanner,
        TrainingAbout,
        Footer,
    }

}
</script>

<style>

</style>
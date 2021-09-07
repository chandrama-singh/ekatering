<template>
  <div>
      <Header/>
      <Slider />
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'aboutus',
    
    components:{
        Header,
        Slider,
        Footer,
    }

}
</script>

<style>

</style>
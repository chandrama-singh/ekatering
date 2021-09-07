<template>
  <div>
      <Header/>
      <Slider/>
      <Featers/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Featers from '../components/Features.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'features',
    
    components:{
        Header,
        Slider,
        Featers,
        Footer,
    }

}
</script>

<style>

</style>
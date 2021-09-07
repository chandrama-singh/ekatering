<template>
  <div>
      <Header/>
      <Slider/>
      <Faq/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Faq from '../components/Faq.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'faq',
    
    components:{
        Header,
        Slider,
        Faq,
        Footer,
    }

}
</script>

<style>

</style>
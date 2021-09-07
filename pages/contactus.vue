<template>
  <div>
      <Header/>
      <Slider/>
      <Contactform/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Contactform from '@/components/contactfile/Contactform.vue'
export default {
    name: 'contactus',
    
    components:{
        Header,
        Slider,
        Footer,
        Contactform,
    }

}
</script>

<style>

</style>
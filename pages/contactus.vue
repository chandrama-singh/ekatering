<template>
  <div>
      <Header/>
      <Contactform/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Contactform from '@/components/contactfile/Contactform.vue'
export default {
    name: 'contactus',
    
    components:{
        Header,
        Footer,
        Contactform,
    }

}
</script>

<style>

</style>
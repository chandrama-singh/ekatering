<template>
  <div>
      <Header/>
      <ConBanner/>
      <Contactform/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ConBanner from '../components/contactfile/ConBanner.vue'
import Footer from '../components/Footer.vue'
import Contactform from '@/components/contactfile/Contactform.vue'
export default {
    name: 'contactus',
    
    components:{
        Header,
        ConBanner,
        Footer,
        Contactform,
    }

}
</script>

<style>

</style>
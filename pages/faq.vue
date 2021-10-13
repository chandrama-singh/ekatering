<template>
  <div class="bgcolor">
      <Header/>
      <FaqBanner/>
      <Faq/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import FaqBanner from '../components/faq/FaqBanner.vue'
import Faq from '@/components/Faq.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'faq',
    
    components:{
        Header,
        FaqBanner,
        Faq,
        Footer,
    }

}
</script>

<style>

</style>
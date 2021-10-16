<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <CookiesPolicy/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import CookiesPolicy from '@/components/CookiesPolicy.vue'

import Passion from '@/components/training/Passion.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'training',
    
    components:{
        Header,
        TBanner,
        CookiesPolicy,
       
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
<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <Legal/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import Legal from '@/components/Legal.vue'

import Passion from '@/components/training/Passion.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'legal',
    
    components:{
        Header,
        TBanner,
        Legal,
       
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
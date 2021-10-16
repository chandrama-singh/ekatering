<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <TermCondition/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import TermCondition from '@/components/TermCondition.vue'

import Passion from '@/components/training/Passion.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'training',
    
    components:{
        Header,
        TBanner,
        TermCondition,
       
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
<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <FoodStandard/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TBanner from '../components/training/TBanner.vue'
import FoodStandard from '@/components/FoodStandard.vue'

import Passion from '@/components/training/Passion.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Food Standard',

    data(){
        return{
            name:'Food Standard'
        }
    },
    
    components:{
        Header,
        TBanner,
        FoodStandard,
       
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
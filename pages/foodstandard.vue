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
import TBanner from '../components/training/TBanner.vue'
import FoodStandard from '@/components/FoodStandard.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'Food Standard',
     layout:"default",

    data(){
        return{
            name:'Food Standard'
        }
    },

    components:{
        TBanner,
        FoodStandard,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

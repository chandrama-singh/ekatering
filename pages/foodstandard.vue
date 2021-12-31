<template>
<div>
  <section class="bgcolor">
     
      <TBanner title="FOOD STANDARD"/>
      <FoodStandard/>
      <Passion/>
    </section>
      
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import FoodStandard from '@/components/FoodStandard.vue'
import Passion from '@/components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Learn UK food standard regulations with eKatering to enter the country’s dynamic food market and provide your customers with safe food.'},
    ],
  },

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

<template>
  <div>
  <section class="bgcolor">
      
      <TBanner title="FEATURES"/>
      <Features/>
      <Passion/>
    </section>
      
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Featers from '../components/Features.vue'
import Passion from '../components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'eKatering is the best UK online ordering app for home/ event caterers and private chefs due to its wide range of unique features. Download it now and see a remarkabke difference in your growth!'},
    ],
  },


    name: 'features',
     layout:"default",
    components:{
        TBanner,
        Featers,
        Passion,
    }

}
</script>

<style>

</style>

<template>
  <div class="bgcolor">
      <FaqBanner/>
      <Faq/>
      <Passion/>
  </div>
</template>

<script>
import FaqBanner from '../components/faq/FaqBanner.vue'
import Passion from '@/components/training/Passion.vue'
import Faq from '@/components/Faq.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Acquire our consultation and training services before approaching your local authority for a rerating inspection to get the best FHRS award for your catering business.'},
    ],
  },

    name: 'faq',
     layout:"default",
    components:{
        FaqBanner,
        Passion,
        Faq,
    }

}
</script>

<style>

</style>

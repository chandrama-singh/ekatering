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

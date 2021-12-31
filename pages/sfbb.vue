<template>
<div>
  <section class="bgcolor">
      <TBanner title="SAFER FOOD BETTER BUSINESS PACK"/>
      <Sfbb/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import Sfbb from '@/components/Sfbb.vue'
import Passion from '@/components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Learn about the best Safer Food Better Business Pack for your business with eKatering and improve your compliance with UK food safety regulations.'},
    ],
  },

    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Sfbb,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

<template>
<div>
  <section class="bgcolor">
      <TBanner title="Legal Advice"/>
      <Legal/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import Legal from '@/components/Legal.vue'
import Passion from '@/components/training/Passion.vue'

export default {

head: {
    meta: [
      { hid: 'description', name: 'description', content: 'We are top food experts and provide food safety advice to help you comply with UK food hygiene regulations. Join us today to get comprehensive assistance on all the matters related to legal food safety and standards.'},
    ],
  },

    name: 'legal',
     layout:"default",

    components:{
        TBanner,
        Legal,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

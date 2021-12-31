<template>
<div>
  <section class="bgcolor">
      <TBanner title="FEES"/>
      <Fees/>
      <Passion/>
    </section>

  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Fsms from '@/components/Fsms.vue'

import Passion from '@/components/training/Passion.vue'

export default {

head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Do you want to acquire our food safety training and consulting services? Please take a look at this table to get an in-depth understanding of the fee we charge. '},
    ],
  },

    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Fsms,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

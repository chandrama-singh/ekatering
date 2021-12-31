<template>
<div>
  <section class="bgcolor">
      <FSbanner/>
      <Fsms/>
      <Passion/>
    </section>

  </div>
</template>

<script>

import Fsms from '@/components/Fsms.vue'
import FSbanner from "@/components/FSbanner";
import Passion from '@/components/training/Passion.vue'

export default {

  head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Control food safety hazards with food safety management system and maintain a positive brand image by delivering only high-quality and safe food.'},
    ],
  },


    // name: 'training',
     layout:"default",

    components:{
        FSbanner,
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

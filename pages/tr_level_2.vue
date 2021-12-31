<template>
<div>
  <section class="bgcolor">
      
      <Tbanner2/>
      <Level2/>
      <Passion/>
    </section>
      
  </div>
</template>

<script>

import Level2 from '@/components/training/Level2.vue'
import Passion from '@/components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Learn about food safety and hygiene practices with our online UK food safety course. It’s ideal for those seeking a level 2 food safety qualification.'},
    ],
  },

    name: 'training',
     layout:"default",
    components:{
       
        Level2,
        Passion,

    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

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

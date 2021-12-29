<template>
<div>
  <section class="bgcolor">
      <Tbanner1/>
      <Level1/>
      <Passion/>
    </section>
  </div>
</template>

<script>

import Level1 from '@/components/training/Level1.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",

    components:{
       
        Level1,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

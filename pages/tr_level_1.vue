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
  head: {
    meta: [
      { hid: 'description', name: 'description', content: 'If you are a home/ event caterer or a private chef and handle open food, then enrol in our food allergen management course and learn how to manage allergens in food. '},
    ],
  },
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

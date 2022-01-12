<template>
<div>
  <section class="bgcolor">
      <TBanner title="Local Authority Food Registration"/>
      <AuthorityFood/>
      <Passion/>
    </section>
    
  </div>
</template>

<script>

import TBanner from '../components/training/TBanner.vue'
import AuthorityFood from '../components/AuthorityFood.vue'
import Passion from '../components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Are you planning to work as a home/event caterer or a private chef? Please acquire our help on UK food business registration and run your business legally.'},
    ],
  },

    name: 'training',
     layout:"default",
    components:{
        
        TBanner,
        AuthorityFood,

        Passion,
        
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

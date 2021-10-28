<template>
<div>
  <section class="bgcolor">
      
      <TBanner title="Authority Food"/>
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

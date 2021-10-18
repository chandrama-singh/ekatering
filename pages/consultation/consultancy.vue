<template>
  <div class="bgcolor">
      <TBanner/>
      <ConServices/>
       <Passion/>
  </div>
</template>

<script>

import TBanner from '@/components/training/TBanner.vue'
import ConServices from '@/components/consultation/ConServices.vue'
import Passion from '@/components/training/Passion.vue'

export default {
    name: 'consultancy',

    components:{
        TBanner,
        ConServices,
        Passion,

    },

}
</script>

<style>

</style>

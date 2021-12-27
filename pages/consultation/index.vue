<template>
  <div class="bgcolor">
      <ConsBanner/>
      <ConServices/>
       <Passion/>
  </div>
</template>

<script>

import ConsBanner from '@/components/consultation/ConsBanner.vue'
import ConServices from '@/components/consultation/ConServices.vue'
import Passion from '@/components/training/Passion.vue'

export default {
    name: 'consultancy',

    components:{
       ConsBanner,
        ConServices,
        Passion,

    },

}
</script>

<style>

</style>

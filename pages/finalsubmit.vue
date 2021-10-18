<template>
  <div>
      <section class="bgcolor">
      <FinalSubmit/>
      </section>

  </div>
</template>

<script>

import FinalSubmit from '../components/FinalSubmit.vue'

export default {
    name: 'signup',
     layout:"default",

    components:{
        FinalSubmit,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

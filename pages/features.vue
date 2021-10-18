<template>
  <div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <Features/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Featers from '../components/Features.vue'
import Passion from '../components/training/Passion.vue'
export default {
    name: 'features',
     layout:"default",
    components:{
        TBanner,
        Featers,
        Passion,
    }

}
</script>

<style>

</style>

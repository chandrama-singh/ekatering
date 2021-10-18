<template>
  <div class="bgcolor">

      <TitleBanner/>
      <AboutUs/>

  </div>
</template>

<script>
import TitleBanner from '../components/about/TitleBanner.vue'
import AboutUs from '../components/about/AboutUs.vue'
import Card from '../components/about/Card.vue'
export default {
    name: 'aboutus',
    layout:"default",
    components:{

        TitleBanner,
        Card,
        AboutUs,

    }

}
</script>

<style>
.bgcolor{
    background-color: #F3FCEE;
}
</style>

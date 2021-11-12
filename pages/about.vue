<template>
  <div class="bgcolor">

      <TitleBanner/>
      <AboutPage/>
      <Subscribe/>

  </div>
</template>

<script>
import TitleBanner from '../components/about/TitleBanner.vue'
import AboutPage from '../components/about/AboutPage.vue'
import Subscribe from '../components/Subscribe.vue'
import Card from '../components/about/Card.vue'
export default {
    name: 'aboutus',
    layout:"default",
    components:{

        TitleBanner,
        Card,
        AboutPage,
        Subscribe,

    }

}
</script>

<style>
.bgcolor{
    background-color: #F3FCEE;
}
</style>

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

    head: {
    title: 'About eKatering',
    meta: [
      { hid: 'description', name: 'description', content: 'eKatering is a leading UK food safety consultancy helping businesses to solve their food safety problems. Reach out to us to ensure compliance with latest food safety standards. '},
    ],
  },

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

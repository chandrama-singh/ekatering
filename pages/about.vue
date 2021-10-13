<template>
  <div class="bgcolor">
      <Header/>
      <TitleBanner/>
      <AboutUs/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import TitleBanner from '../components/about/TitleBanner.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/about/Card.vue'
export default {
    name: 'aboutus',
    
    components:{
        Header,
        TitleBanner,
        Card,
        Footer,
    }

}
</script>

<style>
.bgcolor{
    background-color: #F3FCEE;
}
</style>
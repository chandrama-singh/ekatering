<template>
  <div>
      <Header/>
      <ConsBanner/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ConsBanner from '../components/consultation/ConsBanner.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'consultations',
    
    components:{
        Header,
        ConsBanner,
        Footer,
    }

}
</script>

<style>

</style>
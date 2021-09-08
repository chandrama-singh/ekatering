<template>
  <div>
      <Header/>
      <FtBanner/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import FtBanner from '../components/feature/FtBanner.vue'
import Featers from '../components/Features.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'features',
    
    components:{
        Header,
        FtBanner,
        Featers,
        Footer,
    }

}
</script>

<style>

</style>
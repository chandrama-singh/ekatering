<template>
  <div class="bgcolor">
      <Header/>
      <TBanner/>
      <ConServices/>
       <Passion/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TBanner from '@/components/training/TBanner.vue'
import ConServices from '@/components/consultation/ConServices.vue'
import Passion from '@/components/training/Passion.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'consultancy',

    components:{
        Header,
        TBanner,
        ConServices,
        Passion,
        Footer,
    },

}
</script>

<style>

</style>
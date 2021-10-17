<template>
  <div>

      <Header/>
      <Plan/>

      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Plan from '../components/Plan'
import Footer from '../components/Footer.vue'
export default {
    name: 'signup',

    components:{
        Header,
        Plan,
        Footer,
    },

}
</script>

<style>

</style>

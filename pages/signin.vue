<template>
  <div>
      <Header/>
      <Signin/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Signin from '@/components/Signin.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signin',

    components:{
        Header,
        Signin,
        Footer,
    },

}
</script>

<style>

</style>
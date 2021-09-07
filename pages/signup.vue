<template>
  <div>
      <Header/>
      <SignUp/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SignUp from '../components/SignUp.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signup',

    components:{
        Header,
        SignUp,
        Footer,
    },

}
</script>

<style>

</style>
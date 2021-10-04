<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <Login/>
      </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Signin from '@/components/Signin.vue'
import Login from '@/components/Login.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signin',

    components:{
        Header,
        Login,
        Footer,
    },

}
</script>

<style scoped>
    .bgcolor{
        background-color: #EEF3FC;
    }
</style>>

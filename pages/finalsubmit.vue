<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <FinalSubmit/>
      </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import FinalSubmit from '../components/FinalSubmit.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signup',

    components:{
        Header,
        FinalSubmit,
        Footer,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>
<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <JoinUsForm/>
      </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import JoinUsForm from '../components/JoinUsForm.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signup',

    components:{
        Header,
        JoinUsForm,
        Footer,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>
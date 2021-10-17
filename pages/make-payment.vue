<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <PaymentUs/>
      </section>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import PaymentUs from '../components/PaymentUs.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'signup',

    components:{
        Header,
        PaymentUs,
        Footer,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>
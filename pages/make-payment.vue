<template>
  <div>
      <section class="bgcolor">
      <PaymentUs/>
      </section>
  </div>
</template>

<script>
import PaymentUs from '../components/PaymentUs.vue'
export default {
    name: 'signup',
     layout:"default",

    components:{
        PaymentUs,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

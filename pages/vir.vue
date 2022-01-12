<template>
<div>
  <section class="bgcolor">
      <TBanner title="Virtual Remote Inspection (VRI)"/>
      <Vir/>
      <Passion/>
    </section>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import Vir from '@/components/Vir.vue'
import Passion from '@/components/training/Passion.vue'
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Do you own a home/event catering kitchen, restaurant, or takeaway? eKatering can conduct an online food safety inspection and provide you with a report before your local authority inspection so you can achieve the highest FHRS award.  Join us to know more.'},
    ],
  },

    name: 'training',
     layout:"default",

    components:{
        TBanner,
        Vir,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

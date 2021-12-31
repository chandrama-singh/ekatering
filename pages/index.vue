<template>
  <div class="overflow-hidden">
    <section class="bgimg">
      <Header/>
      <AboutUs/>
    </section>
      <WhyBest/>
      <WhyKetaring/>
      <Appbanner/>
      <Work/>
      <Pocket/>
      <Subscribe/>
      <!-- <Features /> -->
      <FooterContact class="mb-10"/>
      <!-- <Servicesview/> -->
      <!-- <Faq/> -->

      
    </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Work from '../components/Work.vue'
import CustomerCategory from '../components/CustomerCategory.vue'
import Facilities from '../components/Facilities.vue'
import Features from '../components/Features.vue'
import Subscribe from '../components/Subscribe.vue'
import Appbanner from '../components/Appbanner.vue'
import Servicesview from '../components/Servicesview.vue'
import FooterContact from '../components/FooterContact.vue'

export default {

  head: {
    
    meta: [
      
      { hid: 'description', name: 'description', content: 'Are you starting a UK home catering business to improve your income? Download eKatering app – a one-stop shop for home/event caterers and private chefs in the UK.' },
    
    ],
    
  },

   layout:"default",
  components: {
    Subscribe,
    Slider,
    Work,
    CustomerCategory,
    Facilities,
    Features,
    Appbanner,
    Servicesview,
    Servicesview,
    FooterContact,

  },}

</script>
<style scoped>
.bgimg{
  background-image: url('@/assets/bg.png');
}
</style>

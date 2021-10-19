<template>
  <div class="">
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
      <FooterContact/>
=
      <!-- <Servicesview/> -->
      <Faq/>

      
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

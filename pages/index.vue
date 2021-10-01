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
    <Faq/>
      <!-- <Servicesview/> -->
      <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Work from '../components/Work.vue'
import CustomerCategory from '../components/CustomerCategory.vue'
import Facilities from '../components/Facilities.vue'
import Features from '../components/Features.vue'
import Subscribe from '../components/Subscribe.vue'
import Footer from '../components/Footer.vue'
import Appbanner from '../components/Appbanner.vue'
import Servicesview from '../components/Servicesview.vue'
import FooterContact from '../components/FooterContact.vue'

export default {
  components: { 
    Subscribe,
    Header,
    Slider,
    Work,
    CustomerCategory,
    Facilities,
    Features,
    Footer,
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

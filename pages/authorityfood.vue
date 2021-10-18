<template>
<div>
  <section class="bgcolor">
      <Header/>
      <TBanner/>
      <AuthorityFood/>
      <Passion/>
    </section>
      <Footer/>
  </div>
</template>

<script>
import TBanner from '../components/training/TBanner.vue'
import AuthorityFood from '@/components/AuthorityFood.vue'
import Passion from '@/components/training/Passion.vue'
export default {
    name: 'training',
     layout:"default",
    components:{
        Header,
        TBanner,
        AuthorityFood,

        Passion,
        Footer,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

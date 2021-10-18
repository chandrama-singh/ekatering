<template>
  <div>
      <Header/>
      <ConsBanner/>
      <Footer/>
  </div>
</template>

<script>
import ConsBanner from '../components/consultation/ConsBanner.vue'
export default {
    name: 'consultations',
     layout:"default",

    components:{
        Header,
        ConsBanner,
        Footer,
    }

}
</script>

<style>

</style>

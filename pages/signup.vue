<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <SignUp/>
      </section>
      <Footer/>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
export default {
    name: 'signup',
     layout:"default",

    components:{
        SignUp,
    },

}
</script>

<style>
 .bgcolor{
        background-color: #EEF3FC;
    }
</style>

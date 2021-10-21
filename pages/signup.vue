<template>
  <div>
      <section class="bgcolor">
    
      <SignUp/>
      </section>
      
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

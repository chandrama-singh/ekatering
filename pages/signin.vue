<template>
  <div>
      <section class="bgcolor">
      <Header/>
      <Login/>
      </section>
      <Footer/>
  </div>
</template>

<script>
// import Signin from '@/components/Signin.vue'
import Login from '@/components/Login.vue'
export default {
    name: 'signin',
     layout:"default",

    components:{
        Login,
    },

}
</script>

<style scoped>
    .bgcolor{
        background-color: #EEF3FC;
    }
</style>>

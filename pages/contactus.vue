<template>
  <div class="bgcolor">
      <ConBanner/>
      <Contactform/>
  </div>
</template>

<script>
import ConBanner from '../components/contactfile/ConBanner.vue'
import Contactform from '@/components/contactfile/Contactform.vue'
export default {
    name: 'contactus',
     layout:"default",

    components:{
        ConBanner,
        Contactform,
    }

}
</script>

<style>

</style>

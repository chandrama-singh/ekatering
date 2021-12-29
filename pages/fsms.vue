<template>
<div>
  <section class="bgcolor">
      <FSbanner/>
      <Fsms/>
      <Passion/>
    </section>

  </div>
</template>

<script>

import Fsms from '@/components/Fsms.vue'
import FSbanner from "@/components/FSbanner";
import Passion from '@/components/training/Passion.vue'

export default {

// props: {
//         title: {
//         this.title("title")
//         }
//       },


    // name: 'training',
     layout:"default",

    components:{
        FSbanner,
        Fsms,
        Passion,
    }

}
</script>

<style>
.bgcolor{
        background-color: #EEF3FC;
    }
</style>

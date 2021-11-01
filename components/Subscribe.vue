<template>
   <section class="py-12 px-4">
        <div class="w-full max-w-5xl mx-auto text-center border rounded-lg px-2 py-12 bg-purple-300">
          <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
          <h2 class="text-3xl mt-4  leading-tight font-semibold font-heading">TURN YOUR PASSION INTO CASH!</h2>
          <span class="text-sm">If you are a Home/Event Caterer or a Private Chef, help us kick start your digital journey.</span>
          <form class="w-full max-w-xl mx-auto py-4 mt-4">
            <div class="flex flex-wrap mb-4">
              <!-- <div class="w-full md:w-2/3">
                <input class="appearance-none block w-full py-3 px-4 mb-4 md:mb-0 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none" type="text" placeholder="Your Email">
              </div> -->
              <div class="w-full item-center">
                <button @click.stop.prevent="GotoRegisterPage()" class="inline-block w-full py-4 px-8 leading-none text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded md:rounded-l-none">Join Us</button>
              </div>
            </div>
            <!-- <p class="text-sm text-gray-400 leading-relaxed">Dunder Mifflin Paper Productions is the way to provide your company an extraordinary paper, sold by extraordinary people.</p> -->
          </form>
        </div>
      </section>
</template>

<script>
export default {

  data(){
    return{

    }
  },
  methods:{
    GotoRegisterPage(){
      this.$router.push("/finalsubmit");
    }
  }

}
</script>

<style>

</style>
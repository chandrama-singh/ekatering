<template>
        <section class="text-center bg-cover titlebg" >
        <div class="relative flex items-center py-40">
          <div class="absolute bg-black opacity-50 inset-0"></div>
          <div class="z-10 max-w-2xl mx-auto">
            <h2 class="text-5xl mb-8 leading-tight font-semibold font-heading text-white">{{title}}</h2>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  props: {
        title: {
          type: String
        }
      }

}
</script>

<style>
.titlebg
{
    background-image: url('@/assets/Training-Banner.png');
}

</style>
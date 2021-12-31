<template>
  <div>
    <section class="bgcolor">
      <Tbanner />
      <TrainingAbout />
      <TwhyKetring />
      <Cost />
     
      <!-- <section class="py-4 px-2">
        <div class="w-full max-w-5xl mx-auto text-center">
         
          <Nuxt-Link to="/contactus">
            <button
              class="
                inline-block
                py-4
                px-8
                leading-none
                text-white
                bg-purple-600
                hover:bg-purple-700
                font-semibold
                rounded
                md:rounded-lg
              "
            >
              Contact Us
            </button>
          </Nuxt-Link>
        </div>
      </section> -->
      
      <Passion />
    </section>
  </div>
</template>

<script>
import Tbanner from "@/components/Tbanner.vue";
import TrainingAbout from "@/components/training/TrainingAbout.vue";
import TwhyKetring from "@/components/training/TwhyKetring.vue";
import Cost from "@/components/training/Cost.vue";
import Passion from "@/components/training/Passion.vue";
export default {
head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Get food safety training with eKatering and run your food business legally. With us, you’ll learn at your own pace and be in control of your training. You’ll also receive PDF certificates that will strengthen your credibility in the market!'},
    ],
  },

  name: "training",
  layout: "default",
  data() {
    return {};
  },
  components: {
    Tbanner,
    TrainingAbout,
    TwhyKetring,
    Cost,
    Passion,
  },
};
</script>

<style>
.bgcolor {
  background-color: #eef3fc;
}
</style>

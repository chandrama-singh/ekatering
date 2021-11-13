<template>
  <section>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <h2 class="text-3xl mb-2 font-semibold font-heading">
        Food Allergen for Caterers and Private Chefs - Level 1
      </h2>
      <p class="mb-2 text-gray-400 leading-relaxed">
        Welcome to eKatering online training.
      </p>

      <p class="text-gray-400 leading-relaxed">
        This course is an introductory course specifically designed for caterers
        and private chefs. If you handle open food, prepare, cook and serve, it
        is highly recommended that you complete this training. This course aims
        to prepare you for the management of food allergens when handling open
        food. The main advantage of completing the course online is that you are
        in control and you can go back and review your learning at any time
        within 1 month of purchasing the course.
      </p>
    </div>

    <div class="container mx-auto px-4 bottom-0 p-4 mt-4">
      <p class="mb-4 font-bold text-gray-400 leading-relaxed">
        There are 6 modules in total, this:
      </p>

      <div class="flex">
        <table class="text-left w-full">
          <tbody
            class="
              flex flex-col
              items-center
              justify-between
              overflow-hidden
              w-full
              text-gray-400
            "
          >
            <tr class="flex w-full">
              <td class="px-4 w-1/2">Module 1 - Your responsibility</td>
              <!-- <td class="px-4 w-1/2 text-black">1:46</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">Module 2 - The Allergens</td>
              <!-- <td class="px-4 w-1/2 text-black">3:45</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">Module 3 - Allergen labelling</td>
              <!-- <td class="px-4 w-1/2 text-black">3:51</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">
                Module 4 - Allergen information for your business
              </td>
              <!-- <td class="px-4 w-1/2 text-black">2:21</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">
                Module 5 - Allergen requirements and best practices
              </td>
              <!-- <td class="px-4 w-1/2 text-black">1:29</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">Module 6 - Enforcement and Penalty</td>
              <!-- <td class="px-4 w-1/2 text-black">1:20</td> -->
            </tr>
            <tr class="flex w-full mb-2">
              <td class="px-4 w-1/2">TEST - Multiple choice</td>
              <!-- <td class="px-4 w-1/2 text-black">3:52</td> -->
            </tr>
          </tbody>
        </table>
        <div class="absolute right-10 mt-10">
          <img
            class="lg:relative lg:w-full lg:h-100"
            src="@/assets/icon_top.png"
            alt=""
          />
        </div>
      </div>
      <p class="my-4 text-gray-400 leading-relaxed">
        The course is interactive, practical and allows you to assess your
        knowledge through different activities in each module. This will help
        you retain important information and knowledge required during food
        preparation.
      </p>
      <p class="mb-4 text-gray-400 leading-relaxed">
        At the end of the course, you are required to complete a multiple-choice
        TEST and achieve no less than 85% to receive a PDF certificate,
        evidencing the completion of the course.
      </p>
    </div>

    <section>
      <div class="w-full max-w-5xl mx-auto text-center px-2 py-12">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          Food Allergen for Caterers and Private Chefs Level 1
        </h2>
        <button
          class="
            inline-block
            mt-6
            py-4
            px-16
            leading-none
            text-white
            bg-purple-600
            hover:bg-purple-700
            font-semibold
            rounded
            md:rounded-lg
          "
        >
          Purchase for £ 15.00
        </button>
      </div>
    </section>
    <!---------------------------------------------------------------------------->
    <section class="py-4 px-2">
      <div class="w-full max-w-5xl mx-auto text-center">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <!-- <h2 class="text-3xl mt-4  leading-tight font-semibold font-heading">TURN YOUR PASSION INTO CASH!</h2>
          <span class="text-sm">If you are a Home/Event Caterer or a Private Chef, help us kickstart your digital journey.</span><br/> -->
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
    </section>
    <!---------------------------------------------------------------------------->
  </section>
</template>

<script>
export default {};
</script>

<style></style>

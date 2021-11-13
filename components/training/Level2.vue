<template>
  <section>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <h2 class="text-3xl mb-2 font-semibold font-heading">
        Food Safety for Caterers and Private Chefs - Level 2
      </h2>
      <p class="mb-4 text-gray-400 leading-relaxed">
        Welcome to eKatering online training.
      </p>
      <p class="mb-4 text-gray-400 leading-relaxed">
        This course offers all caterers, including private chefs the knowledge
        to ensure that they store, prepare, cook and deliver or serve food
        safely. It also equips the trainee with adequate food safety knowledge
        to a level appropriate for their work activity. As such, it gives you
        the confidence you need to run a food business. The main advantage of
        completing the course online is that you are in control of your learning
        and you can go back and review any module at any time within
        <b>1 month</b> of purchasing the course.
      </p>
    </div>
    <!------------------------------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------------------------------>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <div class="flex">
        <table class="text-left w-full">
          <thead class="flex text-gray-800 w-full font-bold">
            <tr class="flex w-full mb-2">
              <th class="p-4 w-1/2 text-gray-400 leading-relaxed">
                There are 7 modules in total, this:
              </th>
              <!-- <th class="p-4 w-1/2">(Duration in hr/mins)</th> -->
            </tr>
          </thead>
          <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
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
              <td class="p-2 w-1/2"><b>Module 1</b> - Food Safety</td>
              <!-- <td class="p-4 w-1/2 text-black">4:37</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="p-2 w-1/2"><b>Module 2</b> - General Food Hygiene</td>
              <!-- <td class="p-4 w-1/2 text-black">5:39</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2"><b>Module 3</b> - Kitchen Practises</td>
              <!-- <td class="p-4 w-1/2 text-black">15:45</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2"><b>Module 4</b> - Food Handlers – Personal Hygiene</td>
              <!-- <td class="p-4 w-1/2 text-black">3:22</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2">
                <b>Module 5</b> - Cleaning and Disinfection
              </td>
              <!-- <td class="p-4 w-1/2 text-black">3:49</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2"><b>Module 6</b> - Food Safety Hazards</td>
              <!-- <td class="p-4 w-1/2 text-black">9:11</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2"><b>Module 7</b> - The Law</td>
              <!-- <td class="p-4 w-1/2 text-black">4:09</td> -->
            </tr>
            <tr class="flex w-full">
              <td class="pl-2 w-1/2"><b>TEST</b> - Multiple choice</td>
              <!-- <td class="p-4 w-1/2 text-black">9:16</td> -->
            </tr>
          </tbody>
        </table>
        <div class="absolute right-5 mt-10">
          <img
            class="lg:relative lg:w-2/5 lg:h-100"
            src="@/assets/icon_top.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <p class="mb-4 text-gray-400 leading-relaxed">
        The course is interactive, practical and allows you to assess your knowledge through different activities in each module to ensure you retain important information and knowledge required during food preparation.
      </p>
      <p class="mb-4 text-gray-400 leading-relaxed">
        At the end of the course, you are required to complete a multiple-choice TEST and achieve no less than 85% to receive a PDF certificate.
      </p>
    </div>
    
    <section>
      <div class="w-full max-w-5xl mx-auto text-center px-2 py-12">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          Food Safety for Caterers and Private Chefs Level 2
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
          Purchase for £ 30.00
        </button>
      </div>
    </section>
   
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

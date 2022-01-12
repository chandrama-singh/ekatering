<template>
  <section>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <h2 class="text-3xl mb-4 font-semibold font-heading">
        Welcome to eKatering Food Safety Consultancy.
      </h2>
     
      <p class="text-gray-400 leading-relaxed">
        VRI is the way forward in this changing world that we live in. This
        service applies to small catering kitchens such as those used by
        home/event caterers and private chefs. However, if you sell food from a
        commercial catering establishment, such as a small restaurant or
        takeaway, this service could also apply to you.
      </p>
    </div>
    <!------------------------------------------------------------------------------------------------------>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <h2 class="text-3xl mb-1 font-semibold font-heading">What is VRI ?</h2>
      <p class="text-gray-400 leading-relaxed">
        A VRI, Virtual Remote Inspection, is simply a food safety inspection
        completed online by qualified food safety officers. It requires you to
        take a video of specific elements of your kitchen and upload the
        information, with all requested documentation. The video and
        documentation will be reviewed and an inspection report emailed to you.
      </p>
    </div>
    <!------------------------------------------------------------------------------------------------------>

    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      <h2 class="text-3xl mb-1 font-semibold font-heading">
        Why do I need a VRI ?
      </h2>
      <div class="flex">
        <ul class="ml-6 text-gray-400 text-justify list-disc">
          <li>To ensure you sell safe food.</li>
          <li>To ensure you comply with current food safety regulations.</li>
          <li>
            To ensure everything is in place before your food safety officer
            visit your kitchen.
          </li>
          <li>
            To ensure you receive the highest Food Hygiene Rating Scheme (FHRS)
            award.
          </li>
        </ul>
      </div>
    </div>
    <!---------------------------------------------------------------------------->

    <!---------------------------------------------------------------------------->
    <!-- <section class="py-4 px-2">
      <div class="w-full max-w-5xl mx-auto text-center">
       
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          Virtual Remote Inspection(VRI) with an inspection report.
        </h2>
        
        <button
          class="
            inline-block
            mt-6
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
          Purchase for £ 60.00
        </button>
      </div>
    </section> -->

    <!-- <section class="py-4 px-2">
      <div class="w-full max-w-5xl mx-auto text-center">
        
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          Virtual Remote Inspection(VRI) and Safer Food Better Business Pack
          completion coaching.
        </h2>
       
        <button
          class="
            inline-block
            mt-6
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
          Purchase for £ 100.00
        </button>
      </div>
    </section> -->

    <div class="container mx-auto px-4 bottom-0 p-4 mt-3">
      <h2 class="text-3xl mb-2 font-semibold font-heading">
        How much does it cost?
      </h2>
      <p class="mb-2 text-gray-800 leading-relaxed">
        All our Fee are noted in
        <nuxt-link to="/fees" class="text-purple-800">Fees</nuxt-link>. Select
        Option 2 or 4.
      </p>
      <p class="text-gray-800 leading-relaxed">
        If you require further assistance or advice, do not hesitate to
        <nuxt-link to="/contactus" class="text-purple-800"
          >contact us</nuxt-link
        >
        with your enquiry.
      </p>
    </div>

    <section>
      <div class="w-full max-w-5xl mx-auto text-center px-2 py-4">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          VRI inspection with inspection report
        </h2>
        <Nuxt-Link to="/VRI_FORM"
          ><button
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
            Purchase for £60
          </button></Nuxt-Link
        >
      </div>
    </section>

    <section>
      <div class="w-full max-w-5xl mx-auto text-center px-2 py-4">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          VRI inspection and Safer Food Better Business Pack coaching
        </h2>
        <Nuxt-Link to="/VRI_FORM2"
          ><button
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
            Purchase for £110
          </button></Nuxt-Link
        >
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

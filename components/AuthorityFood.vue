<template>
  <section>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-6">
      
      <p class="text-gray-400 leading-relaxed">
        Before you can trade as a home/event caterer or a private chef, you must
        register with your local authority. Ideally, this should be done at
        least 28 days before trading. If you have already started trading
        without registering, you must do so as soon as possible.
      </p>
    </div>

    <div class="container mx-auto px-4 bottom-0 p-4">
      <!-- <h2 class="text-3xl mb-2 font-semibold font-heading">
        Why train with eKatering?
      </h2> -->
      <p class="text-gray-400 leading-relaxed">
        You will need to register your home/event and private chef catering
        business if you:
      </p>
      <div class="flex">
        <ul class="ml-6 text-gray-400 text-justify list-disc">
          <li>sell food (anything sold for consumption)</li>
          <li>cook food</li>
          <li>store or handle food</li>
          <li>prepare food</li>
          <li>distribute food</li>
        </ul>
      </div>
      <p class="mt-4 text-gray-400 leading-relaxed font-bold underline">
        You may be fined, imprisoned for up to 2 years, or both if you run a
        food business without registering.
      </p>
    </div>
    <!---------------------------------------------------------------------------->
    <div class="container mx-auto px-4 bottom-0 p-4 mt-2">
      <h2 class="text-3xl mb-2 font-semibold font-heading">Registration</h2>
      <p class="text-gray-400 leading-relaxed">
        This service is free. Simply follow the Food Standard Agency (FSA) link
        below and enter your postcode. This will take you directly to your local
        authority registration page. Once on the food registration page,
        complete the Food Registration form online and submit it.
      </p>
    </div>
    <!---------------------------------------------------------------------------->
    <!---------------------------------------------------------------------------->
    <div class="container mx-auto px-4 bottom-0 p-4 mt-2">
      <h2 class="text-3xl mb-2 font-semibold font-heading">
        FSA food registration link:
      </h2>
      <p class="mb-4 text-purple-800 leading-relaxed">
        <a
          href="https://www.gov.uk/food-business-registration
"
          >https://www.gov.uk/food-business-registration</a
        >
      </p>
      <p class="mb-4 text-gray-400 leading-relaxed">
        If you require further assistance or advice, do not hesitate to
        <Nuxt-Link to="/contactus">
          <span class="text-purple-900">contact us</span></Nuxt-Link
        >
        with your enquiry.
      </p>
      <!-- <p class="mb-2 text-gray-800 leading-relaxed">
        All our Fee are noted in
        <nuxt-link to="/fees" class="text-purple-800">Fees</nuxt-link>. Select
        Option 1.
      </p> -->
    </div>
    <!---------------------------------------------------------------------------->
    <section>
      <div class="w-full max-w-5xl mx-auto text-center px-2 py-4">
        <!-- <span class="text-sm font-semibold">TAGLINE</span> -->
        <h2 class="text-3xl mt-4 leading-tight font-semibold font-heading">
          Registration advise and completion with a local authority
        </h2>
        <Nuxt-Link to="/localauth-form"
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
            Purchase for £ 20.00
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

<template>
  <section>
    <!------------------------------------------------------------------------------------------------------>
    <div class="container mx-auto px-4 bottom-0 p-4 mt-3 overflow-x-scroll">
      <h2 class="md:text-3xl text-2xl mb-8 font-semibold font-heading text-center">Fees</h2>
      <!-- <p class="text-xl text-center font-bold m-5">Fees</p> -->
      <div
        class="
          text-center text-xl
          rounded-t-lg
          px-4
          py-3
          w-5/6
          mx-auto
          bg-gray-200
          text-gray-800
          font-bold
          border border-gray-500
        "
      >
        Food Business, Event/Home caterers and Private chefs to customers
      </div>
      <table
        class="w-5/6 mx-auto bg-gray-200 text-gray-800 border border-gray-500 "
      >
        <tr class="text-left border-b-2 border-gray-500">
          <th class="px-4 py-3 font-bold w-1/12">Option</th>
          <th class="px-4 py-3 font-bold w-5/12">Service</th>
          <th class="px-4 py-3 font-bold w-3/12">Fee (£)</th>
          <th class="px-4 py-3 font-bold w-3/12"></th>
        </tr>

        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">1</td>
          <td class="px-4 py-3">
            Local authority food <br />registration form advise and completion.
          </td>
          <td class="px-4 py-3">£20</td>
          <td class="px-4 py-3 text-purple-600">
            <Nuxt-Link to="/localauth-form"> Purchase</Nuxt-Link>
          </td>
        </tr>
        <!-- each row -->
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">2</td>
          <td class="px-4 py-3">
            Virtual remote (VRI) <br />inspection with an inspection report.
          </td>
          <td class="px-4 py-3">£60</td>
          <td class="px-4 py-3 text-purple-600">
            <Nuxt-Link to="/VRI_FORM">Purchase</Nuxt-Link>
          </td>
        </tr>
        <!-- each row -->
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">3</td>
          <td class="px-4 py-3">
            Safer Food Better <br />Business Pack coaching<br />
            and completion.
          </td>
          <td class="px-4 py-3">£60</td>
          <td class="px-4 py-3 text-purple-600">
            <Nuxt-Link to="/SAFER_FOOD_FORM">Purchase</Nuxt-Link>
          </td>
        </tr>
        <!-- each row -->
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">4</td>
          <td class="px-4 py-3">
            Virtual/remote (VRI) <br />inspection and Safer Food<br />
            Better Business Pack coaching and completion.
          </td>
          <td class="px-4 py-3">£110</td>
          <td class="px-4 py-3 text-purple-600">
            <Nuxt-Link to="/VRI_FORM2">Purchase</Nuxt-Link>
          </td>
        </tr>
        <!-- each row -->
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">5</td>
          <td class="px-4 py-3">
            Coaching and completion <br />of a food allergen<br />
            assessment chart
          </td>
          <td class="px-4 py-3">£5 per product</td>
          <td class="px-4 py-3">
            <nuxt-link to="/contactus" class="text-purple-600"
              >Contact us</nuxt-link
            >
          </td>
        </tr>
        <!-- each row -->
      </table>
      <div
        class="
          text-center text-xl
          px-4
          py-3
          w-5/6
          mx-auto
          bg-gray-200
          text-gray-800
          font-bold
          border border-gray-500
        "
      >
        Food Business and Home caterers to business
      </div>
      <table
        class="w-5/6 mx-auto bg-gray-200 text-gray-800 border border-gray-500"
      >
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3 w-1/12">6</td>
          <td class="px-4 py-3 w-5/12">
            Full HACCP documentation <br />with monitoring template forms.
          </td>
          <td class="px-4 py-3 w-3/12">
            From £450 for one product<br />
            From £800 for two products
          </td>
          <td class="px-4 py-3 w-3/12">
            <nuxt-link to="/food-sms-form" class="text-purple-600"
              >Contact us</nuxt-link
            >
          </td>
        </tr>
        <!-- each row -->
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3">7</td>
          <td class="px-4 py-3">
            Visit to the manufacturing site <br />with full HACCP documentation
            <br />and monitoring template forms.
          </td>
          <td class="px-4 py-3">
            From £700 for one product<br />
            From £450 for any additional product
          </td>
          <td class="px-4 py-3">
            <nuxt-link to="/food-sms-form-2" class="text-purple-600"
              >Contact us</nuxt-link
            >
          </td>
        </tr>

        <!-- each row -->
      </table>
      <!-- classic design -->
      <div
        class="
          text-center text-xl
          px-4
          py-3
          w-5/6
          mx-auto
          bg-gray-200
          text-gray-800
          font-bold
          border border-gray-500
        "
      >
        Legal Advice
      </div>
      <table
        class="w-5/6 mx-auto bg-gray-200 text-gray-800 border border-gray-500"
      >
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3 1/12">8</td>
          <td class="px-4 py-3 5/12">
            Food safety and <br />standard legal advice concerning
            <br />enforcement letters/ notices and actions.
          </td>
          <td class="px-4 py-3 3/12">From £50</td>
          <td class="px-4 py-3 3/12">
            <nuxt-link to="/legal-advice-form" class="text-purple-600"
              >Contact us</nuxt-link
            >
          </td>
        </tr>
      </table>
      <!-- classic design -->
      <!-- classic design -->
      <div
        class="
          text-center text-xl
          px-4
          py-3
          w-5/6
          mx-auto
          bg-gray-200
          text-gray-800
          font-bold
          border border-gray-500
        "
      >
        Food Standard – Manufacturers and Importers
      </div>
      <table
        class="w-5/6 mx-auto bg-gray-200 text-gray-800 border border-gray-500"
      >
        <tr class="bg-white border-b border-gray-500">
          <td class="px-4 py-3 1/12">9</td>
          <td class="px-4 py-3 5/12">
            Full review, assessment <br />and advice on documentation
            <br />procedure.
          </td>
          <td class="px-4 py-3 3/12">From £250</td>
          <td class="px-4 py-3 3/12">
            <nuxt-link to="/food-standard-form" class="text-purple-600"
              >Contact us</nuxt-link
            >
          </td>
        </tr>
      </table>
      <!-- classic design -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

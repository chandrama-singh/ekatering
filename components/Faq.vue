<template>
  <section class="overflow-hidden">
    <img
      class="right-img absolute mx-auto right-0 -mt-40 z-10"
      src="@/assets/h3.png"
      alt=""
    />
    <section class="text-gray-700">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              text-center
              title-font
              text-gray-900
              mb-4
            "
          >
            Frequently Asked Questions
          </h1>
          <!-- <p class="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
            He legged it plastered cheeky loo what a plonker some dodgy chav a
            barney wellies, gutted mate quaint.
          </p> -->
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="w-full">
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                What is eKatering?
              </summary>

              <span class="pl-4">
                eKatering is the first mobile app designed for home/ event and private chef catering businesses. The eKatering app reassures customers that food purchased from home/ event and private chef has been prepared in a clean and safe kitchen that complies with current food safety regulations.
                <br />
                It also provides a one-stop online shop offering food safety and food standard consultation and training services for all catering and manufacturing food businesses. It is a holistic business that focuses on food safety and standard to ensure food purchased is safe for human consumption.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                What is the difference between eKatering and other food ordering
                platforms?
              </summary>

              <span>
               Unlike other food ordering platforms, eKatering provides food safety consultation and training services to assist caterers and private chefs to successfully open and run a food business whiles complying with food safety and food standard regulations. This ensures that customers can be confident that their food is being prepared and cooked in hygienic kitchens and the food they consume is safe.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Does eKatering take a commission on my orders?
              </summary>

              <span>
                No. Unlike other food ordering platforms that charge up to 35% commission on each order, eKatering charges 0% commission on orders. <b>YOU GET TO KEEP ALL YOUR PROFIT ON ORDERS.</b>
              </span>
            </details>
          </div>
          <div class="w-full">
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                What do I need to join the eKatering platform?
              </summary>

              <span class="px-4 py-2">
                <span class="font-bold">You need to:</span>
                <ul class="pl-10 list-disc">
                  <li>
                    Be registered with your local authority – you need to provide evidence of this e.g. an acknowledgement letter or email from the local authority.
                  </li>
                  <li>
                    When inspected by your local authority, have a minimum award of Food Hygiene Rating Scheme (FHRS) of 3 in your last inspection.
                  </li>
                  <li>
                   Provide a FHRS letter from your local authority with your rating.
                  </li>
                </ul>
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How much is it to register on the eKatering platform?
              </summary>

              <span class="px-4 py-2">
                At registration, you are required to submit a few pieces of documentation. Checks will be done to verify all documentation. The fee for this check is your registration fee. This is a one-time charge of £49.99.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Once I am trading on the eKatering platform, what charges am I
                subject to?
              </summary>

              <span class="px-4 py-2">
               The only charge you will be subject to will be a monthly subscription charge of £19.99.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Who pays me for my food or service?
              </summary>

              <span class="px-4 py-2">
                The ordering customer pays you directly on the eKatering app.  eKatering does not get involved with your payment. It is between you and the customer. eKatering does not take a penny from your orders.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How can eKatering help me with my home/event and private chef
                catering business?
              </summary>

              <span class="px-4 py-2">
                The eKatering platform is the only food ordering platform specifically designed for home/event caterers and private chefs. eKatering will give your business exposure, increase customer orders, assist you in complying with all food regulations and not take any commission from your food orders. <b>EVERY PENNY YOU MAKE ON ORDERS YOU GET TO KEEP.</b>
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How does delivery work?
              </summary>

              <span class="px-4 py-2">
                Most home/event caterers and private chefs prefer to deliver food directly to customers without the use of delivery drivers to reduce cost. Some will give the consumer the option to collect and not charge for delivery. So, the decision is yours.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                I am not registered with a local authority, what can I do?
              </summary>

              <span class="px-4 py-2">
                Go to: eKatering Consultation – <nuxt-link to="/authorityfood" class="text-purple-800">Food Registration</nuxt-link>
                  
                
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                I have completed and submitted my local authority food registration form, but I am still awaiting inspection. Can I join the platform?
              </summary>

              <span class="px-4 py-2">
                Yes, you can. But you must pay for a remote inspection in the consultation service and comply with all report requirements and achieve an eKatering award of 3 before you can join the platform. This will also give you an indication of what FHRS award you may be given by your local authority inspector. Remember, eKatering cannot guarantee this, as ratings are awarded based on findings at the time of the inspection.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Can eKatering assist me before my local authority inspection by
                the food inspector?
              </summary>

              <span class="px-4 py-2">
                Yes, look at the different eKatering services provided under
                consultation and training:
                <ul class="pl-10 list-disc">
                  <li>
                    eKatering Consultation – 
                    <nuxt-link to="/consultation/consultancy" class="text-purple-800">Consultation </nuxt-link>
                  </li>
                  <li>
                    eKatering Training – <nuxt-link to="/training" class="text-purple-800">Training</nuxt-link>
                  </li>
                </ul>
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                What is the minimum Food Hygiene Rating Scheme (FHRS) award do I need to join the platform?
              </summary>

              <span class="px-4 py-2">
                The minimum FHRS award you need is 3 – Satisfactory.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                My FHRS award is below 3 what can I do?
              </summary>

              <span class="px-4 py-2">
                You can request your local authority to do a rerating visit. Some local authorities charge for this service. We strongly recommend you use our <nuxt-link to="/consultation/consultancy" class="text-purple-800">Consultation </nuxt-link> service before approaching your local authority for a rerating inspection. We will be able to ensure you have everything in place before the rerating inspection.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                I want to improve my FHRS award, what can I do?
              </summary>

              <span class="px-4 py-2">
                Have a look at our different <nuxt-link to="/consultation/consultancy" class="text-purple-800">Consultation </nuxt-link> services. To improve
                your award, we recommend you opt for Option 2 or 4 under <Nuxt-Link to="/fees" class="text-purple-800"> Fees.</Nuxt-Link>
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                I have met all the criteria to join the eKatering platform what
                next?
              </summary>

              <span class="px-4 py-2">
                Go to the <Nuxt-Link to="/plans" class="text-purple-800"> JOIN US</Nuxt-Link> and follow the steps.
              </span>
            </details>
            <details class="mb-4 cursor-pointer">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Do I need to be a home/ event caterer or a private chef to use the consultation and training services provided by eKatering?
              </summary>

              <span class="px-4 py-2">
               No. The <nuxt-link to="/consultation/consultancy" class="text-purple-800">Consultation </nuxt-link> and <nuxt-link to="/training" class="text-purple-800">Training</nuxt-link> services provided by eKatering is tailored for all food businesses and not just for home/event caterers and private chef.
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

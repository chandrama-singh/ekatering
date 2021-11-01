<template>
  <section class="py-10 bg-white">
      <div class="min-h-screen flex items-center justify-center px-4">
    
    <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl border-2 border-purple-400">
        <div class="p-4 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-2xl font-semibold">
                Office Use only
            </h2>
            <p class="text-sm text-white">
                Ref: #025/2020
            </p>
        </div>
        <div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Business Name
                </p>
                 <input
                      placeholder="Business Name"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Business Trading Address
                </p>
                 <input
                      placeholder="Business Trading Address"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Food Business Owner contact number
                </p>
                 <input
                      placeholder="Food Business Owner contact number"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
            </div>
             <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Food Business Email
                </p>
                 <input
                      placeholder="Food Business Email"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-10
                        px-4
                      "
                      required="required"
                      type="email"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
            </div>
            <div class="p-3 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-xl ">
                Type of Business
            </h2>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Home caterer
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Private Chef
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Event Caterer
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Take away
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Restaurant
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="p-3 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-xl ">
                Type of cuisine(e.g. English,  Asian, Chinese, African)
            </h2>
        </div>
         <div class="md:grid md:grid-cols-1 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <textarea
                      placeholder="Type of cuisine(e.g. English,  Asian, Chinese, African)"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-20
                        px-4
                      "
                      required="required"
                      type="text"
                     rows="8"
                    ></textarea>
            </div>
            <div class="p-3 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-xl ">
                Menu(e.g.state dishes for starters, main, dessert)
            </h2>
        </div>
         <div class="md:grid md:grid-cols-1 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <textarea
                      placeholder="Menu(e.g.state dishes for starters, main, dessert)"
                      class="
                        appearance-none
                        block
                        w-full
                        bg-grey-lighter
                        text-grey-darker
                        border border-grey-lighter
                        rounded-lg
                        h-20
                        px-4
                      "
                      required="required"
                      type="text"
                     rows="8"
                    ></textarea>
            </div>
        <!--------------------------------------->
    <div class="p-3 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-xl ">
                Delivery options for home caterers only
            </h2>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Frozen only
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Chilled only
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Hot only
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Ambient
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   All
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="p-3 border-b flex justify-between bg-purple-400 text-white">
            <h2 class="text-xl ">
                Private chefs/ Event Caterers/ Restaurants/Take away only
            </h2>
        </div>
        <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Cold display service
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Hot holding service
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                    Plating 
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <p class="text-gray-600 ">
                   Delivery
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b-2 border-purple-400">
                <p class="text-gray-600 ">
                   All
                </p>
                <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="radio" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            </div>
             <div class="p-4 border-b flex justify-center py-6">
            <button type="submit"
                            class="mr-4 inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md   text-white bg-gray-600 hover:bg-gray-700 ">
                            Reset
                        </button>
                        <button type="submit"
                            class="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md  bg-indigo-600 hover:bg-indigo-700 text-white">
                            Submit
                        </button>
        </div>
        </div>
    </div>

</div>
  </section>

</template>

<script>
export default {

}
</script>

<style>

</style>
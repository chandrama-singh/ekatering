<template>
  <div class=""> 
      <Header/>
    
      <Slider/>

      <Work/>
      <CustomerCategory />
      <Facilities/>
      <Features />
      <!-- <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full lg:w-1/2 px-3">
              <div class="max-w-sm">
                <span class="text-sm text-blueGray-400">Contact Us</span>
                <h2 class="mt-2 text-4xl font-bold font-heading">We will be glad to hear from you!</h2>
              </div>
              <div class="mt-10 lg:mt-24">
                <div class="mb-10 leading-relaxed">
                  <h3 class="text-sm text-blueGray-400">Phone</h3>
                  <p>+ 48 654-430-309</p>
                </div>
                <div class="mb-10 leading-relaxed">
                  <h4 class="text-sm text-blueGray-400">E-mail</h4>
                  <p>info@metis.com</p>
                </div>
                <div class="mb-10 leading-relaxed">
                  <h4 class="text-sm text-blueGray-400">Address</h4>
                  <p>11567 E Broadview Dr</p>
                  <p>Kiowa, Colorado(CO), 80117</p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-3">
              <form>
                <div class="mb-4 text-sm">
                  <span class="mr-4 font-semibold">Departament:</span>
                  <label class="mr-4">
                    <input class="mr-1" type="radio" name="department" value="1" checked="">
                    <span>Support</span>
                  </label>
                  <label>
                    <input class="mr-1" type="radio" name="department" value="2">
                    <span>Sales</span>
                  </label>
                </div>
                <div class="mb-4">
                  <input class="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject">
                </div>
                <div class="mb-4">
                  <input class="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name">
                </div>
                <div class="mb-4">
                  <input class="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com">
                </div>
                <div class="mb-4"><textarea class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Message..."></textarea></div>
                <div class="mb-4">
                  <label class="flex px-2 bg-blueGray-50 rounded">
                    <input class="hidden" type="file" placeholder="Choose file.." name="Choose file">
                    <div class="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">Browse</div>
                  </label>
                </div>
                <div class="flex justify-between items-center">
                  <label>
                    <input class="mr-1" type="checkbox" name="terms" value="1">
                    <span class="text-sm font-semibold">I agree to terms and conditions.</span>
                  </label>
                  <button class="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> -->
    
      <!-- <section class="py-20 bg-blueGray-800">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap justify-center items-center -mx-3">
            <div class="w-full lg:w-1/2 px-3 mb-8 text-center lg:text-left">
              <h2 class="text-3xl mb-4 lg:text-4xl text-white font-bold font-heading">
                <span>Lorem ipsum</span>
                <span class="text-blue-600">dolor sit</span>
                <span>amet, consectetur adipiscing.</span>
              </h2>
              <p class="text-blueGray-500">Integer felis tellus, rhoncus ac pulvinar vitae.</p>
            </div>
            <div class="w-full lg:w-1/2 px-3">
              <div class="flex flex-wrap max-w-lg mx-auto">
                <div class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-800 border border-blueGray-500 rounded">
                  <svg class="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input class="w-full pl-3 px-3 py-4 text-xs text-white placeholder-white font-semibold bg-blueGray-800 outline-none" type="text" placeholder="Type your e-mail">
                </div>
                <button class="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <Subscribe />
      <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Work from '../components/Work.vue'
import CustomerCategory from '../components/CustomerCategory.vue'
import Facilities from '../components/Facilities.vue'
import Features from '../components/Features.vue'
import Subscribe from '../components/Subscribe.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { 
    Subscribe,
    Header,
    Slider,
    Work,
    CustomerCategory,
    Facilities,
    Features,
    Footer,

  },}

</script>

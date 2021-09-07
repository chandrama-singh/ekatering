<template>
  <div class=""> 
    
      <section>
        <div class="container px-4 mx-auto">
          <nav class="flex items-center py-6">
            <a class="text-3xl font-semibold leading-none" href="#">
              <img class="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto">
            </a>
            <div class="lg:hidden ml-auto">
              <button class="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul class="hidden lg:flex items-center space-x-12 ml-auto mr-12">
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page1">Home</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page2">Director Message</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page3">About Us</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page4">Time Table</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page5">Download</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="/page6">Admission</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Contact</a></li>
            </ul>
            <div class="hidden lg:block"><a class="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a><a class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a></div>
          </nav>
        </div>
        <div class="hidden navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-semibold leading-none" href="#">
                <img class="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto">
              </a>
              <button class="navbar-close">
                <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Home</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Director Message</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Time Table</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"  href="#">Download</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Time Table</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Admission</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Time Table</a></li>
              </ul>
              <div class="mt-4 pt-6 border-t border-blueGray-100"><a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a class="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
            </div>
            <div class="mt-auto">
              <p class="my-4 text-xs text-blueGray-400">
                <span>Get in Touch</span>
                <a class="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
              </p>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/facebook-blue.svg" alt="">
              </a>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/twitter-blue.svg" alt="">
              </a>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/instagram-blue.svg" alt="">
              </a>
            </div>
          </nav>
        </div>
      </section>
    
      <section class="pb-8 bg-top bg-cover bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=450&amp;q=80&amp;blend=1e293b&amp;sat=30&amp;blend-mode=multiply')">
        <div class="container px-4 mx-auto">
          <nav class="flex justify-between items-center py-6">
            <a class="text-3xl text-white font-semibold leading-none" href="#">
              <img class="h-10" src="metis-assets/logos/metis/metis-light-name.svg" alt="" width="auto">
            </a>
            <div class="lg:hidden">
              <button class="navbar-burger flex items-center py-2 px-3 text-blueGray-100 hover:text-blueGray-200 rounded border border-blueGray-200 hover:border-blueGray-300">
                <svg class="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li><a class="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Product</a></li>
              <li><a class="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Company</a></li>
              <li><a class="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">About Us</a></li>
              <li><a class="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Features</a></li>
            </ul>
            <div class="hidden lg:block"><a class="mr-2 inline-block px-4 py-3 text-xs text-blueGray-100 hover:text-blueGray-200 font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Log In</a><a class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a></div>
          </nav>
          <div class="py-12 text-center">
            <div class="max-w-lg mx-auto mb-8">
              <h2 class="text-3xl md:text-4xl mb-4 text-white font-bold font-heading">
                <span>The quick</span>
                <span class="text-blue-600">brown fox</span>
                <span>jumps over the lazy dog.</span>
              </h2>
              <p class="text-blueGray-400 leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div><a class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Check Now</a><a class="block sm:inline-block py-4 px-8 text-xs text-blueGray-100 hover:text-blueGray-200 text-center font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Documentation</a></div>
          </div>
          <div class="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="metis-assets/logos/brands/tesla.svg" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="metis-assets/logos/brands/facebook.svg" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="metis-assets/logos/brands/marvel.svg" alt="">
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="metis-assets/logos/brands/nike.svg" alt="">
            </div>
            <div class="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
              <img class="mx-auto" src="metis-assets/logos/brands/airbnb.svg" alt="">
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-semibold leading-none" href="#">
                <img class="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto">
              </a>
              <button class="navbar-close">
                <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Product</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Company</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
              </ul>
              <div class="mt-4 pt-6 border-t border-blueGray-100"><a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a class="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
            </div>
            <div class="mt-auto">
              <p class="my-4 text-xs text-blueGray-400">
                <span>Get in Touch</span>
                <a class="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
              </p>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/facebook-blue.svg" alt="">
              </a>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/twitter-blue.svg" alt="">
              </a>
              <a class="inline-block px-1" href="#">
                <img src="metis-assets/icons/instagram-blue.svg" alt="">
              </a>
            </div>
          </nav>
        </div>
      </section>
    
      <section class="py-20">
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
      </section>
    
      <section class="py-20 bg-blueGray-800">
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
      </section>
    
      <section class="relative">
        <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
        <div class="container px-4 mx-auto">
          <div class="relative flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
              <a class="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none" href="#">
                <img class="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto">
              </a>
              <div class="mt-12 mb-16 lg:my-24">
                <p class="mb-4 text-xs text-blueGray-400 text-center lg:text-left">Subscribe and stay fully connected with product.</p>
                <div class="flex flex-wrap lg:flex-nowrap items-center">
                  <div class="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                    <svg class="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input class="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail">
                  </div>
                  <button class="w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Sign Up</button>
                </div>
              </div>
              <div class="hidden lg:block">
                <p class="text-xs text-blueGray-400">&copy; 2020. All rights reserved.</p>
                <div class="-mx-2 mt-4">
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="">
                  </a>
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="">
                  </a>
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2 px-4 py-8 lg:py-40 lg:pl-12">
              <div class="flex flex-row flex-wrap justify-around mb-12">
                <div class="w-1/2 lg:w-auto mb-12">
                  <h5 class="mb-6 text-lg font-bold font-heading">Store</h5>
                  <ul class="space-y-3">
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Third Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Fourth Link</a></li>
                  </ul>
                </div>
                <div class="w-1/2 lg:w-auto mb-12">
                  <h5 class="mb-6 text-lg font-bold font-heading">About</h5>
                  <ul class="space-y-3">
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Third Link</a></li>
                  </ul>
                </div>
                <div class="w-full lg:w-auto mb-4">
                  <h5 class="mb-6 text-lg font-bold font-heading">Catalog</h5>
                  <ul class="space-y-3">
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                    <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                  </ul>
                </div>
              </div>
              <div class="lg:hidden text-center">
                <p class="text-xs text-blueGray-400">&copy; 2020. All rights reserved.</p>
                <div class="-mx-2 mt-4">
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="">
                  </a>
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="">
                  </a>
                  <a class="inline-block px-2" href="#">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {}
</script>

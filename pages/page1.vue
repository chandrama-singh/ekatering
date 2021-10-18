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
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Home</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Director Message</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">About Us</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Time Table</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Download</a></li>
              <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Admission</a></li>
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

      <section class="pt-16 pb-20 bg-blueGray-50">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center mb-12">
            <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h2 class="text-4xl font-bold font-heading">
                <span>Make your</span>
                <span class="text-blue-600">life easier</span>
                <span>for marketing sales and customer support</span>
              </h2>
            </div>
            <div class="w-full lg:w-1/2">
              <p class="lg:pl-16 text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing. Dolor sit amet consectetur adipisicing elit. Aliquid harum ducimus adipisci animi quidem nesciunt similique ex enim accusantium voluptate. Consectetur adipisicing harum ducimus adipisci.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 -mb-6">
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                <svg class="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
                <h3 class="mb-2 font-bold font-heading">Category Example</h3>
                <p class="text-sm text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                <svg class="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                </svg>
                <h3 class="mb-2 font-bold font-heading">Category Example</h3>
                <p class="text-sm text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                <svg class="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h3 class="mb-2 font-bold font-heading">Category Example</h3>
                <p class="text-sm text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                <svg class="w-10 h-10 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <h3 class="mb-2 font-bold font-heading">Category Example</h3>
                <p class="text-sm text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-3">
            <div class="w-full lg:w-1/2 px-3">
              <div class="py-12">
                <div class="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 class="text-3xl md:text-4xl mb-4 font-bold font-heading">
                    <span>The quick</span>
                    <span class="text-blue-600">brown fox</span>
                    <span>jumps over the lazy dog.</span>
                  </h2>
                  <p class="text-blueGray-400 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi.</p>
                </div>
                <div class="text-center lg:text-left"><a class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Check Now</a><a class="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Documentation</a></div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
              <div class="lg:h-128 flex items-center justify-center">
                <img class="lg:max-w-lg" src="metis-assets/illustrations/work-tv.png" alt="">
              </div>
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
                <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      <section class="py-12 md:py-32 overflow-x-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap lg:flex-nowrap">
            <div class="w-full lg:w-1/2">
              <div class="py-6 lg:pr-32">
                <div class="mb-4">
                  <span class="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Lorem ipsum</span>
                  <h2 class="text-4xl mt-3 font-bold font-heading">Key Features</h2>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Easy to customize</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Flexible software</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Best access for all of the resources</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2 my-12 lg:my-0">
              <img class="relative mx-auto rounded-xl w-full z-10" src="https://images.unsplash.com/photo-1536940135352-b4b3875df888?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=1050&amp;q=80" alt="">
              <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt="">
              <img class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="metis-assets/elements/blob-tear.svg" alt="">
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-32 overflow-x-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap lg:flex-nowrap">
            <div class="relative w-full lg:w-1/2 order-1 lg:order-0 my-12 lg:my-0">
              <img class="relative mx-auto rounded-xl w-full z-10" src="https://images.unsplash.com/photo-1484308129484-ff3063eea281?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;q=80" alt="">
              <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="metis-assets/elements/blob-tear.svg" alt="">
              <img class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="metis-assets/elements/blob-tear.svg" alt="">
            </div>
            <div class="w-full lg:w-1/2 lg:order-1">
              <div class="py-6 lg:pl-32">
                <div class="mb-4">
                  <span class="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Lorem ipsum</span>
                  <h2 class="text-4xl mt-3 font-bold font-heading">Key Features</h2>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Easy to customize</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Flexible software</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
                <div class="flex items-start py-4">
                  <div class="w-8 mr-5 text-blue-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="mb-2 text-xl font-semibold font-heading">Best access for all of the resources</h3>
                    <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-20 pb-20 lg:pb-12 overflow-x-hidden">
        <div class="flex flex-wrap">
          <div class="flex order-1 lg:order-0 w-full lg:w-1/2 lg:h-128 lg:max-w-lg lg:ml-auto px-4 lg:pr-24 xl:pr-4">
            <div class="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
              <h2 class="text-3xl md:text-4xl mb-4 font-bold font-heading">
                <span>Make your</span>
                <span class="text-blue-600">life easier</span>
                <span>for marketing sales and customer support</span>
              </h2>
              <p class="text-blueGray-400 leading-loose mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
              <a class="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Learn more</a>
            </div>
          </div>
          <div class="relative order-0 lg:order-1 w-full lg:w-1/2 px-4 lg:h-128">
            <div class="relative lg:absolute right-0 top-0 lg:max-w-6xl mx-auto lg:-mr-64">
              <img class="lg:h-128" src="metis-assets/elements/macbook.png" alt="">
              <div class="absolute" style="top: 5.8%; left: 14.6%; width: 72.8%; height: 76.8%;">
                <img class="object-cover w-full h-full" src="metis-assets/placeholders/metis-dashboard-square.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-top bg-no-repeat" style="background-image: url('metis-assets/elements/blob.svg');">
        <div class="container px-4 mx-auto">
          <div class="relative py-20 px-4 lg:p-20">
            <div class="absolute top-0 left-0 -mt-8">
              <img class="h-16" src="metis-assets/elements/dots-left.svg" alt="">
            </div>
            <div class="max-w-lg mx-auto text-center">
              <h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading">
                <span>Lorem ipsum</span>
                <span class="text-blue-600">dolor sit</span>
                <span>amet, consectetur adipiscing.</span>
              </h2>
              <p class="mb-8 text-blueGray-400">Integer felis tellus, rhoncus ac pulvinar vitae.</p>
              <div class="flex flex-wrap max-w-md mx-auto">
                <div class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                  <svg class="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input class="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail">
                </div>
                <button class="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Sign Up</button>
              </div>
            </div>
            <div class="absolute bottom-0 right-0">
              <img class="h-16" src="metis-assets/elements/dots-right.svg" alt="">
            </div>
          </div>
        </div>
      </section>

      <section class="pt-8 pb-2 bg-blueGray-50">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="p-8 bg-white text-center shadow rounded">
                <svg class="w-12 h-12 mx-auto mb-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="mb-2 text-xs md:text-base text-blueGray-400">Followers</p>
                <span class="text-3xl lg:text-4xl font-bold font-heading">250 324</span>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="p-8 bg-white text-center shadow rounded">
                <svg class="w-12 h-12 mx-auto mb-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                </svg>
                <p class="mb-2 text-xs md:text-base text-blueGray-400">Solved Problems</p>
                <span class="text-3xl lg:text-4xl font-bold font-heading">6 510</span>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="p-8 bg-white text-center shadow rounded">
                <svg class="w-12 h-12 mx-auto mb-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                <p class="mb-2 text-xs md:text-base text-blueGray-400">Happy Customers</p>
                <span class="text-3xl lg:text-4xl font-bold font-heading">14 350</span>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div class="p-8 bg-white text-center shadow rounded">
                <svg class="w-12 h-12 mx-auto mb-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p class="mb-2 text-xs md:text-base text-blueGray-400">Projects</p>
                <span class="text-3xl lg:text-4xl font-bold font-heading">149 324</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-20 pb-12 md:pb-8">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Easy to customize</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Outstanding look</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Flexible software</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Key Elements</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Easy to customize</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Outstanding look</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Flexible software</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Ouststanding look</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 md:mb-12">
              <div class="flex items-start">
                <div class="mr-6 p-3 bg-blue-600 rounded-full text-white">
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
                <div class="mt-4">
                  <h3 class="mb-3 text-xl font-semibold font-heading">Key Elements</h3>
                  <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
              </div>
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

      <section class="py-20 bg-blueGray-50">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 class="text-3xl md:text-4xl font-bold font-heading">
                <span>Make your</span>
                <span class="text-blue-600">life easier</span>
                <span>for marketing sales and customer support</span>
              </h2>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-16">
              <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 -mb-6 text-center">
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div class="p-12 bg-white shadow rounded">
                <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                <img class="h-48 mx-auto my-4" src="metis-assets/illustrations/work-tv.png" alt="">
                <h3 class="mb-2 font-bold font-heading">Donec fermentum</h3>
                <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div class="p-12 bg-white shadow rounded">
                <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                <img class="h-48 mx-auto my-4" src="metis-assets/illustrations/people-watching.png" alt="">
                <h3 class="mb-2 font-bold font-heading">Donec fermentum</h3>
                <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-3 mb-6">
              <div class="p-12 bg-white shadow rounded">
                <div class="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                <img class="h-48 mx-auto my-4" src="metis-assets/illustrations/financial-report.png" alt="">
                <h3 class="mb-2 font-bold font-heading">Donec fermentum</h3>
                <p class="text-sm text-blueGray-400 leading-relaxed">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container px-4 mx-auto text-center">
          <div class="max-w-lg mx-auto mb-12">
            <span class="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Our Team</span>
            <h2 class="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">Lorem ipsum dolor sit amet consectutar domor</h2>
            <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Anne Bailey</p>
              <p class="mt-2 mb-4 text-blue-600">CEO</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Danny Smith</p>
              <p class="mt-2 mb-4 text-blue-600">Head of Development</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Julie Smith</p>
              <p class="mt-2 mb-4 text-blue-600">Head of Operations</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Ian Bailey</p>
              <p class="mt-2 mb-4 text-blue-600">Senior Developer</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Danny Smith</p>
              <p class="mt-2 mb-4 text-blue-600">Head of Development</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Tom Jones</p>
              <p class="mt-2 mb-4 text-blue-600">Head of Operations</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Anne Smith</p>
              <p class="mt-2 mb-4 text-blue-600">Junior Developer</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
              <img class="h-64 w-64 mx-auto rounded object-cover object-top" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
              <p class="mt-6 text-xl">Julie Bailey</p>
              <p class="mt-2 mb-4 text-blue-600">Head of Development</p>
              <div class="flex py-1 justify-center space-x-2">
                <img src="metis-assets/icons/facebook.svg" alt="">
                <img src="metis-assets/icons/twitter.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 xl:bg-contain bg-top bg-no-repeat" style="background-image: url('metis-assets/backgrounds/intersect.svg');">
        <div class="max-w-7xl px-4 mx-auto">
          <div class="max-w-lg mx-auto mb-12 text-center">
            <img class="mx-auto" src="metis-assets/icons/quote.svg" alt="">
            <h2 class="my-2 text-3xl md:text-4xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar domor</h2>
            <p class="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full lg:w-1/3 px-3">
              <div class="p-8 mb-6 bg-white shadow rounded lg:opacity-25">
                <img src="metis-assets/icons/quote.svg" alt="">
                <p class="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
                  <div class="pl-4">
                    <p class="text-xl">Julie Brown</p>
                    <p class="text-blue-600">Head of Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-3">
              <div class="p-8 mb-6 bg-white shadow rounded">
                <img src="metis-assets/icons/quote.svg" alt="">
                <p class="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
                  <div class="pl-4">
                    <p class="text-xl">Julie Brown</p>
                    <p class="text-blue-600">Head of Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-3">
              <div class="p-8 mb-6 bg-white shadow rounded lg:opacity-25">
                <img src="metis-assets/icons/quote.svg" alt="">
                <p class="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
                  <div class="pl-4">
                    <p class="text-xl">Julie Brown</p>
                    <p class="text-blue-600">Head of Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex justify-center space-x-2">
            <button class="h-2 w-2 rounded-full bg-blueGray-300"></button>
            <button class="h-2 w-2 rounded-full bg-blueGray-300"></button>
            <button class="h-2 w-2 rounded-full bg-blue-500"></button>
            <button class="h-2 w-2 rounded-full bg-blueGray-300"></button>
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
export default {
   layout:"default",

}
</script>

<style>

</style>

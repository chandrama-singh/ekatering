<template>
  <div class="container mx-auto px-4"> 
    
      <nav class="flex flex-wrap items-center justify-between p-4">
        <div class="flex flex-shrink-0 mr-10"><a class="text-xl text-indigo-600 font-semibold font-heading" href="#">Dunder Mifflin</a></div>
        <div class="block lg:hidden">
          <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg class="fill-current h-3 w-3" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div class="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
          <div class="lg:mr-auto"><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Products</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Team</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">Customers</a><a class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">Blog</a></div>
          <div><a class="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-indigo-600" href="#">Sign in</a><a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Sign up</a></div>
        </div>
      </nav>
    
      <section class="text-center bg-cover" style="background-image: url('placeholders-2-0/pictures/work.jpg')">
        <div class="relative flex items-center py-32">
          <div class="absolute bg-black opacity-50 inset-0"></div>
          <div class="z-10 max-w-2xl mx-auto">
            <h2 class="text-5xl mb-8 leading-tight font-semibold font-heading text-white">No paper plane can be made without paper</h2>
            <a class="w-auto inline-block px-8 py-4 mt-auto leading-none text-white text-center bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Sign up for free</a>
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="w-full max-w-2xl mx-auto text-center">
          <span class="text-sm font-semibold">TAGLINE</span>
          <h2 class="text-5xl mt-4 mb-8 leading-tight font-semibold font-heading">No paper plane can be made without paper</h2>
          <form class="w-full max-w-xl mx-auto">
            <div class="flex flex-wrap mb-4">
              <div class="w-full md:w-2/3">
                <input class="appearance-none block w-full py-3 px-4 mb-4 md:mb-0 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none" type="text" placeholder="michael@dundermifflin.com">
              </div>
              <div class="w-full md:w-1/3">
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded md:rounded-l-none">Subscribe</button>
              </div>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">Dunder Mifflin Paper Productions is the way to provide your company an extraordinary paper, sold by extraordinary people.</p>
          </form>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <span class="text-sm font-semibold">TAGLINE</span>
            <h2 class="text-5xl mt-4 mb-6 leading-tight font-semibold font-heading">No paper plane can be made without paper</h2>
            <a class="text-lg text-indigo-600 hover:underline" href="#">Learn more &raquo;</a>
          </div>
          <div class="lg:w-1/2 px-2">
            <img src="placeholders-2-0/pictures/photocopy.svg" alt="">
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <h2 class="text-3xl text-center mb-12 font-semibold font-heading">Features of Dunder Mifflin copy paper</h2>
        <div class="flex flex-wrap -mx-4 mb-6">
          <div class="lg:w-1/4 px-4 mb-6">
            <svg class="text-indigo-600 w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <h3 class="text-xl my-3 font-semibold font-heading">High durability</h3>
            <p class="text-sm text-gray-400 leading-relaxed">Forget about paper jams with our increased stability product. Ideal for high-quality printing and photocopying.</p>
          </div>
          <div class="lg:w-1/4 px-4 mb-6">
            <svg class="text-indigo-600 w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            <h3 class="text-xl my-3 font-semibold font-heading">Versatility</h3>
            <p class="text-sm text-gray-400 leading-relaxed">Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.</p>
          </div>
          <div class="lg:w-1/4 px-4 mb-6">
            <svg class="text-indigo-600 w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <h3 class="text-xl my-3 font-semibold font-heading">Value-based price</h3>
            <p class="text-sm text-gray-400 leading-relaxed">The best combination of quality and economy comes with our paper. The offer includes wides ranges of density.</p>
          </div>
          <div class="lg:w-1/4 px-4 mb-6">
            <svg class="text-indigo-600 w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="text-xl my-3 font-semibold font-heading">Variety</h3>
            <p class="text-sm text-gray-400 leading-relaxed">The offer includes paper in wide range of density and sizes. Ideal for high-quality printing and photocopying.</p>
          </div>
        </div>
        <div class="text-center">
          <a class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded" href="#">Sign up for free</a>
          <p class="text-sm text-gray-400 mt-5">Your own Dunder Mifflin account will serve you in the wonderful voyage through our products.</p>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <h2 class="text-4xl text-center mb-4 font-semibold font-heading">Portfolio</h2>
        <p class="max-w-2xl mb-8 mx-auto text-center text-gray-400 leading-relaxed">Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper. That’s us - people who sell the limitless paper in the paperless world.</p>
        <div class="flex max-w-lg mb-12 mx-auto text-center border-b-2">
          <div class="w-1/3 pb-2 border-b-4 border-indigo-600">
            <button class="hover:text-indigo-600">All</button>
          </div>
          <div class="w-1/3 pb-2">
            <button class="hover:text-indigo-600">Customers</button>
          </div>
          <div class="w-1/3 pb-2">
            <button class="hover:text-indigo-600">Enterprise</button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-8">
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/work.jpg" alt="">
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/office.jpg" alt="">
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/work.jpg" alt="">
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/office.jpg" alt="">
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/work.jpg" alt="">
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <img class="rounded shadow" src="placeholders-2-0/pictures/office.jpg" alt="">
          </div>
        </div>
      </section>
    
      <section class="pt-8 px-4 pb-4">
        <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">Dunder Mifflin Family</h2>
        <p class="max-w-xl mb-8 text-gray-400">Because no great company could exist without accountants, sellers, stock workers, and of course - paper.</p>
        <div class="flex flex-wrap -mx-4 text-center">
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow">
              <img class="mx-auto mb-4" src="placeholders-2-0/pictures/female_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">Karen Filippelli</h3>
                <span>Regional Manager at Utica branch</span>
                <div class="flex justify-center space-x-6 py-3 my-4 mx-12 border-t border-b">
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                  </a>
                </div>
                <p>Started as a Sales representative at Stamford branch, moved to Scranton.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow">
              <img class="mx-auto mb-4" src="placeholders-2-0/pictures/male_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">Darryl Philbin</h3>
                <span>Marketing Director</span>
                <div class="flex justify-center space-x-6 py-3 my-4 mx-12 border-t border-b">
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                  </a>
                </div>
                <p>I started there as an Assistant and finally got a promotion to the Marketing Director.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow">
              <img class="mx-auto mb-4" src="placeholders-2-0/pictures/female_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">Kelly Kapoor</h3>
                <span>Customer Service</span>
                <div class="flex justify-center space-x-6 py-3 my-4 mx-12 border-t border-b">
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                  </a>
                </div>
                <p>I work for Dunder Mifflin for a few years now. I learned a lot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl text-center mb-12 font-semibold font-heading">Frequently Asked Questions</h2>
          <div class="p-4 mb-4 bg-gray-50 border">
            <div class="flex items-center w-full">
              <div class="flex-shrink-0">
                <svg class="text-indigo-600 w-12 h-12" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-grow ml-4">
                <h3 class="text-lg mb-1 font-semibold font-heading font-semibold">How does Dunder Mifflin paper differ from other products?</h3>
                <p>Paper produced with love, devotion, passion - is not the same paper. Our supplies are extra strong, and you’re going to need the paper-tear up-master to destroy just one sheet. It’s also suited for every available printer.</p>
              </div>
            </div>
          </div>
          <div class="p-4 mb-4 bg-gray-50 border">
            <div class="flex items-center w-full">
              <div class="flex-shrink-0">
                <svg class="text-indigo-600 w-12 h-12" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-grow ml-4">
                <h3 class="text-lg mb-1 font-semibold font-heading font-semibold">Why choose Dunder Mifflin instead of some huge paper producer?</h3>
                <p>You know that feeling when you are waiting on the phone for hours to contact your supplier? Sometimes they even have a waiting time music prepared for that. In Dunder Mifflin, you can get help immediately, and each of our customers receives an individual assistant. For us, companies are people - not numbers, so we take care of each of them.</p>
              </div>
            </div>
          </div>
          <div class="p-4 mb-4 bg-gray-50 border">
            <div class="flex items-center w-full">
              <div class="flex-shrink-0">
                <svg class="text-indigo-600 w-12 h-12" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-grow ml-4">
                <h3 class="text-lg mb-1 font-semibold font-heading font-semibold">How long does it take to finalize the deal?</h3>
                <p>The whole process depends on your decision. If you sign the contract immediately, we can start official cooperation in the next two business days.</p>
              </div>
            </div>
          </div>
          <div class="p-4 mb-4 bg-gray-50 border">
            <div class="flex items-center w-full">
              <div class="flex-shrink-0">
                <svg class="text-indigo-600 w-12 h-12" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-grow ml-4">
                <h3 class="text-lg mb-1 font-semibold font-heading font-semibold">Do you offer bargains for regular clients?</h3>
                <p>Thank you for asking, great question! We highly value long-term relationships with our clients, and that’s why we regularly thank them for their trust by giving significant discounts. Moreover, we offer a 10% rebate for every new customer! For more information, please contact our HQ in Scranton.</p>
              </div>
            </div>
          </div>
          <div class="text-center mt-12"><a class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">See all questions</a></div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl text-center mb-6 font-semibold font-heading">Frequently Asked Questions</h2>
          <div class="p-4 mb-2 border-b">
            <button class="flex items-center w-full text-left">
              <span class="text-2xl mr-4">-</span>
              <span class="flex-grow font-semibold">How does Dunder Mifflin paper differ from other products?</span>
            </button>
            <p class="mt-2">Paper produced with love, devotion, passion - is not the same paper. Our supplies are extra strong, and you’re going to need the paper-tear up-master to destroy just one sheet. It’s also suited for every available printer.</p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex items-center w-full text-left">
              <span class="text-2xl mr-4">+</span>
              <span class="flex-grow font-semibold">Why choose Dunder Mifflin instead of some huge paper producer?</span>
            </button>
            <p class="mt-2 hidden">You know that feeling when you are waiting on the phone for hours to contact your supplier? Sometimes they even have a waiting time music prepared for that. In Dunder Mifflin, you can get help immediately, and each of our customers receives an individual assistant. For us, companies are people - not numbers, so we take care of each of them.</p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex items-center w-full text-left">
              <span class="text-2xl mr-4">+</span>
              <span class="flex-grow font-semibold">When I will receive the products?</span>
            </button>
            <p class="mt-2 hidden">If you buy one of our business plans, you will receive the supplies every first Monday of the month. However, you can also purchase paper separately. Our employees will make sure that you will receive the products in the next business days.</p>
          </div>
          <div class="p-4 mb-2 border-b">
            <button class="flex items-center w-full text-left">
              <span class="text-2xl mr-4">+</span>
              <span class="flex-grow font-semibold">How long does it take to finalize the deal?</span>
            </button>
            <p class="mt-2 hidden">The whole process depends on your decision. If you sign the contract immediately, we can start official cooperation in the next two business days.</p>
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <h2 class="text-4xl mb-12 text-center font-semibold font-heading">Contact the Scranton team</h2>
        <div class="flex flex-wrap -mx-6">
          <div class="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
            <h3 class="text-2xl mb-2 font-semibold font-heading">Let us guide you through the world of paper</h3>
            <p class="mb-8">Lovely Pam-Pam is waiting to answer all your questions and inquiries.</p>
            <ul>
              <li class="mb-4 flex items-center">
                <svg class="inline-block w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span>1725 Slough Avenue, Scranton</span>
              </li>
              <li class="mb-4 flex items-center">
                <svg class="inline-block w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>555-111-555</span>
              </li>
              <li class="mb-4 flex items-center">
                <svg class="inline-block w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>scranton@dundermifflin.com</span>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2 px-6">
            <form>
              <div class="mb-4">
                <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Email">
              </div>
              <div class="mb-4">
                <select class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
                  <option>-- Select product --</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                </select>
              </div>
              <div class="mb-4"><textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"></textarea></div>
              <div>
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
            <div class="h-full border rounded shadow">
              <div class="flex items-center justify-between py-3 px-4 border-b">
                <h3 class="text-lg font-semibold font-heading">Income</h3>
                <span class="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">Monthly</span>
              </div>
              <div class="flex flex-col p-4">
                <h3 class="text-3xl mb-3 font-semibold font-heading font-semibold">108,200</h3>
                <span>Total income</span>
                <span class="text-green-500">82%</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
            <div class="h-full border rounded shadow">
              <div class="flex items-center justify-between px-4 py-3 border-b">
                <h3 class="text-lg font-semibold font-heading">Orders</h3>
                <span class="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">Monthly</span>
              </div>
              <div class="flex flex-col p-4">
                <h3 class="text-3xl mb-3 font-semibold font-heading font-semibold">128,430</h3>
                <span>New orders</span>
                <span class="text-green-500">32%</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
            <div class="h-full border rounded shadow">
              <div class="flex items-center justify-between px-4 py-3 border-b">
                <h3 class="text-lg font-semibold font-heading">Visits</h3>
                <span class="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">Monthly</span>
              </div>
              <div class="flex flex-col p-4">
                <h3 class="text-3xl mb-3 font-semibold font-heading font-semibold">81,248</h3>
                <span>New visits</span>
                <span class="text-green-500">24%</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-4 lg:mb-0">
            <div class="h-full border rounded shadow">
              <div class="flex items-center justify-between px-4 py-3 border-b">
                <h3 class="text-lg font-semibold font-heading">Conversions</h3>
                <span class="py-1 px-3 text-sm text-white font-semibold bg-red-500 rounded-full">Today</span>
              </div>
              <div class="flex flex-col p-4">
                <h3 class="text-3xl mb-3 font-semibold font-heading font-semibold">7%</h3>
                <span>Purchased more than once</span>
                <span class="text-red-500">82%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="flex justify-between items-end mb-2">
                <h3 class="text-lg font-semibold font-heading font-semibold">Projects</h3>
                <span class="text-5xl leading-none text-indigo-600">2</span>
              </div>
              <div class="w-full h-4 bg-gray-300 rounded">
                <div class="h-full bg-blue-500" style="width: 62%;"></div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="flex justify-between items-end mb-2">
                <h3 class="text-lg font-semibold font-heading font-semibold">Clients</h3>
                <span class="text-5xl leading-none text-red-500">117</span>
              </div>
              <div class="w-full h-4 bg-gray-300 rounded">
                <div class="h-full bg-red-500" style="width: 62%;"></div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="flex justify-between items-end mb-2">
                <h3 class="text-lg font-semibold font-heading font-semibold">Invoices</h3>
                <span class="text-5xl leading-none text-purple-500">12</span>
              </div>
              <div class="w-full h-4 bg-gray-300 rounded">
                <div class="h-full bg-purple-500" style="width: 62%;"></div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="flex justify-between items-end mb-2">
                <h3 class="text-lg font-semibold font-heading font-semibold">Appointments</h3>
                <span class="text-5xl leading-none text-green-500">14</span>
              </div>
              <div class="w-full h-4 bg-gray-300 rounded">
                <div class="h-full bg-green-500" style="width: 62%;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="py-8 px-4">
        <h2 class="text-3xl mb-2 font-semibold font-heading font-semibold">Support ticket list</h2>
        <p class="mb-4">List of tickets opend by customers</p>
        <div class="flex flex-wrap -mx-4 mb-8">
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="text-center p-4 mb-2 bg-blue-500 text-white rounded">
                <h3 class="text-3xl leading-tight font-semibold font-heading font-semibold">448</h3>
                <span class="leading-none">Total Tickets</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="text-center p-4 mb-2 bg-red-500 text-white rounded">
                <h3 class="text-3xl leading-tight font-semibold font-heading font-semibold">81</h3>
                <span class="leading-none">Responded</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="text-center p-4 mb-2 bg-green-500 text-white rounded">
                <h3 class="text-3xl leading-tight font-semibold font-heading font-semibold">208</h3>
                <span class="leading-none">Resolved</span>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div class="h-full">
              <div class="text-center p-4 mb-2 bg-gray-800 text-white rounded">
                <h3 class="text-3xl leading-tight font-semibold font-heading font-semibold">159</h3>
                <span class="leading-none">Peding</span>
              </div>
            </div>
          </div>
        </div>
        <table class="w-full table-auto">
          <thead>
            <tr><th class="border-t px-2 py-2" scope="col">ID #</th><th class="border-t px-2 py-2" scope="col">Opened By</th><th class="border-t px-2 py-2" scope="col">Cust. Email</th><th class="border-t px-2 py-2" scope="col">Subject</th><th class="text-center border-t px-2 py-2" scope="col">Status</th><th class="text-center border-t px-2 py-2" scope="col">Assign to</th><th class="text-center border-t px-2 py-2" scope="col">Date</th><th class="text-center border-t px-2 py-2" scope="col">Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-t px-2 py-2">348</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Lauren North
                </a>
              </td>
              <td class="border-t px-2 py-2">lauren@gmail.com</td>
              <td class="border-t px-2 py-2">Where are my files?</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-yellow-500">New</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">18-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
            <tr>
              <td class="border-t px-2 py-2">349</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Kian Gray
                </a>
              </td>
              <td class="border-t px-2 py-2">kian.gray@gmail.com</td>
              <td class="border-t px-2 py-2">I can't send file to my friend</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500">Resolved</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">20-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
            <tr>
              <td class="border-t px-2 py-2">350</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Mollie Davey
                </a>
              </td>
              <td class="border-t px-2 py-2">mollie@davey.com</td>
              <td class="border-t px-2 py-2">Compressed files have low quality</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500">Resolved</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">21-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
            <tr>
              <td class="border-t px-2 py-2">351</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Josh Douglas
                </a>
              </td>
              <td class="border-t px-2 py-2">j.douglas@hotmail.com</td>
              <td class="border-t px-2 py-2">My phone won't turn on</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-gray-800">Pending</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">22-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
            <tr>
              <td class="border-t px-2 py-2">352</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Jodie Field
                </a>
              </td>
              <td class="border-t px-2 py-2">jodie@field.com</td>
              <td class="border-t px-2 py-2">How to change e-mail??</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-yellow-500">New</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">22-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
            <tr>
              <td class="border-t px-2 py-2">353</td>
              <td class="border-t px-2 py-2">
                <a href="#">
                  <img class="inline-block mr-2 rounded-full" src="placeholders-2-0/pictures/male_avatar.svg" alt="" height="40" width="40">
                  Taylor Gill
                </a>
              </td>
              <td class="border-t px-2 py-2">taylor.gill777@hotmail.com</td>
              <td class="border-t px-2 py-2">My files are corrupted</td>
              <td class="text-center border-t px-2 py-2">
                <span class="inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500">Resolved</span>
              </td>
              <td class="text-center border-t px-2 py-2">Kelly Kapoor</td>
              <td class="text-center border-t px-2 py-2">23-11-2018</td>
              <td class="text-center border-t px-2 py-2"><a class="text-indigo-600 hover:underline" href="#">edit</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    
      <section class="py-8 px-4 text-center">
        <div class="max-w-auto md:max-w-lg mx-auto">
          <img class="mb-8" src="placeholders-2-0/pictures/error.svg" alt="">
          <h2 class="text-5xl mb-2 font-semibold font-heading">Page not found</h2>
          <p class="mb-6 text-gray-400">Dunder Mifflin is the place where all the paper enthusiastic met one day and started selling supplies with true love.</p>
          <div><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a></div>
        </div>
      </section>
    
      <div class="absolute bottom-0 left-0 p-4 bg-white border-t">
        <h2 class="text-3xl mb-2 font-semibold font-heading">Cookie Policy</h2>
        <p class="mb-4 text-gray-400 leading-relaxed">We use cookies to personalise content, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners. If you want to change your cookie setting, please see the ‘how to reject cookies' section of our <a class="text-indigo-600 hover:underline" href="#">Cookie Policy</a>. Otherwise, if you agree to our use of cookies, please continue to use our website.</p>
        <a class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">I accept cookies</a>
      </div>
    
      <section class="py-16 px-4 bg-gray-50">
        <div class="flex flex-wrap items-center max-w-6xl mx-auto">
          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div class="pt-10 pb-6 px-10 bg-white rounded shadow">
              <ul>
                <li class="mb-3">
                  <span class="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">1</span>
                  <span>Our paper is literally tempting you to print something</span>
                </li>
                <li class="mb-3">
                  <span class="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">2</span>
                  <span>Order our services without leaving your office</span>
                </li>
                <li class="mb-3">
                  <span class="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">3</span>
                  <span>We can prepare next-day delivery if necessary</span>
                </li>
                <li class="mb-3">
                  <span class="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">4</span>
                  <span>10% discount on the other paper supplies</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="lg:w-1/2 px-4 lg:pl-20">
            <h2 class="text-3xl leading-tight font-semibold font-heading">The real business is done on paper</h2>
            <p class="mt-6 mb-8 text-gray-400 leading-relaxed">Are you a carte blanche of the paper industry? No worries, our team will help you in implementation process and dispel doubts.</p>
            <div><a class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow" href="#">Sign up for free</a></div>
          </div>
        </div>
      </section>
    
      <footer>
        <div class="flex flex-wrap items-center py-4 px-4 border-b">
          <div class="w-full lg:w-1/5 text-center lg:text-left"><a class="text-xl text-indigo-600 font-semibold font-heading" href="#">Dunder Mifflin</a></div>
          <div class="w-full lg:w-3/5 mt-4 lg:mt-0 text-center"><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-indigo-600" href="#">Products</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-indigo-600" href="#">Team</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-indigo-600" href="#">Customers</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-indigo-600" href="#">Blog</a></div>
          <div class="flex justify-center space-x-6 lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
            <a href="#">
              <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a href="#">
              <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
            </a>
            <a href="#">
              <svg class="text-indigo-600 w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="py-4 text-center">
          <span class="block md:inline-block mb-4 md:mb-0 mx-3">&copy; 2020 Dunder Mifflin</span>
          <a class="inline-block mx-4 text-blue-900 hover:text-indigo-600" href="#">Privacy Policy</a><a class="inline-block mx-4 text-blue-900 hover:text-indigo-600" href="#">Term of Service</a>
        </div>
      </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
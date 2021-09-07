<template>
   <div class=""> 
    
      <section class="py-8 px-4 lg:px-10 bg-white">
        <nav class="relative flex justify-between items-center">
          <a class="text-2xl text-gray-900 font-bold" href="#">
            <img class="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto">
          </a>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center p-3 hover:bg-gray-50 text-gray-900 rounded">
              <svg class="w-10 h-3" width="39" height="13" viewbox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39" height="2" rx="1" fill="currentColor"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="currentColor"></rect>
                <title>Mobile menu</title>
              </svg>
            </button>
          </div>
          <div class="hidden lg:block ml-auto mr-16">
            <ul class="flex items-center space-x-16 text-lg font-bold">
              <li><a class="hover:underline" href="#">Product</a></li>
              <li><a class="hover:underline" href="#">Story</a></li>
              <li><a class="hover:underline" href="#">Features</a></li>
              <li><a class="hover:underline" href="#">Contact</a></li>
            </ul>
          </div>
          <div class="hidden lg:block"><a class="inline-block px-12 py-4 text-white font-bold bg-black border border-black hover:bg-white hover:text-black rounded-full transition duration-200" href="#">Sign Up</a></div>
        </nav>
        <div class="hidden navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-gray-800 overflow-y-auto">
            <div class="flex items-center mb-16 pr-6">
              <a class="ml-10 text-2xl text-white font-bold" href="#">
                <img class="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto">
              </a>
            </div>
            <div>
              <ul>
                <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">Product</a></li>
                <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">Story</a></li>
                <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">Features</a></li>
                <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="#">Contact</a></li>
              </ul>
            </div>
            <div class="mt-auto px-10">
              <div class="pt-6"><a class="block mb-4 py-4 px-12 text-white text-center font-bold hover:bg-white hover:text-gray-800 border border-gray-50 rounded-full transition duration-200" href="#">Sign in</a><a class="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
              <p class="mt-6 mb-4 text-lg text-center text-white">
                <span>2021 &copy; Zospace. All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </section>
    
      <section class="relative pt-20 pb-20 2xl:pb-40 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap mb-16 lg:mb-28">
            <div class="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div class="max-w-md">
                <span class="text-lg font-bold text-blue-500">How it works</span>
                <h2 class="mt-12 mb-10 text-5xl lg:text-6xl font-bold font-heading">Build and launch without problems</h2>
                <p class="mb-16 text-xl text-gray-500">Get our free mobile application.</p>
                <a class="inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">How it works?</a>
              </div>
            </div>
            <img class="lg:absolute top-0 right-0 lg:w-1/2 w-full h-96 lg:h-144 object-cover" src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="">
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="w-full lg:w-1/3 p-4">
              <div class="flex pt-8 lg:pt-20 border-t border-gray-50">
                <div class="mr-8">
                  <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">1</span>
                </div>
                <div class="max-w-xs">
                  <h3 class="mb-6 text-lg font-bold font-heading">Register account</h3>
                  <p class="text-lg">It&rsquo;s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-4">
              <div class="flex pt-8 lg:pt-20 border-t border-gray-50">
                <div class="mr-8">
                  <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">2</span>
                </div>
                <div class="max-w-xs">
                  <h3 class="mb-6 text-lg font-bold font-heading">Customize tools</h3>
                  <p class="text-lg">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-4">
              <div class="flex pt-8 lg:pt-20 border-t border-gray-50">
                <div class="mr-8">
                  <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">3</span>
                </div>
                <div class="max-w-xs">
                  <h3 class="mb-6 text-lg font-bold font-heading">Work with your team</h3>
                  <p class="text-lg">The time, this accumsan augue, posuere posuere elit lorem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="py-20 2xl:py-40 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-wrap items-center -mx-10">
              <div class="w-full lg:w-1/2 px-10">
                <div class="px-6 lg:px-20 py-12 lg:py-24 bg-white shadow-2xl rounded-lg">
                  <form action="#">
                    <h3 class="mb-10 text-2xl font-bold font-heading">Register Account</h3>
                    <div class="flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                          <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                          <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="email" placeholder="example@shuffle.dev">
                    </div>
                    <div class="flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="17" height="21" viewbox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z" fill="black"></path>
                          <path d="M8.49957 8.93567C7.26775 8.93567 6.26562 9.93779 6.26562 11.1696C6.26562 11.8679 6.60247 12.5283 7.1592 12.9474V14.7439C7.1592 15.4829 7.76062 16.0843 8.49957 16.0843C9.2381 16.0843 9.83994 15.4829 9.83994 14.7439V12.9474C10.3966 12.5278 10.7335 11.8679 10.7335 11.1696C10.7335 9.93779 9.7309 8.93567 8.49957 8.93567ZM9.16793 12.3228C9.03032 12.4023 8.94636 12.5502 8.94636 12.7088V14.7439C8.94636 14.9906 8.74572 15.1907 8.49957 15.1907C8.25342 15.1907 8.05278 14.9906 8.05278 14.7439V12.7088C8.05278 12.5502 7.96833 12.4032 7.83072 12.3228C7.41026 12.078 7.1592 11.6468 7.1592 11.1696C7.1592 10.4307 7.76062 9.82925 8.49957 9.82925C9.2381 9.82925 9.83994 10.4307 9.83994 11.1696C9.83994 11.6468 9.58881 12.078 9.16793 12.3228Z" fill="black"></path>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Password">
                    </div>
                    <div class="flex items-center pl-6 mb-6 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z" fill="black"></path>
                          <path d="M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z" fill="black"></path>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Repeat password">
                    </div>
                    <div class="inline-flex mb-10">
                      <input class="mr-4" type="checkbox">
                      <p class="-mt-2 text-sm text-gray-500">By singning up, you agree to our <a class="text-gray-900" href="#">Terms, Data Policy</a>and <a class="text-gray-900" href="#">Cookies.</a></p>
                    </div>
                    <button class="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Get started</button>
                  </form>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-10 mb-16 lg:mb-0 order-first lg:order-last">
                <div class="max-w-md">
                  <span class="text-lg text-blue-500 font-bold">Register Account</span>
                  <h2 class="mt-8 mb-12 text-5xl font-bold font-heading">Start creating a new template by selecting UI components</h2>
                  <p class="text-lg text-gray-500">
                    <span>The brown fox jumps over</span>
                    <span class="font-bold">the lazy dog.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="relative py-20 2xl:py-40 bg-violet-500 overflow-hidden">
        <div class="absolute top-0 left-0 lg:bottom-0 h-full lg:h-auto w-full lg:w-4/12 bg-violet-500 lg:overflow-hidden">
          <img class="hidden lg:block h-full w-full object-cover" src="https://images.unsplash.com/photo-1607782599721-4a423a010b84?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="">
        </div>
        <div class="relative container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full lg:w-2/5 px-4">
                <div class="px-6 lg:px-12 py-12 lg:py-24 bg-white shadow-lg rounded-lg">
                  <form action="#">
                    <h3 class="mb-10 text-2xl font-bold font-heading">Register Account</h3>
                    <div class="flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z" fill="black"></path>
                          <path d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z" fill="black"></path>
                          <rect x="15" y="15" width="5" height="1" rx="0.5" fill="black"></rect><rect x="17" y="18" width="5" height="1" rx="0.5" transform="rotate(-90 17 18)" fill="black"></rect>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="email" placeholder="example@shuffle.dev">
                    </div>
                    <div class="flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="17" height="21" viewbox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z" fill="black"></path>
                          <path d="M8.49957 8.93567C7.26775 8.93567 6.26562 9.93779 6.26562 11.1696C6.26562 11.8679 6.60247 12.5283 7.1592 12.9474V14.7439C7.1592 15.4829 7.76062 16.0843 8.49957 16.0843C9.2381 16.0843 9.83994 15.4829 9.83994 14.7439V12.9474C10.3966 12.5278 10.7335 11.8679 10.7335 11.1696C10.7335 9.93779 9.7309 8.93567 8.49957 8.93567ZM9.16793 12.3228C9.03032 12.4023 8.94636 12.5502 8.94636 12.7088V14.7439C8.94636 14.9906 8.74572 15.1907 8.49957 15.1907C8.25342 15.1907 8.05278 14.9906 8.05278 14.7439V12.7088C8.05278 12.5502 7.96833 12.4032 7.83072 12.3228C7.41026 12.078 7.1592 11.6468 7.1592 11.1696C7.1592 10.4307 7.76062 9.82925 8.49957 9.82925C9.2381 9.82925 9.83994 10.4307 9.83994 11.1696C9.83994 11.6468 9.58881 12.078 9.16793 12.3228Z" fill="black"></path>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Password">
                    </div>
                    <div class="flex items-center pl-6 mb-6 border border-gray-50 bg-white rounded-full">
                      <span class="inline-block pr-3 border-r border-gray-50">
                        <svg class="w-5 h-5" width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z" fill="black"></path>
                          <path d="M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z" fill="black"></path>
                        </svg>
                      </span>
                      <input class="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none" type="password" placeholder="Repeat password">
                    </div>
                    <div class="inline-flex mb-10">
                      <input class="mr-4" type="checkbox">
                      <p class="-mt-2 text-sm text-gray-500">By singning up, you agree to our <a class="text-gray-900" href="#">Terms, Data Policy</a>and <a class="text-gray-900" href="#">Cookies.</a></p>
                    </div>
                    <button class="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">Get started</button>
                  </form>
                </div>
              </div>
              <div class="w-full lg:w-3/5 px-4 mb-16 lg:mb-0 order-first lg:order-last">
                <span class="flex mb-10 mx-auto items-center justify-center h-20 w-20 bg-blue-500 rounded-lg">
                  <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M36.2292 29.2917H0.770833C0.345333 29.2917 0 28.9463 0 28.5208C0 28.0953 0.345333 27.75 0.770833 27.75H36.2292C36.6547 27.75 37 28.0953 37 28.5208C37 28.9463 36.6547 29.2917 36.2292 29.2917Z" fill="white"></path>
                      <path d="M33.1458 29.2917C32.7203 29.2917 32.375 28.9463 32.375 28.5208V14.6458C32.375 14.2203 32.7203 13.875 33.1458 13.875C33.5713 13.875 33.9167 14.2203 33.9167 14.6458V28.5208C33.9167 28.9463 33.5713 29.2917 33.1458 29.2917Z" fill="white"></path>
                      <path d="M3.85482 29.2918C3.42932 29.2918 3.08398 28.9465 3.08398 28.521V10.7918C3.08398 9.09137 4.46686 7.7085 6.16732 7.7085H11.5632C11.9887 7.7085 12.334 8.05383 12.334 8.47933C12.334 8.90483 11.9887 9.25016 11.5632 9.25016H6.16732C5.31632 9.25016 4.62565 9.94237 4.62565 10.7918V28.521C4.62565 28.9465 4.28032 29.2918 3.85482 29.2918Z" fill="white"></path>
                      <path d="M23.5235 18.2502C23.3261 18.2502 23.1288 18.1747 22.9777 18.0252L17.4308 12.4798C17.141 12.19 17.1286 11.7228 17.4031 11.4191L21.9464 6.37633C25.1731 2.65012 30.2899 0.0817083 34.6713 0C34.9503 0.00308333 35.0844 0.078625 35.2309 0.225083C35.3789 0.374625 35.4621 0.576583 35.4575 0.784708C35.3743 5.16612 32.8074 10.2845 29.0689 13.5204L24.0384 18.0529C23.8919 18.1855 23.7069 18.2502 23.5235 18.2502ZM19.0403 11.9078L23.5512 16.4187L28.0498 12.3657C31.2503 9.59533 33.5119 5.365 33.8681 1.58946C30.0941 1.94712 25.8653 4.20721 23.1041 7.39692L19.0403 11.9078Z" fill="white"></path>
                      <path d="M25.5967 21.9071C25.5273 21.9071 25.4564 21.8979 25.387 21.8778C25.1172 21.8023 24.9107 21.588 24.8459 21.3151L23.7575 16.7672C23.6588 16.3525 23.9147 15.9378 24.3279 15.8376C24.7457 15.7358 25.1573 15.9948 25.2575 16.408L25.9806 19.4266C27.3187 17.333 27.587 14.6521 27.6147 13.0826C27.6224 12.6587 27.9369 12.3473 28.3994 12.3257C28.8234 12.3334 29.1626 12.6864 29.1549 13.1104C29.0901 16.758 28.0202 19.8012 26.1409 21.6805C25.9944 21.8285 25.7971 21.9071 25.5967 21.9071Z" fill="white"></path>
                      <path d="M18.871 11.7212C18.8124 11.7212 18.7523 11.715 18.6922 11.6996L14.1442 10.6097C13.8714 10.5449 13.6571 10.3399 13.5815 10.0701C13.506 9.80183 13.5815 9.51354 13.7789 9.3162C15.6582 7.43691 18.6999 6.367 22.349 6.30225C22.8315 6.32383 23.126 6.6337 23.1337 7.0592C23.1414 7.4847 22.8022 7.8362 22.3767 7.84391C20.8073 7.87166 18.1279 8.13837 16.0343 9.47808L19.0529 10.2011C19.4676 10.2998 19.7235 10.716 19.6233 11.1307C19.537 11.4838 19.221 11.7212 18.871 11.7212Z" fill="white"></path>
                      <path d="M13.1051 23.1251C12.9032 23.1251 12.7059 23.0464 12.5594 22.9C12.359 22.6996 12.285 22.4051 12.3667 22.1338C12.6211 21.2828 13.9423 16.9877 14.9783 15.9517C16.2286 14.7029 18.2574 14.7029 19.5077 15.9517C20.7564 17.2004 20.7549 19.2324 19.5077 20.4811C18.4717 21.5156 14.1766 22.8399 13.3256 23.0942C13.2547 23.1143 13.1791 23.1251 13.1051 23.1251ZM17.2445 16.556C16.8206 16.556 16.3935 16.7164 16.0698 17.0401C15.6335 17.4779 14.8796 19.4081 14.2907 21.1672C16.0513 20.5782 17.983 19.8259 18.4193 19.3881C19.0652 18.7406 19.0652 17.6861 18.4193 17.0401C18.094 16.7179 17.67 16.556 17.2445 16.556ZM18.9635 19.9354H18.9789H18.9635Z" fill="white"></path>
                    </g>
                  </svg>
                </span>
                <h2 class="mb-10 text-center text-6xl lg:text-7xl text-white font-bold font-heading">Ready to start? Join now.</h2>
                <p class="text-center text-gray-50">Great experience for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="relative overflow-hidden">
        <div class="hidden lg:block absolute right-0 bottom-0 h-full w-full lg:w-4/12">
          <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1596485206311-2da5fafb3606?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="">
        </div>
        <div class="relative container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-wrap -mx-4 py-20 2xl:py-40">
              <div class="w-full lg:w-2/5 px-4 mb-8 lg:mb-0">
                <span class="text-lg font-bold text-blue-500">Contact with us</span>
                <h2 class="mt-8 mb-12 md:mb-20 text-5xl font-bold font-heading">Our Office in London</h2>
                <div class="flex py-6 border-b border-gray-50">
                  <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-4 h-4" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z" fill="white"></path>
                    </svg>
                  </span>
                  <p class="text-lg font-bold">+44 20457523 00 01</p>
                </div>
                <div class="flex items-center py-6 border-b border-gray-50">
                  <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-5 h-4" width="21" height="14" viewbox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z" fill="white"></path>
                    </svg>
                  </span>
                  <p class="text-lg font-bold">support@shuffle.dev</p>
                </div>
                <div class="flex items-center py-6">
                  <span class="flex flex-shrink-0 items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-5 h-5" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z" fill="white"></path>
                      <path d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z" fill="white"></path>
                    </svg>
                  </span>
                  <div>
                    <p class="mb-5 text-lg font-bold">Bayswater, London W16EG, UK</p>
                    <p class="text-gray-300">The one est bad, semper six at sem quis, congue 8 AM - 8 PM</p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/5 px-4">
                <div class="lg:ml-20 px-8 lg:px-12 py-16 w-full lg:max-w-md bg-white shadow-lg rounded-lg">
                  <form action="#">
                    <h3 class="mb-10 text-2xl font-bold font-heading">Send a message!</h3>
                    <input class="mb-4 w-full px-12 py-4 bg-white border font-bold placeholder-gray-900 rounded-full focus:outline-none" type="email" placeholder="example@shuffle.dev">
                    <input class="mb-4 w-full px-12 py-4 bg-white border font-bold placeholder-gray-900 rounded-full focus:outline-none" type="text" placeholder="Subject">
                    <textarea class="w-full mb-6 px-12 py-4 bg-white border font-bold placeholder-gray-900 rounded-3xl resize-none focus:outline-none" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                    <div class="flex mb-10">
                      <input type="checkbox">
                      <p class="pl-4 max-w-xs text-sm text-gray-300">By singning up, you agree to our Terms, Data Policy and Cookies.</p>
                    </div>
                    <div class="text-right">
                      <button class="py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="relative py-20 2xl:py-40 overflow-hidden">
        <div class="absolute bottom-0 left-0 mb-40 2xl:mb-60 py-px bg-gray-50 w-1/6 md:w-1/3"></div>
        <div class="absolute bottom-0 right-0 mb-40 2xl:mb-60 py-px bg-gray-50 w-1/6 md:w-1/3"></div>
        <div class="relative container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-1/6 px-4 text-right">
              <button class="hidden lg:inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
                <svg width="7" height="14" viewbox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z" fill="white"></path>
                </svg>
              </button>
              <div class="lg:hidden text-center mb-10">
                <button class="inline-flex items-center justify-center w-14 h-14 mx-1 bg-blue-500 hover:bg-blue-600 rounded-full">
                  <svg width="7" height="14" viewbox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z" fill="white"></path>
                  </svg>
                </button>
                <button class="inline-flex items-center justify-center w-14 h-14 mx-1 bg-blue-500 hover:bg-blue-600 rounded-full">
                  <svg width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z" fill="white"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/6 px-4">
              <div class="relative text-center mb-14">
                <img class="absolute top-0 right-0 mt-28" src="zospace-assets/images/quote-gray-light.svg" alt="">
                <div class="relative">
                  <span class="text-lg text-blue-500 font-bold">Testimonials</span>
                  <h2 class="mt-24 mb-16 text-5xl font-bold font-heading">Zospace has helped us work</h2>
                </div>
                <div class="max-w-xl mx-auto">
                  <p class="mb-8 text-lg text-gray-500">The point of using Lorem Ipsum is that it has a more-or-less normal. Vestibulum lectus ex, molestie id erat at, consectetur.</p>
                  <p class="text-lg text-gray-300">Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut blandit, nulla quis tincidunt dignissim, ipsum diam efficitur est, et iaculis dui ante eu enim.</p>
                </div>
              </div>
              <div class="flex -mx-4 items-center justify-center">
                <div class="px-4">
                  <img class="w-30 h-40 rounded-full object-cover" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt="">
                </div>
                <div class="px-4">
                  <div class="flex mb-4">
                    <img class="mr-1" src="zospace-assets/images/star-yellow.svg" alt="">
                    <img class="mr-1" src="zospace-assets/images/star-yellow.svg" alt="">
                    <img class="mr-1" src="zospace-assets/images/star-yellow.svg" alt="">
                    <img class="mr-1" src="zospace-assets/images/star-yellow.svg" alt="">
                    <img src="zospace-assets/images/star-light-gray.svg" alt="">
                  </div>
                  <div>
                    <h3 class="mb-1 text-2xl font-bold">L&eacute;a Herrera</h3>
                    <p>Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/6 px-4">
              <button class="hidden lg:inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
                <svg width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <section class="relative py-20 2xl:py-40 overflow-hidden">
        <img class="absolute bottom-0 left-0 -mb-40" src="zospace-assets/lines/light-double-circle.svg" alt="">
        <img class="hidden sm:block absolute top-0 right-0 lg:mr-24 w-64 md:w-112 h-full object-cover md:rounded-b-full" src="https://images.pexels.com/photos/5325836/pexels-photo-5325836.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940" alt="">
        <div class="relative container px-4 mx-auto">
          <div class="lg:ml-24 max-w-xl">
            <a class="inline-block text-gray-900 text-xl font-bold" href="#">
              <img class="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto">
            </a>
            <h2 class="mt-12 mb-14 text-5xl font-bold font-heading">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
            <p class="mb-20 text-xl text-gray-500">Go back or try here:</p>
            <a class="inline-block px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" href="#">Start again</a>
          </div>
        </div>
      </section>
    
      <section class="py-20 2xl:py-40 bg-gray-800">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
            <div class="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
              <span class="text-lg text-blue-400 font-bold">We&apos;re Zospace</span>
              <h2 class="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">Thank you for your time</h2>
              <p class="mb-16 text-gray-300">The brown fox jumps over the lazy dog.</p>
              <div><a class="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Active demo</a><a class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Contact</a></div>
            </div>
            <div class="w-full lg:w-3/5 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                  <ul class="text-lg">
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Hello</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Story</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Pricing</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Applictaions</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Stats</a></li>
                    <li><a class="text-gray-200 hover:text-gray-100" href="#">Blog</a></li>
                  </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                  <ul class="text-lg">
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Newsletter</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Features</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">How it works</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">FAQ</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Portfolio</a></li>
                    <li><a class="text-gray-200 hover:text-gray-100" href="#">Team</a></li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/3 px-4">
                  <ul class="text-lg">
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">New account</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Log in</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Testimonials</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Contact</a></li>
                    <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Privacy Policy</a></li>
                    <li><a class="text-gray-200 hover:text-gray-100" href="#">Cookies</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex justify-between">
            <p class="text-lg text-gray-200 mb-8 md:mb-0">&copy; 2021 Shuffle. All rights reserved.</p>
            <div class="flex items-center">
              <a class="inline-block mr-2" href="#">
                <img class="h-12" src="zospace-assets/logos/facebook.svg" alt="">
              </a>
              <a class="inline-block mr-2" href="#">
                <img class="h-12" src="zospace-assets/logos/instagram.svg" alt="">
              </a>
              <a class="inline-block" href="#">
                <img class="h-12" src="zospace-assets/logos/twitter.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
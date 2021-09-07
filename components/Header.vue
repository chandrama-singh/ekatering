<template>
  <section class="bgcolor">
        <div class="container px-4 mx-auto">
          <nav class="flex items-center py-6">
            <a class="text-3xl font-semibold leading-none" href="#">
              <img class="h-10" src="../assets/logo.png" alt="" width="auto">
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
              <li><nuxt-link to="/" class="text-sm text-white hover:text-blueGray-500" >Home</nuxt-link></li>
              <li><nuxt-link to="/about" class="text-sm text-white hover:text-blueGray-500" >About Us</nuxt-link></li>
              <li><nuxt-link to="/training" class="text-sm text-white hover:text-blueGray-500" >Training</nuxt-link></li>
              <li><nuxt-link to="/consultations" class="text-sm text-white hover:text-blueGray-500" >Consultations</nuxt-link></li>
              <li><nuxt-link to="/features" class="text-sm text-white hover:text-blueGray-500" >Features</nuxt-link></li>
              <li><nuxt-link to="/faq" class="text-sm text-white hover:text-blueGray-500" >FAQ</nuxt-link></li>
              <li><nuxt-link to="/contactus" class="text-sm text-white hover:text-blueGray-500" >Contact</nuxt-link></li>
            </ul>
            
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
                <li class="mb-1"><nuxt-link to="/" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Home</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/about" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">About Us</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/training" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Training</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/consultations" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Consultations</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/features" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600" >Features</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/faq" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">FAQ</nuxt-link></li>
                <li class="mb-1"><nuxt-link to="/contactus" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Contact</nuxt-link></li>
              </ul>
              
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
</template>

<script>
export default {

}
</script>

<style>
.bgcolor{
    background-color: #652D90;
}
</style>
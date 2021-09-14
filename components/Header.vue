<template>
<div>
<div class="headbg  h-full flex flex-col text-sm">
  <header class="text-white flex flex-col">
    <section class="flex space-x-1 headbg p-1 pr-0 ">
      
        <!-- <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg></button> -->
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 64 64" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z" /><path fill="#555" data-name="layer2" d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z" stroke="#555" stroke-linecap="round" stroke-miterlimit="10"
  stroke-width="2" stroke-linejoin="round"></path></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 30 30" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"/>
	
		<path id="XMLID_81_" fill="#555" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/>
	
		<circle id="XMLID_83_" fill="#555" cx="418.306" cy="134.072" r="34.149"/>

        </svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 23.189 50.24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.26 16.42H0v8.59h5.26v25.23h10.12V24.91h7.06l.75-8.48h-7.81V11.6c0-2 .4-2.79 2.33-2.79h5.48V0h-7C8.66 0 5.26 3.31 5.26 9.66v6.76z" /></svg></button>
     
      <div class="flex-grow"></div>
      <div class="hidden lg:block ">
          <nuxt-link to="/signin" class="mr-2 inline-block px-4 py-3 text-xs text-white hover:text-purple-700 font-semibold leading-none" >Login</nuxt-link>
          <nuxt-link to="/signup" class="mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none" >Sign Up</nuxt-link>
          </div>
    </section>
  
  </header>
  
</div>
  <section class="bgcolor">
        <div class="container px-4 mx-auto">
          <nav class="flex items-center py-6">
            <a class="text-3xl font-semibold leading-none" href="#">
              <img class="h-10" src="../assets/footer.png" alt="" width="auto">
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
              <li><nuxt-link to="/training" class="text-sm text-white hover:text-blueGray-500" >Training 
              
              </nuxt-link>
                 <ul class="sub-menu">
                                  <li><nuxt-link to="training/onlinetraining">eKatering Online Training</nuxt-link></li>
                                  <li><nuxt-link to="training/foodallergen">Food Allergen for Caterers and Private Chefs Level 1</nuxt-link></li>
                                   <li><nuxt-link to="training/foodsafety">Food Safety for Caterers and Private Chefs - Level 2</nuxt-link></li>
                              </ul>
              </li>
              <li><nuxt-link to="/consultations" class="text-sm text-white hover:text-blueGray-500" >Consultations <i class="fas fa-caret-down"></i></nuxt-link>
                 <ul class="sub-menu">
                                  <li><nuxt-link to="consultation/consultancy">eKatering CONSULTANCY SERVICES</nuxt-link></li>
                                  <li><nuxt-link to="consultation/foodregistration">Local Authority Food Registration</nuxt-link></li>
                                   <li><nuxt-link to="consultation/fsms">Documented Food Safety Management System (FSMS)</nuxt-link></li>
                                  <li><nuxt-link to="consultation/vri">Virtual Remote Inspection (VRI)</nuxt-link></li>
                                  <li><nuxt-link to="consultation/sfbb">Safer Food Better Business (SFBB)</nuxt-link></li>
                                   <li><nuxt-link to="consultation/foodstandard">Food Standard</nuxt-link></li>
                                  <li><nuxt-link to="consultation/legaladvice">Legal Advice</nuxt-link></li>
                              </ul>
              </li>
              <li><nuxt-link to="/features" class="text-sm text-white hover:text-blueGray-500" >Features</nuxt-link></li>
              <li><nuxt-link to="/faq" class="text-sm text-white hover:text-blueGray-500" >FAQ</nuxt-link></li>
              <li><nuxt-link to="/contactus" class="text-sm text-white hover:text-blueGray-500" >Contact</nuxt-link></li>
            </ul>
            
          </nav>
        </div>
        <div class="hidden navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
          <nav class=" fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
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
                <li class="mb-1"><nuxt-link to="/training" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Training </nuxt-link>
                     <ul class="sub-menu">
                                  <li><nuxt-link to="training/onlinetraining">eKatering Online Training</nuxt-link></li>
                                  <li><nuxt-link to="training/foodallergen">Food Allergen for Caterers and Private Chefs Level 1</nuxt-link></li>
                                   <li><nuxt-link to="training/foodsafety">Food Safety for Caterers and Private Chefs - Level 2</nuxt-link></li>
                              </ul>
                </li>
                <li class="mb-1"><nuxt-link to="/consultations" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">Consultations</nuxt-link>
                     <ul class="sub-menu">
                                  <li><nuxt-link to="consultation/consultancy">eKatering CONSULTANCY SERVICES</nuxt-link></li>
                                  <li><nuxt-link to="consultation/foodregistration">Local Authority Food Registration</nuxt-link></li>
                                   <li><nuxt-link to="consultation/fsms">Documented Food Safety Management System (FSMS)</nuxt-link></li>
                                  <li><nuxt-link to="consultation/vri">Virtual Remote Inspection (VRI)</nuxt-link></li>
                                  <li><nuxt-link to="consultation/sfbb">Safer Food Better Business (SFBB)</nuxt-link></li>
                                   <li><nuxt-link to="consultation/foodstandard">Food Standard</nuxt-link></li>
                                  <li><nuxt-link to="consultation/legaladvice">Legal Advice</nuxt-link></li>
                              </ul>
                </li>
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
      </div>
</template>

<script>
export default {

}
</script>

<style>
.bgcolor{
    background-color: #652D90;
}
.headbg{
    background-color: #34174A;
}


.sub-menu > li {
  display: block;
  position: relative;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
ul > li > .sub-menu > li:hover > a {
  color: #fff;
  background: #652D90;
}

li:hover > .sub-menu {
  opacity: 1;
  visibility: visible;
  /* display: absolute; */
  
}
.sub-menu{
    position: absolute;
  top: 20%;
  /* left: 100%; */
  z-index: 911;
  float: left;
  min-width: 220px;
  padding: 0px 0px;
  text-align: left;
  list-style: none;
  background-color: #34174A;
  background-clip: padding-box;
  opacity: 0;
  border-radius: 0px;
  visibility: hidden;
  -webkit-transition: opacity .4s ease, visibility .4s ease;
  transition: opacity .4s ease, visibility .4s ease;
  -webkit-box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.1);
}
.sub-menu > li > a {
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  padding: 12px 30px;
  display: block;
  line-height: 26px;
  white-space: nowrap;
  position: relative;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
</style>
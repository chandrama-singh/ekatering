<template>
  <section class="overflow-hidden">
    <div class="px-4 lg:px-24 mx-auto">
      <nav class="flex items-center py-4">
        <nuxt-link class="text-3xl font-semibold leading-none" to="/">
          <img class="h-20" src="../../assets/logo.png" alt="" width="auto" />
        </nuxt-link>
        <div class="lg:hidden ml-auto">
          <button
            class="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
            @click="changeMenu"
          >
            <svg
              class="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex items-center space-x-12 ml-auto ">
          <li>
            <nuxt-link
              to="/"
              class="text-md text-purple-600 hover:text-purple-900"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="text-md text-purple-600 hover:text-purple-900"
              >About Us</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              to="#"
              class="text-md text-purple-600 hover:text-purple-900"
              >Training<i class="ml-2 fas fa-caret-down"></i
            >
            </nuxt-link>

            <ul class="sub-menu">
              <li>
                <nuxt-link to="/training"
                  >eKatering Online Training</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/tr_level_1"
                  >Food Allergen for Caterers and Private Chefs Level
                  1</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/tr_level_2"
                  >Food Safety for Caterers and Private Chefs - Level
                  2</nuxt-link
                >
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link
              to="#"
              class="text-md text-purple-600 hover:text-purple-900"
              >Consultations
              <i class="fas fa-caret-down"></i
            >
            </nuxt-link>

            <ul class="sub-menu">
              <li>
                <nuxt-link to="consultation/consultancy"
                  >eKatering consultancy Services</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/authorityfood"
                  >Local Authority Food Registration</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/fsms"
                  >Documented Food Safety Management System (FSMS)</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/vir">Virtual Remote Inspection (VRI)</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/sfbb"
                  >Safer Food Better Business (SFBB)</nuxt-link
                >
              </li>
              <li><nuxt-link to="/foodstandard">Food Standard</nuxt-link></li>
              <li><nuxt-link to="/legal">Legal Advice</nuxt-link></li>
            </ul>
          </li>
          <li>
            <nuxt-link
              to="/features"
              class="text-md text-purple-600 hover:text-purple-900"
              >Features</nuxt-link
            >
          </li>
           <li>
            <nuxt-link
              to="/faq"
              class="text-md text-purple-600 hover:text-purple-900"
              >FAQs</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/contactus"
              class="text-md text-purple-600 hover:text-purple-900"
              >Contact</nuxt-link
            >
          </li>



<div class="flex text-sm items-center" v-if="user">
            <button @click="goToDashboard" class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300">Profile</button>
          </div>


          <li v-if="!user">
            <button
              class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300"
              type="login"
            ><nuxt-link to="/signin">Login</nuxt-link>
            </button>
          </li>
           <li v-else>
            <button
            @click="goToDashboard()"
              class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300"
              type="login"
            >Dashboard
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div  v-if="openMenu" class="navbar-menu lg:hidden relative z-50">
      <div
        class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
      ></div>
      <nav
        class=" fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6  border-r overflow-y-auto"
      >

        <div v-click-outside="hide" class="bg-purple-600 left-0">
          <ul>
            <li class="mb-1">
              <nuxt-link
                to="/"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >Home</nuxt-link
              >
            </li>
            <li class="mb-1">
              <nuxt-link
                to="/about"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >About Us</nuxt-link
              >
            </li>


            <li class="mb-1">
              <nuxt-link
                to="/training"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >Training
              </nuxt-link>
              <ul class="sub-menu">
                <li>
                  <nuxt-link to="training/onlinetraining"
                    >eKatering Online Training</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="training/foodallergen"
                    >Food Allergen for Caterers and Private Chefs Level
                    1</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="training/foodsafety"
                    >Food Safety for Caterers and Private Chefs - Level
                    2</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <li class="mb-1">
              <nuxt-link
                to="/consultations"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >Consultations</nuxt-link
              >
              <ul class="sub-menu">
                <li>
                  <nuxt-link to="consultation/consultancy"
                    >eKatering consultancy Services</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/authorityfood"
                    >Local Authority Food Registration</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/fsms"
                    >Documented Food Safety Management System (FSMS)</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/vir"
                    >Virtual Remote Inspection (VRI)</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/sfbb"
                    >Safer Food Better Business (SFBB)</nuxt-link
                  >
                </li>
                <li><nuxt-link to="/foodstandard">Food Standard</nuxt-link></li>
                <li><nuxt-link to="/legal">Legal Advice</nuxt-link></li>
              </ul>
            </li>
            <li class="mb-1">
              <nuxt-link
                to="/features"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >Features</nuxt-link
              >
            </li>
            <!-- <li class="mb-1"><nuxt-link to="/faq" class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600">FAQ</nuxt-link></li> -->
            <li class="mb-1">
              <nuxt-link
                to="/contactus"
                class="block p-4 text-sm text-white hover:bg-blue-50 hover:text-blue-600"
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </div>
        <!-- <div class="mt-auto">
          <p class="my-4 text-xs text-blueGray-400">
            <span>Get in Touch</span>
            <a class="text-blue-600 hover:text-blue-600 underline" href="#"
              >info@example.com</a
            >
          </p>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/facebook-blue.svg" alt="" />
          </a>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/twitter-blue.svg" alt="" />
          </a>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/instagram-blue.svg" alt="" />
          </a>
        </div> -->
      </nav>
    </div>
  </section>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      openMenu: false,
      burgerClick:false
    };
  },
  directives: {
    ClickOutside
  },
  methods: {
    goToDashboard(){
      if(this.user.role == 'caterers'){
        this.$router.push('/caterers/dashboard')
      }else if(this.user.role == 'admin'){
        this.$router.push('/admin/dashboard')
      }
    },
    changeMenu() {
      console.log("clicked change menu");
      this.openMenu = true;
      this.burgerClick=true;
      console.log("openMenu",this.openMenu);
    },
    hide() {
      if(this.burgerClick==false)
      {
         this.openMenu = false;
      console.log(this.openMenu);
      }
      this.burgerClick=false;
       console.log("burgerClick",this.burgerClick);

    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.state.isAuthenticated;
    },
    user(){
      return this.$store.state.user;
    }
  }
};
</script>

<style>
.bgcolor {
  background-color: #652d90;
}
.headbg {
  background-color: #34174a;
}

.sub-menu > li {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
ul > li > .sub-menu > li:hover > a {
  color: #fff;
  background: #34174a;
}

li:hover > .sub-menu {
  opacity: 1;
  visibility: visible;
  /* display: absolute; */
}
.sub-menu {
  position: absolute;
  top: 12%;
  /* left: 100%; */
  z-index: 911;
  float: left;
  /* min-width: auto; */
  padding: 0px 0px;
  text-align: left;
  list-style: none;
  background-color: #652d90;
  background-clip: padding-box;
  opacity: 0;
  border-radius: 0px;
  visibility: hidden;
  -webkit-transition: opacity 0.4s ease, visibility 0.4s ease;
  transition: opacity 0.4s ease, visibility 0.4s ease;
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
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
</style>

<template>
  <section>
    <div class="container px-4 mx-auto">
      <nav class="flex items-center py-4">
        <nuxt-link class="text-3xl font-semibold leading-none" to="/">
          <img class="h-20" src="../assets/logo.png" alt="" width="auto" />
        </nuxt-link>
        <div class="lg:hidden ml-auto">
          <button
            class="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
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
        <ul class="hidden lg:flex items-center space-x-12 ml-auto mr-12">
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
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/training"
              class="text-md text-purple-600 hover:text-purple-900"
              >Training
            </nuxt-link>
            <span class="absolute pt-3 pl-2">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1.64014L7 7.64014L1 1.64014"
                  stroke="#6D28D9"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <ul class="sub-menu">
              <li>
                <nuxt-link to="training/onlinetraining"
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
              to="/consultations"
              class="text-md text-purple-600 hover:text-purple-900"
              >Consultations <i class="fas fa-caret-down"></i
            ></nuxt-link>
            <span class="absolute pt-3 pl-2">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1.64014L7 7.64014L1 1.64014"
                  stroke="#6D28D9"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <ul class="sub-menu">
              <li>
                <nuxt-link to="consultation/consultancy"
                  >eKatering CONSULTANCY SERVICES</nuxt-link
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
              to="/contactus"
              class="text-md text-purple-600 hover:text-purple-900"
              >Contact</nuxt-link
            >
          </li>
          <li>
            <button
              class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-purple-600 border-purple-600 hover:text-white hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300"
              type="login"
            ><nuxt-link to="/signin">Login</nuxt-link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div v-click-outside="hide" class="hidden navbar-menu relative z-50">
      <div
        class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
      ></div>
      <nav
        class=" fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <nuxt-link class="mr-auto text-3xl font-semibold leading-none" to="/">
            <img
              class="h-10"
              src="metis-assets/logos/metis/metis.svg"
              alt=""
              width="auto"
            />
          </nuxt-link>
          <button @click="changeMenu" class="navbar-close">
            <svg
              class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div v-if="openMenu">
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
                    >eKatering CONSULTANCY SERVICES</nuxt-link
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
        <div class="mt-auto">
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
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      openMenu: false
    };
  },
  directives: {
    ClickOutside
  },
  methods: {
    changeMenu() {
      console.log("clicked change menu");
      this.openMenu = !this.openMenu;
      console.log(this.openMenu);
    },
    hide() {
      this.openMenu = false;
      console.log(this.openMenu);
    }
  },
  computed: {}
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
  min-width: 220px;
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

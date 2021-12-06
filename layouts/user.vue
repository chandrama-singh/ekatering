<template>
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <UserHeader />
    <div class="demo mr-0 mr-md-3" @click="menuClose">
      <Nuxt />
      <transition name="slide-fade">
        <sidebar-menu
          :menu="menu"
          :collapsed="collapsed"
          :theme="selectedTheme"
          width="280px"
          :show-one-child="true"
          v-show="show"
          @toggle-collapse="onToggleCollapse"
          :hideToggle="true"
          @item-click="onItemClick"
          class="transition duration-500 ease-in-out"
        >
          <template v-slot:header>
            <button
              class="
                h-16
                flex
                items-center
                focus:outline-none
                bg-menuBlack
                hover:bg-black
              "
              :class="{
                'w-full': !collapsed,
                'justify-end': !collapsed,
                'justify-center': collapsed,
              }"
              @click="onToggleCollapse"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                v-if="collapsed"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
              <svg
                class="w-6 h-6 mr-4"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </template>
        </sidebar-menu>
      </transition>
      <!-- <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" /> -->
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`,
};
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          href: "/caterers/dashboard",
          title: "Dashboard",
          icon: "fa fa-tachometer-alt",
        },
        {
          href: "/caterers/profile",
          title: "Profile",
          icon: "far fa-id-badge",
        },
        {
          href: "/caterers/my-training",
          title: "My Training",
          icon: "fa fa-graduation-cap",
        },

        {
          title: "Products",
          href: "/caterers/products",
          icon: "fas fa-shopping-basket",
        },

        {
          title: "Services",
          icon: "fas fa-shopping-basket",
          href: "/caterers/services",
        },

        {
          title: "Categories",
          href: "/caterers/categories",
          icon: "fas fa-th-large",
        },
        {
          title: "Coupons",
          href: "/caterers/coupons",
          icon: "fas fa-cut",
        },

        {
          href: "/caterers/orders",
          title: "Orders",
          icon: "fas fa-hands-helping",
        },
      ],
      collapsed: false,
      selectedTheme: "",
      isOnMobile: false,
    };
  },
  components: {
    SidebarMenu,
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  computed: {
    show() {
      if (this.isOnMobile) {
        return this.$store.getters.isOpen;
      }
      return true;
    },
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = !this.collapsed;
      if (this.isOnMobile) {
        this.$store.commit("setOpen");
        this.collapsed = false;
      }
    },
    onItemClick(event, item, node) {
      console.log("onItemClick");
      this.$store.commit("setClose");
    },
    menuClose() {
      if (this.isOnMobile) {
        this.$store.commit("setClose");
      }
    },

    onResize() {
      if (
        /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.isOnMobile = true;
        this.collapsed = false;
        this.$store.commit("setClose");
      } else if (window.innerWidth <= 600) {
        this.isOnMobile = true;
        this.collapsed = false;
        this.$store.commit("setClose");
      } else {
        this.isOnMobile = false;
        this.collapsed = true;
      }
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  background-color: #e5e7eb;
}

#demo {
  padding-left: 280px;
  transition: 0.3s ease;
}

#demo.onmobile {
  padding-left: 0px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

pre {
  color: #000;
  background: gray;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}

/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
}
</style>

@@ -0,0 +1,146 @@
<template>
  <div id="demo" :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <UserHeader />
    <div class="demo">
      <Nuxt />
      <sidebar-menu :menu="menu" :collapsed="collapsed" :theme="selectedTheme" width="280px" :show-one-child="true" @toggle-collapse="onToggleCollapse" :hideToggle="true" @item-click="onItemClick">
        <template v-slot:header>
          <button class="h-16 flex items-center focus:outline-none bg-menuBlack hover:bg-black" :class="{'w-full': !collapsed, 'justify-end': !collapsed, 'justify-center': collapsed,}" @click="onToggleCollapse">
            <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-if="collapsed"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            <svg class="w-6 h-6 mr-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-else><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
          </button>
        </template>
      </sidebar-menu>
      <!-- <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" /> -->
    </div>
  </div>
</template>

<script>
  import { SidebarMenu } from 'vue-sidebar-menu'
    import '@fortawesome/fontawesome-free/css/all.css'
  import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
  const separator = {
    template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
  }
  export default {
    name: 'App',
    data() {
      return {
        menu: [
          {
            href: '/admin/dashboard',
            title: 'Dashboard',
            icon: 'fa fa-tachometer-alt'
          },
          {
            title: 'Admin Users',
            icon: 'fas fa-user-shield',
            child: [{
            href: '#',
            title: 'Add User',
            icon: 'fas fa-user-plus'
           },
           {
            href: '/admin/list-admin',
            title: 'List Users',
            icon: 'fas fa-user-shield'
           },
            ]
          },

         {
            title: 'Caterers',
            icon: 'fas fa-utensils',
            child: [{
            href: '/admin/applications',
            title: 'View Applications',
            icon: 'fas fa-clock'
           },
           {
            href: '/admin/catererslist',
            title: 'View Caterers',
            icon: 'fas fa-utensils'
           },
            ]
          },

          {
            title: 'Consultation',
            icon: 'fas fa-hands-helping',
            child: [{
            href: '/admin/consultation-orders',
            title: 'View Consultation Orders',
            icon: 'fas fa-shopping-cart'
           },
            ]
          },

          {
            title: 'Training',
            icon: 'fas fa-chalkboard-teacher',
            child: [{
            href: '/admin/training-orders',
            title: 'View Training Orders',
            icon: 'fas fa-shopping-cart'
           },
            ]
          },

          // {
          //   title: 'Payments',
          //   icon: 'fa fa-file-invoice-dollar',
          //   child: [{
          //   href: '/admin/payments',
          //   title: 'Payments',
          //   icon: 'fa fa-file-invoice-dollar'
          //  },
          //  {
          //   href: '/admin/service-payment',
          //   title: 'Service Payment',
          //   icon: 'fa fa-tasks'
          //  },
          //   ]
          // },

          //  {
          //   title: 'Ledgers',
          //   icon: 'fa fa-book',
          //   child: [
          // {
          //   href: '/admin/ledgers',
          //   title: 'Ledgers',
          //   icon: 'fa fa-book'
          // },
          // {
          //   href: '/admin/audits',
          //   title: 'Audits',
          //   icon: 'fa fa-book'
          // },
          //   ]
          // },
        ],
        collapsed: false,
        // selectedTheme: 'white-theme',
        selectedTheme: '',
        isOnMobile: false
      }
    },
    components: {
      SidebarMenu
    },
    mounted() {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    },
    methods: {
      onToggleCollapse(collapsed) {
        console.log(collapsed)
        this.collapsed = !this.collapsed
      },
      onItemClick(event, item, node) {
        console.log('onItemClick')
      },
      onResize() {
        if (window.innerWidth <= 767) {
          this.isOnMobile = true
          this.collapsed = true
        } else {
          this.isOnMobile = false
          this.collapsed = true
        }
      }
    }
  }

</script>

<style>
  body,
  html {
    margin: 0;
    padding: 0;
    background-color: #E5E7EB;
  }

  #demo {
    padding-left: 280px;
	  transition: 0.3s ease;
  }

  #demo.collapsed {
    padding-left: 50px;
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

</style>

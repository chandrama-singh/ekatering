<template>
  <div>
    <PageHeader pageTitle="Coupons">
      <template v-slot:action>
        <div class="p-1 bg-white flex border border-gray-400 rounded">
          <div class="flex flex-auto flex-wrap"></div>
          <input id="filter-text-box" @input="onFilterTextChange" placeholder="Search by anything"
            class="py-1 px-2 appearance-none outline-none w-full text-gray-800">
          <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
            <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-chevron-up w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>

         <button @click="AddCoupon" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
        Add Coupon
    </button>
      </template>
    </PageHeader>

    <div class="mx-6">
      <ag-grid-vue style="width: 100%; height: 560px" class="ag-theme-alpine mt-6" :columnDefs="columnDefs"
        :rowData="coupons" :context="context" :gridOptions="gridOptions" rowSelection="multiple">
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
  import {
    GET_ALL_COUPON
  } from '@/graphql/query'
  import PaymentAction from '@/components/ListActions/PaymentAction';


  export default {
    layout:'user',
   middleware: 'authUser',
    data() {
      return {
        columnDefs: null,
        rowData: null,
        context: null,
        gridOptions: {},
      };
    },
    apollo: {
      coupons: {
        query: GET_ALL_COUPON,
        error(error) {
          console.log(error)
        }
      }
    },
    beforeMount() {
      this.gridOptions = {
        rowHeight: 56,
      };
      this.columnDefs = [
        {
          headerName: 'Code',
          field: 'code',
          sortable: true,
          filter: true,
          minWidth: 300,

        },
        {
          headerName: 'Discount',
          field: 'discount',
          sortable: true,
          filter: true,
        },

        {
          headerName: 'Status',
          field: 'status',
          sortable: true,
          filter: true,
          maxWidth: 140,
          cellRenderer: (cell) => {
            if (cell.data.status ) {
              return '<span class=" badge bg-green-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Enable</span>';
            }
            return '<span class="badge  bg-red-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Disable</span>';
          },
        },

        {
          headerName: 'Actions',
          field: 'action',
          cellRendererFramework: PaymentAction,
          minWidth: 100,
        },
      ];
    },

    methods: {
       AddCoupon(){
      this.$router.push('/caterers/coupons/add-coupon');
    },
      onFilterTextChange() {
        console.log(this.categories)
        this.gridOptions.api.setQuickFilter(
          document.getElementById("filter-text-box").value
        );
      },
      refetchData() {
        this.$apollo.queries.coupons.refetch()
      }
    },
    created() {
      this.$apollo.queries.coupons.refetch()
    },
  };

</script>

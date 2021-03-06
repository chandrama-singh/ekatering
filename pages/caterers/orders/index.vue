<template>
  <div>
    <PageHeader pageTitle="Orders">
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
        <!-- <t-button @click="showModal=true" type="button" class="mx-3 py-3">New Course</t-button> -->
      </template>
    </PageHeader>

    <div class="mx-6">
      <ag-grid-vue style="width: 100%; height: 560px" class="ag-theme-alpine mt-6" :columnDefs="columnDefs"
        :rowData="payments" :context="context" :gridOptions="gridOptions" rowSelection="multiple">
      </ag-grid-vue>

    </div>
  </div>
</template>

<script>
  import {
    GET_ALL_PAYMENT
  } from '@/graphql/query'
  import moment from "moment-timezone";
  import PaymentAction from '@/components/ListActions/PaymentAction';
  import UserProfile from '@/components/User/UserProfile';

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
      payments: {
        query: GET_ALL_PAYMENT,
        error(error) {
          console.log(error)
        }
      }
    },
    beforeMount() {
      this.gridOptions = {
        rowHeight: 56,
      };
      this.columnDefs = [{
          headerName: 'User',
          field: 'user.name',
          sortable: true,
          filter: true,
          checkboxSelection: true,
          cellRendererFramework: UserProfile,
          minWidth: 300,

        },
        {
          headerName: 'Package',
          field: 'package.title',
          sortable: true,
          filter: true,
          minWidth: 300,

        },
        {
          headerName: 'Amount',
          field: 'amount',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'Date',
          field: 'createdAt',
          sortable: true,
          minWidth: 180,
          cellRenderer: (cell) => {
            return moment(cell.data.createdAt).format("DD MMM YYYY HH:mm A");
          },
          filter: "agDateColumnFilter",
          filterParams: {
            buttons: ['reset'],
            comparator: function (filterLocalDateAtMidnight, cellValue) {
              if (cellValue == null) {
                return 0;
              }
              let cellDate = moment(cellValue).format("L");
              let compareDate = moment(filterLocalDateAtMidnight).format("L");
              if (Date.parse(cellDate) < Date.parse(compareDate)) {
                return -1;
              } else if (Date.parse(cellDate) > Date.parse(compareDate)) {
                return 1;
              } else {
                return 0;
              }
            }
          }
        },

        {
          headerName: 'Status',
          field: 'status',
          sortable: true,
          filter: true,
          maxWidth: 140,
          cellRenderer: (cell) => {
            if (cell.data.status == "Paid") {
              return '<span class=" badge bg-green-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Paid</span>';
            }
            return '<span class="badge  bg-red-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">UnPaid</span>';
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
      onFilterTextChange() {
        this.gridOptions.api.setQuickFilter(
          document.getElementById("filter-text-box").value
        );
      },
      refetchData() {
        this.$apollo.queries.payments.refetch()
      }
    },
    created() {
      this.$apollo.queries.payments.refetch()
    },
  };

</script>

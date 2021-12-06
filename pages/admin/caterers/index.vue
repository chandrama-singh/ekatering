<template>
  <div>
    <PageHeader pageTitle="Caterers">
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

         <!-- <button @click="AddCategory" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
        Add Caterer
    </button> -->
      </template>
    </PageHeader>

    <div class="mx-6">
      <ag-grid-vue style="width: 100%; height: 560px" class="ag-theme-alpine mt-6" :columnDefs="columnDefs"
        :rowData="caterers" :context="context" :gridOptions="gridOptions"  rowHeight=100>
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
  import {
    GET_ALL_CATERER
  } from '@/graphql/query'
  import CatererAction from '@/components/ListActions/CatererAction';
  import Catererprofile from '@/components/grid/Catererprofile';
  import Name from '@/components/grid/Name';
  import Contact from '@/components/grid/Contact';


  export default {
    layout:'admin',

    data() {
      return {
        columnDefs: null,
        rowData: null,
        context: null,
        gridOptions: {},
      };
    },
    components:{
      Catererprofile,
      Name,
      Contact,
      CatererAction

    },
    apollo: {
      caterers: {
        query: GET_ALL_CATERER,
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
          headerName: 'Profile',
          field: 'business_name',
          sortable: true,
          filter: true,
          cellRendererFramework: Catererprofile,
          minWidth: 300,
          rowHeight:200

        },
        {
          headerName: 'Name',
          field: 'fullName',
           cellRendererFramework: Name,
          sortable: true,
          minWidth: 300,
          filter: true,
        },
         {
          headerName: 'Contact',
          field: 'email',
           cellRendererFramework: Contact,
          sortable: true,
          minWidth: 300,
          filter: true,
        },

        {
          headerName: 'Status',
          field: 'status',
          sortable: true,
          filter: true,
          maxWidth: 140,
         cellRenderer: (cell) => {
            console.log("renderer",cell.data.status)
            if (cell.data.status=="ACTIVE" ) {
              return '<span class=" badge bg-green-700 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Active</span>';
            }
             else if (cell.data.status=="ENDED" ) {
              return '<span class=" badge bg-purple-900 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Canceled</span>';
            }
             else if (cell.data.status=="DECLINED" ) {
              return '<span class=" badge bg-red-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Declined</span>';
            }
             else if (cell.data.status=="CANCELED" ) {
              return '<span class=" badge bg-red-500 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Canceled</span>';
            }
             else if (cell.data.status=="ARCHIVED" ) {
              return '<span class=" badge bg-gray-800 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Archived</span>';
            }
             else if (cell.data.status=="PENDING" ) {
              return '<span class=" badge bg-yellow-500 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Not Active</span>';
            }
            else
            return `<span class="badge  bg-yellow-500 rounded-full px-2 py-1 text-center text-white text-sm mr-1">Not Active</span>`;
          },
        },

        {
          headerName: 'Actions',
          field: 'action',
          cellRendererFramework: CatererAction,
          minWidth: 100,
        },
      ];
    },

    methods: {
       AddCategory(){
      this.$router.push('/caterers/categories/add-category');
    },
      onFilterTextChange() {
        console.log(this.caterers)
        this.gridOptions.api.setQuickFilter(
          document.getElementById("filter-text-box").value
        );
      },
      refetchData() {
        this.$apollo.queries.caterers.refetch()
      }
    },
    created() {
      this.$apollo.queries.caterers.refetch()
    },
  };

</script>

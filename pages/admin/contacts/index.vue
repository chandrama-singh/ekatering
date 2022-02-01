<template>
  <div>
    <PageHeader pageTitle="Consultations Contacts">
      <template v-slot:action>
        <div class="p-1 bg-white flex border border-gray-400 rounded">
          <div class="flex flex-auto flex-wrap"></div>
          <input
            id="filter-text-box"
            @input="onFilterTextChange"
            placeholder="Search by anything"
            class="py-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
          <div
            class="
              text-gray-300
              w-8
              py-1
              pl-2
              pr-1
              border-l
              flex
              items-center
              border-gray-200
            "
          >
            <button
              class="
                cursor-pointer
                w-6
                h-6
                text-gray-600
                outline-none
                focus:outline-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-up w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </template>
    </PageHeader>

    <div class="mx-6">
      <ag-grid-vue
        style="width: 100%; height: 560px"
        class="ag-theme-alpine mt-6"
        :columnDefs="columnDefs"
        :rowData="consultations"
        :context="context"
        :gridOptions="gridOptions"
        rowSelection="multiple"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { GET_ALL_CONSULTATION } from "@/graphql/query";
import CategoryAction from "@/components/ListActions/CategoryAction";

export default {
  layout: "admin",
  middleware: "authAdmin",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      context: null,
      gridOptions: {},
    };
  },
  apollo: {
    consultations: {
      query: GET_ALL_CONSULTATION,
      error(error) {
        console.log(error);
      },
    },
  },
  beforeMount() {
    this.gridOptions = {
      rowHeight: 56,
    };
    this.columnDefs = [
      {
        headerName: "Name",
        field: "name",
        sortable: true,
        filter: true,
        minWidth: 300,
      },
      {
        headerName: "Email",
        field: "email",
        sortable: true,
        filter: true,
      },
      {
        headerName: "Contact",
        field: " contact_number",
        sortable: true,
        filter: true,
      },

      {
        headerName: "Actions",
        field: "action",
        cellRendererFramework: CategoryAction,
        minWidth: 100,
      },
    ];
  },

  methods: {
    onFilterTextChange() {
      console.log(this.consultations);
      this.gridOptions.api.setQuickFilter(
        document.getElementById("filter-text-box").value
      );
    },
    refetchData() {
      this.$apollo.queries.consultations.refetch();
    },
  },
  created() {
    this.$apollo.queries.consultations.refetch();
  },
};
</script>

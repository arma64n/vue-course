<template>
  <div>
    <h4 v-if="!searchItem">Total users: {{ totalNumber }}</h4>
    <h4 v-else>Found users: {{ filterArray.length }} </h4>
    <user-table-search 
      @pass-search-item="receiveSearchItem">
    </user-table-search>

    <div class="flex">
      <user-table-pagination
        :totalNumber="filterArray.length"
        :itemsOnPage="itemsOnPage"
        :currentPage="currentPage"
        @pass-current-page="receiveCurrentPage"
        @pass-start-page="currentPage = 1"
        @pass-end-page="receiveEndPage">
      </user-table-pagination>

      <user-table-select
        :itemsOnPage="itemsOnPage"
        @pass-items-on-page="receiveItemsOnPage">
      </user-table-select>
    </div>
    <user-table-list 
      :users="divideArray"
      @reload-page="reloadTable">
    </user-table-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user-table',
  components: { 
    UserTableList: () => import('@/components/UserTableList.vue'),
    UserTablePagination: () => import('@/components/UserTablePagination.vue'),
    UserTableSelect: () => import('@/components/UserTableSelect.vue'),
    UserTableSearch: () => import('@/components/UserTableSearch.vue')
    },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalNumber() {
      return this.users.length;
    },
    filterArray() {
      return this.users.filter(x => x.name.toLowerCase().includes(this.searchItem.toLowerCase()))
    },
    divideArray() {
      let chunk = +this.itemsOnPage
      let page = +this.currentPage
      let formula = page*chunk
      return this.filterArray.slice(formula-chunk, formula)
    }
  },
  data() {
    return {
      itemsOnPage: '100',
      currentPage: 1,
      searchItem: ''
    }
  },
  methods: {
    reloadTable() {
      this.$emit('reload-page')
    },
    receiveCurrentPage(val) {
      this.currentPage = +val
    },
    receiveEndPage(val) {
      this.currentPage = val
    },
    receiveItemsOnPage(val) {
      this.itemsOnPage = val
    },
    receiveSearchItem(val) {
      this.searchItem = val
    }
  }
}
</script>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
}
</style>

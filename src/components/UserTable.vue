<template>
  <div>
    <h2>Total users: {{ totalNumber }}</h2>
    <user-table-pagination
      :totalNumber="totalNumber"
      :itemsOnPage="itemsOnPage"
      :currentPage="currentPage"
      @pass-current-page="receiveCurrentPage">
    </user-table-pagination>

    <user-table-select
      :itemsOnPage="itemsOnPage"
      @pass-items-on-page="receiveItemsOnPage">
    </user-table-select>

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
    divideArray() {
      let chunk = +this.itemsOnPage
      let page = +this.currentPage
      let formula = (1 + page*chunk)
      return this.users.slice(formula-chunk, formula)
    }
  },
  data() {
    return {
      itemsOnPage: '100',
      currentPage: 1
    }
  },
  methods: {
    reloadTable() {
      this.$emit('reload-page')
    },
    receiveCurrentPage(val) {
      this.currentPage = val
    },
    receiveItemsOnPage(val) {
      this.itemsOnPage = val
    }
  }
}
</script>

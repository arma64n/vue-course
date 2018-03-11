<template>
  <div class="input-group mb-3">
    <input type="search" class="form-control" placeholder="Search by name" :value="search" @input="searchItem">
  </div>
</template>

<script>
export default {
  name: 'user-table-search',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchItem(e) {
      this.$emit('pass-search-item', e.target.value)
    }
  }
}
</script>

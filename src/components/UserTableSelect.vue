<template>
  <div>
    <select class="custom-select" :value="itemsOnPage" @change="passItemsOnPage">
      <option>100</option>
      <option>200</option>
      <option>500</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'user-table-select',
  data() {
    return {
      itemsOnPage: '100'
    }
  },
  methods: {
    passItemsOnPage(e) {
      this.$emit('pass-items-on-page', e.target.value)
    }
  }
}
</script>

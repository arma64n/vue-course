<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" v-for="item in howManyPages" :key="item" @click.prevent="passCurrentPage">
          <a class="page-link" href="#">
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'user-table-pagination',
  props: ['totalNumber','itemsOnPage','currentPage'],
  computed: {
    howManyPages() {
      return Math.ceil(this.totalNumber / this.itemsOnPage)
    }
  },
  methods: {
    passCurrentPage(e) {
      this.$emit('pass-current-page', e.target.innerText)
    }
  }
}
</script>

<template>
  <div>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" @click="passStartPage" v-if="hideIfOne"><a class="page-link" href="#">Start</a></li>
        <li class="page-item" v-for="item in howManyPages" :key="item" @click.prevent="passCurrentPage">
          <a class="page-link" href="#">
            {{ item }}
          </a>
        </li>
        <li class="page-item" @click="passEndPage" v-if="hideIfOne"><a class="page-link" href="#">End</a></li>
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
    },
    hideIfOne() {
      return this.howManyPages > 1
    }
  },
  methods: {
    passCurrentPage(e) {
      this.$emit('pass-current-page', e.target.innerText)
    },
    passStartPage() {
      this.$emit('pass-start-page', 0)
    },
    passEndPage() {
      this.$emit('pass-end-page', this.howManyPages)
    }
  }
}
</script>

<template>
  <div>
    <router-link :to="{name: 'add-user'}">
      <button type="button" class="btn btn-success">Add user</button>
    </router-link>
    <user-table @reload-page="loadData" :users="users"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'users',
  components: { UserTable: () => import('@/components/UserTable.vue') }, 
  data() {
    return {
      users: []
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get(`http://localhost:3000/users`)
      .then(response => this.users = response.data)
    }
  }
}
</script>

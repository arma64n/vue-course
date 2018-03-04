<template>
  <div>
    <h2>Total users: {{ users.length }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td> {{ user.name }} </td>
          <td> {{ user.email }}</td>
          <td><button type="button" class="btn btn-danger" @click="deleteItem(user.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user-table',
  props: {
    users: Array,
    required: true
  },
  methods: {
    deleteItem(val) {
      axios.delete(`http://localhost:3000/users/${val}`)
      .then(response => this.reloadTable())
    },
    reloadTable() {
      this.$emit('reload-page')
    }
  }
}
</script>

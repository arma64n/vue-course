<template>
  <div>
    <h2>Total users: {{ userCount }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">City</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td> {{ user.name }} </td>
          <td> {{ user.email }}</td>
          <td> {{ user.city }}</td>
          <td>
            <button type="button" class="btn btn-primary" @click="editItem(user.id)">Edit</button>
            <button type="button" class="btn btn-danger" @click="deleteItem(user.id)">Delete</button>
          </td>
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
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    userCount() {
      return this.users.length;
    }
  },
  methods: {
    deleteItem(val) {
      axios.delete(`http://localhost:3000/users/${val}`)
      .then(response => this.reloadTable())
    },
    editItem(val) {
      this.$router.push({name: 'edit-user', params: {id: val}})
    },
    reloadTable() {
      this.$emit('reload-page')
    }
  }
}
</script>

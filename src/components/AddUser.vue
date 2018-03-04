<template>
  <form class="add-user">
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Name" v-model="newUser.name">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="E-mail" v-model="newUser.email">
      </div>
      <button type="button" class="btn btn-success" @click="addUser">Add user</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add-user',
  data() {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    addUser() {
      axios.post(`http://localhost:3000/users`, this.newUser)
      .then( response => this.reloadTable())
    },
    reloadTable() {
      this.$emit('reload-page')
    }
  }
}
</script>

<style>
.add-user {
  width: 500px;
  margin: 1em auto;
}
</style>

<template>
  <div>
    <user-form :user="newUser">
      <button type="button" class="btn btn-success" @click="addUser">Save user</button>
    </user-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add-user',
  components: { UserForm: () => import('@/components/UserForm.vue') },
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        city: ''
      }
    }
  },
  methods: {
    addUser() {
      axios.post(`http://localhost:3000/users`, this.newUser)
      .then( response => {
        if (response.status === 200 || response.status === 201) {
          this.$router.push({name: 'users'})
        } else {
          alert(response)
        }
      })
    }
  }
}
</script>


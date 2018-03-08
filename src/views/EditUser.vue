<template>
  <div>
    <user-form :user="currentUser">
      <button type="button" class="btn btn-primary" @click="editUser">Edit user</button>
    </user-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'edit-user',
  components: { UserForm: () => import('@/components/UserForm.vue')},
  data() {
    return {
      currentUser: ''
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
    .then(response => this.currentUser = response.data )
  },
  methods: {
    editUser() {
      axios.patch(`http://localhost:3000/users/${this.$route.params.id}`, this.currentUser)
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

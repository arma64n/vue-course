<template>
  <div>
    <add-user @reload-page="fetchData"/>
    <user-table @reload-page="fetchData" :users="users"/>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser'
import UserTable from '@/components/UserTable'

export default {
  components: { AddUser, UserTable }, 
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {      
      fetch(`http://localhost:3000/users`)
      .then(response => response.json())
      .then(json => this.users = json)
    }
  }
}
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" to="/" exact><strong>VUE-COURSE</strong></router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="container"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

export default {
  
}
</script>

<style>

.current {
  font-weight: bold;
}
</style>
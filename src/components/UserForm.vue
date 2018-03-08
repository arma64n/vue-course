<template>
  <div class="mt-4">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" placeholder="Age" v-model="user.age">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" placeholder="E-mail" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" placeholder="City" v-model="user.city">
      </div>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  props: ['user']
  // props: {
  //   user: {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>

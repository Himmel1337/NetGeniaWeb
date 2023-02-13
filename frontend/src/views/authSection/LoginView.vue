<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "LoginView",

  data() {
    return {
      username: '',
      password: '',
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="form">
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login()">Log me in</button>
    </form>
  </div>
</template>


<script>
import {mapStores} from "pinia/dist/pinia";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "LoginView",

  components: {

  },

  data() {
    return {
      show1: false,
      show2: true,
      username: '',
      password: '',
      formValid: true,
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'Username must be at least 3 characters',
      ],
    }
  },

  computed: {
    ...mapStores(useUserStore),
  },

  methods: {
    userStore: undefined,
    async login() {
      await this.$refs.form.validate();
      if (!this.formValid) return;
      await this.userStore.login(this.username, this.password)
      if (!this.userStore.error) {
        this.$router.push(this.userStore.afterLoginRoute ?? {name: 'notification'})
        this.userStore.setAfterLoginRoute(null)
      }
    },
  }
  
}
</script>

<style scoped>
input {
  width: 20%;
  padding: 15px 20px;
  margin: 1%;
  box-sizing: border-box;

}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: #FFFFFF;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 28px;
  margin-left: 1%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  position: relative;
  width: 200px;
  transition-duration: 0.4s;
  overflow: hidden;
  cursor: pointer;
  margin-top: 1%;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -32px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.form {
  margin-top: 1%;
}
</style>
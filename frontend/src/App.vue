<template>
  <v-app>
    <v-app-bar>
      <v-menu anchor="bottom end"  class="header">

      <v-app-bar-title class="header__logo">
          <img src="../src/resources/logo1.png" class="mx-2">
          <h1>NetGeniaWeb</h1>
      </v-app-bar-title>

        <v-list class="header__tabs">
          <v-list-item class="header__tab" v-for="(tab, index) in tabs" :key="index">
            <v-btn @click="confirmInput(tab.route)" style="height: 60px; width:120px; color: brown;">{{ tab.label }}</v-btn>
          </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  data() {
    return {
      tabs: [
        {label: 'Home', route: '/'},
        {label: 'About', route: '/about'},
        {label: 'Services', route: '/services'},
        {label: 'Contact', route: '/contact'},
        {label: 'FAQ', route: '/faq'},
        {label: 'Login', route: '/login'}

      ],
    };
  },

  methods:{
    confirmInput(route){
      this.$router.push(route);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -3.5%;
  margin-left: -1%;
  padding: 1rem;
  background-color: black;
  color: #6ca38f;
  width: 100%;
  /*background-color: #6ca38f;*/
}

.header__logo h1 {
  margin-left: 50%;
  margin-top: -27%;
}

.header__logo img {
  margin-left: -50%;
}



.header__tabs {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__tab {
  margin-right: 1rem;
}

@media (max-width: 767px) {
  .header{
    width: 100%;
    margin-top: -10%;
    margin-left: -5%;
  }

  .header__logo{
    margin-left: 3%;
  }

  .header__logo h1{
    font-size: 100%;
    margin-top: -5%;
  }
}

</style>

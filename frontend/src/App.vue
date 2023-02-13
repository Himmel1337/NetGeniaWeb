<template>
  <header>
    <nav class="header">
      <div class="header__logo">
        <h1>NetGeniaWeb</h1>
      </div>
      <router-view></router-view>
      <ul class="header__tabs">
        <li class="header__tab" v-for="(tab, index) in tabs" :key="index">
          <button @click="confirmInput(tab.route)" style="height: 60px; width:120px; color: brown;">{{ tab.label }}</button>
        </li>
      </ul>
    </nav>
  </header>
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
   padding: 1rem;
   background-color: #6ca38f;
   color: black;
 }

.header__logo h1 {
  margin: 0;
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

.header__tab-link {
  color: black;
  text-decoration: none;
}
</style>

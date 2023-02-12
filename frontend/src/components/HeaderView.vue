<template>
  <header>
    <nav class="header">
      <div class="header__logo">
        <h1>NetGeniaWeb</h1>
      </div>
      <ul class="header__tabs">
        <li class="header__tab" v-for="(tab, index) in tabs" :key="index">
          <router-link :to="tab.route" class="header__tab-link">{{tab.label}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {label: 'Home', route: '/'},
        {label: 'About', route: '/about'},
        {label: 'Services', route: '/services'},
        {label: 'Contact', route: '/contact'},
        {label: 'FAQ', route: '/faq'},
      ],
    };
  },
};
</script>

<style>
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
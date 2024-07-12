<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

nav a:hover {
  text-decoration: underline;
}

#app {
  padding-top: 50px; /* To ensure content is not hidden behind the navbar */
}
</style>

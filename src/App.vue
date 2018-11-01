<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">core</span>
      <span class="navbar-link"><a @click="authenticate('oauth2')">sign-in</a></span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
   methods: {
    authenticate: function (provider) {
      let t = this;
      this.$auth.authenticate(provider).then(function (authorization) {
        t.$store.dispatch({type: 'auth/newAuthorization', 
          authorization: authorization.data});
      });
    }
  }   
};
</script>

<style>
  body {
    font-family: "IBM Plex Sans",
      -apple-system,BlinkMacSystemFont,
      "Segoe UI",Roboto,
      "Helvetica Neue",Arial,sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji","Segoe UI Symbol",
      "Noto Color Emoji";
    background: rgb(250,250,250);
    padding-top: 5em;
  }
</style>

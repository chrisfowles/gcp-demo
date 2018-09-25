<template>
  <div id="app">
    <img alt="Google Cloud logo" src="./assets/googlecloud.png">
    <HelloWorld msg="Hello Google Cloud Summit 2018"/>
    <div class="logos">
      <img class="logo-small" alt="Google Cloud Build logo" src="./assets/cloudbuild.png">
      <img class="logo-small" alt="Octocat logo" src="./assets/octocat.png">
      <img class="logo-small" alt="Google App Engine logo" src="./assets/appengine.png">
    </div>
    <div>
      <p>https://github.com/marketplace/google-cloud-build</p>
      <p>https://github.com/chrisfowles/gcp-demo</p>
      <p>https://www.cypress.io</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-small {
  height: 140px;
}
</style>

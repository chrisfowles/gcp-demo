<template>
  <div id="app">
    <img alt="Google Cloud logo" src="./assets/googlecloud.png">
    <HelloWorld msg="Hello Google Cloud Summit 2018"/>
    <div class="logos">
      <img data-cy="logo-sm-cloudbuild" class="logo-small" alt="Google Cloud Build logo" src="./assets/cloudbuild.png">
      <img data-cy="logo-sm-octocat" class="logo-small" alt="Octocat logo" src="./assets/octocat.png">
      <img data-cy="logo-sm-appengine" class="logo-small" alt="Google App Engine logo" src="./assets/appengine.png">
    </div>
    <div>
      <p class="reference-link">https://github.com/marketplace/google-cloud-build</p>
      <p class="reference-link">https://github.com/chrisfowles/gcp-demo</p>
      <p class="reference-link">https://www.cypress.io</p>
      <p class="reference-link">https://vuejs.org</p>
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

.reference-link {
  font-size: larger;
}

.logo-small {
  height: 140px;
}
</style>

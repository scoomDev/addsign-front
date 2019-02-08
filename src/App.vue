<template>
  <div id="app" class="main-container">
    <div class="container flex-align-center">
      <router-view @authenticated="setAuthenticated"/>
      <div class="row w100 mb-2">
        <div class="logo-adct">
          <p>créé par</p>
          <a href="https://addictic.fr" title="Lien vers le site d'Addictic" target="_blank">
            <img src="../src/assets/image/logo-adct.png" alt="Logo Addictic" />
          </a>
        </div>
      </div>
      <p class="contact mb-1">signaler un problème : <a href="mailto:support@addictic.fr" rel="noopener">support@addictic.fr</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        authenticated: this.$store.state.authenticated
      }
    },
    methods: {
      setAuthenticated(status) {
        this.$store.actions.setAuthenticated(status)
      }
    }
  }
</script>
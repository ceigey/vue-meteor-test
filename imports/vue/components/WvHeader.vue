<template>
  <b-navbar
    tag="header"
    toggleable="lg"
    variant="dark"
    type="dark"
    
  >
    <!-- <b-button @click="$store.dispatch('nav/toggleSidebar')">
      Menu
    </b-button> -->
    <b-navbar-brand to="/home">
      <!-- <font-awesome-icon class="app-icon" icon="globe" size="xs"></font-awesome-icon> -->
      <strong class="text-success">World</strong>Vue
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/world-select">Worlds</b-nav-item>
        <router-link to="/contact-us">
          <b-nav-item>Contact Us</b-nav-item>
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown 
          text="User"
          menu-class="shadow user-menu"
          right
        >
          <b-dropdown-item>
            Settings
          </b-dropdown-item>
          <b-dropdown-item>
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .user-menu {
    transition: box-shadow 0.2s ease-in-out;
  }
  .app-icon {
    font-size: 10px;
    color: white;
  }
</style>
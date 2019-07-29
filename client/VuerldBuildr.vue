<template>
  <div>
    <vbr-navbar :toggle-sidebar="toggleSidebar">
    </vbr-navbar>
    <div class="under-navbar-space">
      <vbr-sidebar v-show="$store.state.nav.showSidebar">
        <template slot="links">
          <b-nav vertical class="bg-light">
            <vbr-sidebar-link to="/home" :current="this.$route.path">
              Home
            </vbr-sidebar-link>
            <vbr-sidebar-link to="/settings" :current="this.$route.path">
              Settings
            </vbr-sidebar-link>
            <vbr-sidebar-link to="/world-select" :current="this.$route.path">
              Worlds
            </vbr-sidebar-link>
            <vbr-sidebar-link to="/world-edit" :current="this.$route.path">
              Edit a World
            </vbr-sidebar-link>
          </b-nav>
        </template>
      </vbr-sidebar>

      <router-view class="in-app-router-view"></router-view>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import World from '#/imports/collections/World';
import VbrNavbar from '#/imports/vue/components/Navbar.vue';
import VbrSidebar from '#/imports/vue/components/Sidebar.vue';
import VbrSidebarLink from '#/imports/vue/components/SidebarLink.vue';
// @ts-check
export default {
  components: {
    VbrNavbar,
    VbrSidebar,
    VbrSidebarLink
  },
  data () {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
  // computed: {
  //   this.$router
  // }
}
</script>

<style lang="scss">
  .under-navbar-space {
    overflow: auto;
    height: 80vh;
  }

  .in-app-router-view {
    padding-top: 2em;
    padding-bottom: 2em;
    overflow: auto;
    height: 100vh;
  }
</style>
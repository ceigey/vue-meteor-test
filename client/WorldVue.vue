<template>
  <div>
    <wv-navbar :toggle-sidebar="toggleSidebar">
    </wv-navbar>
    <div class="under-navbar-space">
      <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout -->
      <!-- https://yaminncco.github.io/vue-sidebar-menu/#/ -->
      <b-container class="app-container">
        <b-row>
          <b-col class="sidebar-column">
            <wv-sidebar v-show="$store.state.nav.showSidebar">
              <template slot="links">
                <b-nav vertical class="bg-light">
                  <wv-sidebar-link to="/home" :current="this.$route.path">
                    Home
                  </wv-sidebar-link>
                  <wv-sidebar-link to="/settings" :current="this.$route.path">
                    Settings
                  </wv-sidebar-link>
                  <wv-sidebar-link to="/world-select" :current="this.$route.path">
                    Worlds
                  </wv-sidebar-link>
                  <wv-sidebar-link to="/world-edit" :current="this.$route.path">
                    Edit a World
                  </wv-sidebar-link>
                </b-nav>
              </template>
            </wv-sidebar>
          </b-col>

          <b-col class="router-view-column">
            <router-view class="in-app-router-view"></router-view>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import World from '#/imports/collections/World';
import WvNavbar from '#/imports/vue/components/Navbar.vue';
import WvSidebar from '#/imports/vue/components/Sidebar.vue';
import WvSidebarLink from '#/imports/vue/components/SidebarLink.vue';
// @ts-check
export default {
  components: {
    WvNavbar,
    WvSidebar,
    WvSidebarLink
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
  .app-container {
    padding: 0px;
    margin: 0px;
    & .sidebar-column {
      width: 200px;
    }
  }
  /* .under-navbar-space {
    overflow: auto;
    height: 80vh;
  }

  .in-app-router-view {
    padding-top: 2em;
    padding-bottom: 2em;
    overflow: auto;
    height: 100vh;
  } */
</style>
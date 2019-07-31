<template>
  <div>
    <div :class="showNav ? 'app-container-full' : 'app-container-full nav-small'">
      <wv-header></wv-header>
      <wv-nav class="bg-dark text-light">
          <wv-nav-collapse>
            <font-awesome-icon icon="ellipsis-h" />
          </wv-nav-collapse>
          <wv-nav-link
            to="/home"
            :current="$route.path"
            :full="showNav"
          >
            <font-awesome-icon slot="icon" icon="home" />
            Home
          </wv-nav-link>
          <wv-nav-link
            to="/settings"
            :current="$route.path"
            :full="showNav"
          >
            <font-awesome-icon slot="icon" icon="cog" />
            Settings
          </wv-nav-link>
          <wv-nav-link
            to="/world-select"
            :current="$route.path"
            :full="showNav"
          >
            <font-awesome-icon slot="icon" icon="globe-asia" />
            Worldssssssss
          </wv-nav-link>
      </wv-nav>
      <main class="wv-main">
        <router-view></router-view>
      </main>
      <footer class="bg-success text-light">
        Maybe I'll put tooltips here?
      </footer>
    </div>
  </div>
</template>

<!-- <router-view class="in-app-router-view"></router-view> -->

<script>
import { Meteor } from 'meteor/meteor';
import World from '#/imports/collections/World';
import WvHeader from '#/imports/vue/components/Header.vue';
import WvNav from '#/imports/vue/components/Nav.vue';
import WvNavLink from '#/imports/vue/components/NavLink.vue';
import WvNavCollapse from '#/imports/vue/components/NavCollapse.vue'
// import WvNav from '#/imports/vue/components/Nav.vue';
// import WvFooter from '#/imports/vue/components/Footer.vue';
// import WvSidebarLink from '#/imports/vue/components/SidebarLink.vue';
// @ts-check
export default {
  components: {
    WvHeader,
    WvNav,
    WvNavLink,
    WvNavCollapse
    // WvSidebarLink
  },
  data () {
    return {
      showSidebar: true
    }
  },
  computed: {
    showNav() {
      return this.$store.state.nav.showNav;
    }
  }
}
</script>

<style lang="scss">
  /* .app-container {
    padding: 0px;
    margin: 0px;
    & .sidebar-column {
      width: 200px;
    }
  } */

  /* https://alligator.io/css/css-grid-holy-grail-layout/ */
  .app-container-full {
    transition: 0.2s ease-in-out;
    padding: 0px;
    margin: 0px;
    display: grid;
    grid-template-areas:
      "header header"
      "nav main"
      "nav main"
      "footer footer"
    ;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 0px;
    height: 100vh;
    header {
      grid-area: header;
    }
    nav {
      grid-area: nav;
      overflow-y: auto;
      overflow-x: hidden;
    }
    main {
      grid-area: main;
      overflow: auto;
    }
    footer {
      grid-area: footer;
    }
  }

  .nav-small {
    grid-template-columns: 75px 1fr;
  }

  /* .nav-small {
    animation: 0.2s nav-small cubic-bezier(.86,0,.07,1) 0.4s both
  }
  @keyframes nav-small {
    0% {
      grid-template-columns: 200px 1fr;
    }
    100% {
      grid-template-columns: 100px 1fr;
    }
  } */

  .wv-main {
    padding: 20px;
  }

</style>
<template>
  <div>
    <div :class="showNav ? 'app-container-full' : 'app-container-full nav-small'">
      <wv-header></wv-header>
      <wv-nav class="bg-dark text-light">
          <wv-nav-collapse @click="$store.dispatch('nav/toggleNav')">
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
            Worlds
          </wv-nav-link>
      </wv-nav>
      <main class="wv-main">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </main>
      <footer class="bg-success text-light">
        Maybe I'll put tooltips here?
      </footer>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import World from '#/imports/collections/World';
import WvHeader from '#/imports/vue/components/WvHeader.vue';
import WvNav from '#/imports/vue/components/WvNav.vue';
import WvNavLink from '#/imports/vue/components/WvNavLink.vue';
import WvNavCollapse from '#/imports/vue/components/WvNavCollapse.vue'
// @ts-check
export default {
  components: {
    WvHeader,
    WvNav,
    WvNavLink,
    WvNavCollapse
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
    grid-template-columns: auto 1fr; /* 200px 1fr */
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
    grid-template-columns: auto 1fr; /* 75px 1fr */
  }

  .wv-main {
    padding: 20px;
  }

  /**
    Vue transitions follow a certain syntax
    e.g. [NAME]-[ENTER/?]-[ACTIVE]
  **/

  .fade-enter-active {
    transition: opacity 0.1s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
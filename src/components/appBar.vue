<template>
  <div class="app-bar xl-shadow">
    <router-link :to="checkTag">
      <img
        style="-webkit-filter: grayscale(100%);
  filter: grayscale(100%);"
        v-if="navbar === '#home'"
        :src="left"
      >
      <img v-else :src="navbar">
    </router-link>
    <router-link to="/pwa">
      <img :src="oyen" alt="oyen.de">
      <!-- <span style="padding: 4px 20px" v-else class="mx-text red--text">{{tag.name}}</span> -->
    </router-link>
    <router-link to="/navigation/tags">
      <img @click="changeRoute" :src="right">
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["newspaper", "oyen", "more"],
  data() {
    return {
      right: "../assets/more.png",
      left: "../assets/logonew.png"
    };
  },
  computed: {
    ...mapState("event", ["tag", "navbar"]),
    checkTag() {
      if (this.tag.name === "Home") {
        return "/lukas/advertisment";
      } else {
        return "/tag/" + this.tag.name;
      }
    }
  },
  methods: {
    changeRoute() {
      this.$store.commit("event/SET_TAG", "world");
    }
  }
};
</script>

<style>
.app-bar {
  bottom: 0;
  margin: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background: #fff;
  align-items: center;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.app-bar img {
  height: 44px;
  width: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: cover;
}

.xl-shadow {
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
}

.mx-text {
  height: 30px !important;
  width: 100px;
  text-transform: capitalize;
  padding: 3px 8px;
}

@media screen and (min-width: 1000px) {
  .app-bar {
    width: 41%;
    margin: 0 30%;
  }
}

@media screen and (min-width: 100px) and (max-width: 1300px) {
  .app-bar {
    width: 100%;
    margin: 0 0%;
  }
}

@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .app-bar {
    width: 100%;
    margin: 0%;
  }
}

@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
  .app-bar {
    width: 100%;
    margin: 0%;
  }
}
</style>


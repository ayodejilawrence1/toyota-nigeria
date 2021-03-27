<template>
  <div class="dashboard">
    <div class="dashboard__left">
      <the-navbar></the-navbar>
    </div>
    <div class="dashboard__right"></div>

    <!-- <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: types.IS_LOGGED_IN
    })
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    }
  },
  watch: {
    isLoggedIn: function(newValue) {
      if (!newValue) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
.dashboard {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.dashboard__left {
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

.dashboard__right {
  flex: 1;
}
</style>

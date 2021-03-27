<template>
  <div class="the-navbar">
    <div class="the-navbar__top">
      <img src="/img/logos/dashboard-logo.svg" alt="" />
    </div>

    <div class="the-navbar__middle"></div>

    <div class="the-navbar__bottom">
      <img
        @click="logoutNow"
        src="/img/icons/signout.svg"
        class="c-pointer"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types";

export default {
  methods: {
    ...mapActions({
      logout: types.LOGOUT
    }),

    logoutNow() {
      this.logout();
    }
  }
};
</script>

<style>
.the-navbar {
  background: #58595b;
  box-shadow: 0px 4px 4px #e4e5e7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 101px;
  flex: 1;
}

.the-navbar__top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0;
}

.the-navbar__middle {
  flex: 1;
}

.the-navbar__bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0 90px 0;
}
</style>

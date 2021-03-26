<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
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

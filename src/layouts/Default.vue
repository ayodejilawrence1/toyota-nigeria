<template>
  <div>
    <router-view></router-view>
    {{ isLoggedIn }}
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
    if (this.isLoggedIn) {
      this.$router.push("/dashboard");
    }
  },
  watch: {
    isLoggedIn: function(newValue) {
      if (newValue) {
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>

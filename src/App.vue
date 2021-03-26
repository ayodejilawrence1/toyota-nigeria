<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from "./layouts/Default";
import DashboardLayout from "./layouts/Dashboard";

export default {
  data() {
    return {};
  },
  computed: {
    layout() {
      let layoutName = "default-layout";
      if (this.$route.meta && this.$route.meta.layout) {
        layoutName = this.$route.meta.layout;
      }

      return layoutName;
    }
  },
  components: {
    DashboardLayout,
    DefaultLayout
  }
};
</script>

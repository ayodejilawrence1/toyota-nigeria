<template>
  <div class="the-input-container">
    <input
      :type="computedType"
      class="the-input"
      :class="{ 'the-input--sm': size === 'sm' }"
      :value="value"
      @input="handleChange($event.target.value)"
    />

    <div
      class="the-input-show-hide"
      v-if="showHide !== false"
      @click="showingPassword = !showingPassword"
    >
      {{ showHideText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showingPassword: false
    };
  },
  computed: {
    computedType() {
      if (this.showingPassword) {
        return "text";
      } else {
        return this.type;
      }
    },
    showHideText() {
      return this.showingPassword ? "Hide" : "Show";
    }
  },
  methods: {
    handleChange(newVal) {
      this.$emit("input", newVal);
    }
  },
  props: {
    placeholder: {
      type: String,
      default: "Enter..."
    },
    value: {
      type: String
    },

    size: {
      type: String,
      default: "md"
    },
    type: {
      type: String,
      default: "text"
    },
    showHide: {
      default: false
    }
  }
};
</script>

<style scoped>
.the-input-container {
  position: relative;
}

.the-input {
  border: 1px solid #e4e5e7;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  background-color: transparent;
  padding: 8px 11px;
}

.the-input:focus {
  border: 1px solid #7ca8ff;
  outline: none;
}

.the-input-show-hide {
  text-decoration: underline;
  position: absolute;
  z-index: 9;
  right: 17px;
  top: 12px;
  cursor: pointer;
}
</style>

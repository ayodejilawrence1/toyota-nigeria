<template>
  <button
    class="the-button"
    :class="{
      'the-button--flat': flat || flat === '',
      'the-button--narrow': narrow || narrow === '',
      'the-button--block': block || block === '',
      'the-button--rounded': rounded !== false,
      'the-button--lg': size === 'lg',
      'the-button--xl': size === 'xl',
      'the-button--xxl': size === 'xxl',
      'the-button--outline': type === 'outline',
      'the-button--blue': type === 'blue'
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    flat: {
      default: false
    },
    narrow: {
      default: false
    },
    size: {
      type: String,
      default: "md" // md/sm/ls/xl
    },
    disabled: {
      default: false
    },
    block: {
      default: false
    },
    rounded: {
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.the-button {
  height: 45px;
  padding: 0 22px;
  border: none;
  background: #eb0a1e;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}

.the-button:active,
.the-button:focus {
  outline: none;
}

.the-button--flat {
  padding: 0 30px;
}
.the-button--narrow {
  padding: 0 10px;
}

.the-button--rounded {
  border-radius: 55px;
}

.the-button--lg {
  height: 32px;
}
.the-button--xl {
  height: 35px;
}
.the-button--xxl {
  height: 43px;
  font-size: 12px;
}

.the-button--block {
  width: 100%;
}

.the-button--blue {
  background-color: #06b5dd;
  border: 1px solid #06b5dd;
}

.the-button--blue:hover {
  background-color: #03a6ca;
}

.the-button--none {
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  color: #0070ab;
  text-decoration: underline;
  padding-left: 0;
  padding-right: 0;
}

.the-button--none:hover {
  color: #0059ce;
}

.the-button--outline {
  border: 1px solid #fff;
  background-color: #ffffff;
  color: #7933d2;
}

.the-button--outline:hover {
  color: #000;
}
</style>

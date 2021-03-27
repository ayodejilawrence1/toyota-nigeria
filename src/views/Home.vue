<template>
  <div class="home-page">
    <div class="home-page__left">
      <div class="home-page__left-top">
        <img src="/img/logo-left.svg" alt="" />
        <img src="/img/logo-right.svg" alt="" class="ml-2" />
      </div>

      <div class="home-page__left-bottom">
        <form @submit="onSubmit" @reset="onReset">
          <h2>
            Sign In to your account
          </h2>

          <p class="mt-3">
            Sign in now to access your account with the data you entered during
            your registration
          </p>

          <label class="mt-4">Email Address</label>
          <the-input type="email" v-model="form.email"></the-input>

          <label class="mt-4">Password</label>
          <the-input
            type="password"
            v-model="form.password"
            showHide
          ></the-input>

          <div class="aspace-between align-center mt-4">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.keepLoggedIn"
              name="checkbox-1"
            >
              Keep me signed in
            </b-form-checkbox>

            <b-link class="color-1">
              Forgot password?
            </b-link>
          </div>

          <the-button block class="mt-4">Sign In</the-button>
        </form>

        <p class="text-center mt-4">
          Don’t have an account?
          <b-link to="#" class="color-1"> Register</b-link>
        </p>
      </div>
    </div>

    <div class="home-page__right">
      <div class="home-page__right-container">
        <!-- <div class="white-card"></div> -->
        <home-slides></home-slides>
      </div>

      <img src="/img/bgs/top-right.svg" alt="" class="top-right-bg" />
      <img src="/img/bgs/bottom-left.svg" alt="" class="bottom-left-bg" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheInput from "../components/form/TheInput.vue";
import * as types from "../store/types";

export default {
  components: { TheInput },
  data() {
    return {
      form: {
        email: "",
        password: "",
        keepLoggedIn: false
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    ...mapActions({
      login: types.LOGIN
    }),
    onSubmit(evt) {
      if (evt) {
        evt.preventDefault();
      }

      let dummyData = {
        user: {
          username: "anonymous",
          role: "admin",
          token: "dymmy-token274jhkhkejfdjfjdhfjdhfjhd",
          permissions: []
        }
      };

      this.login(dummyData);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>

<style>
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.home-page__left {
  background: #fff;
  width: 525px;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  overflow-y: auto;
}

.home-page__left-top {
  display: flex;
  align-items: center;
}
.home-page__left-bottom {
  /* text-align: center; */
  padding-top: 100px;
}
.home-page__right {
  display: flex;
  flex: 1;
  background-color: #eb0a1e;
  background-size: 100% 100%;
  overflow-y: auto;
  position: relative;
}

.home-page__right-container {
  margin: auto;
  width: 98%;
  max-width: 512px;
  padding: 22px 0;
  z-index: 1;
}

.top-right-bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.bottom-left-bg {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

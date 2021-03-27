<template>
  <div class="default-page">
    <div class="default-page__left">
      <div class="default-page__left-top">
        <img src="/img/logo-left.svg" alt="" />
        <img src="/img/logo-right.svg" alt="" class="ml-2" />
      </div>

      <div class="default-page__left-bottom">
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
          <b-link to="/register" class="color-1"> Register</b-link>
        </p>
      </div>
    </div>

    <div class="default-page__right">
      <div class="default-page__right-container">
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

<style></style>

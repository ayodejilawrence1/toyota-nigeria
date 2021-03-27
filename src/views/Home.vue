<template>
  <div class="home-page">
    <div class="home-page__left">
      <div class="home-page__left-top">
        <img src="/img/logo-left.svg" alt="" />
        <img src="/img/logo-right.svg" alt="" class="ml-2" />
      </div>

      <div class="home-page__left-bottom">
        <h2>
          Sign In to your account
        </h2>

        <p>
          Sign in now to access your account with the data you entered during
          your registration
        </p>

        <b-form
          @submit="onSubmit"
          @reset="onReset"
          v-if="show"
          class="login-form"
        >
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            class="mt-4"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
            class="mt-4"
          >
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <div class="aspace-between align-center mt-4">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.keepLoggedIn"
              name="checkbox-1"
            >
              Keep me signed in
            </b-form-checkbox>

            <b-link class="text-link">
              Forgot password?
            </b-link>
          </div>

          <the-button block class="mt-4">Sign In</the-button>
          <!-- <b-button type="submit" variant="primary">Login</b-button> -->
        </b-form>
        <p class="text-center mt-4">
          Don’t have an account? <b-link to="#"> Register</b-link>
        </p>
      </div>
    </div>

    <div class="home-page__right">
      <div class="home-page__right-container">
        <!-- <div class="white-card"></div> -->
        <home-slides></home-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types";

export default {
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
      evt.preventDefault();

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
  background: #e5e5e5;
  width: 525px;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
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
  background-image: url("/img/bgs/Mask-Group.svg");
  background-size: 100% 100%;
  overflow-y: auto;
}

.home-page__right-container {
  margin: auto;
  width: 98%;
  max-width: 512px;
  padding: 22px 0;
}

.login-form {
}
</style>

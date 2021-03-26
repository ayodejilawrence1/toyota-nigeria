<template>
  <div class="home-page">
    <div class="home-page__left">
      <div class="home-page__left-top">
        <img src="/img/logo-left.svg" alt="" />
        <img src="/img/logo-right.svg" alt="" class="ml-2" />
      </div>
      <div class="home-page__left-middle">
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
          >
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </div>
      <div class="home-page__left-bottom">
        <p>
          Don’t have an accont? Register
        </p>
      </div>
    </div>

    <div class="home-page__right"></div>
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
        password: ""
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
  width: 463px;
  display: flex;
  flex-direction: column;
}

.home-page__left-top {
  padding: 30px 20px;
  display: flex;
  align-items: center;
}
.home-page__left-middle {
  padding: 20px 64px;
  flex: 1;
  overflow-y: auto;
}
.home-page__left-bottom {
  padding: 20px 64px;
  text-align: center;
}
.home-page__right {
}

.home-page__right {
  flex: 1;
  background: gray;
}

.login-form {
}
</style>

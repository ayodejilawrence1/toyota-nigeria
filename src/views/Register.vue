<template>
  <div class="default-page">
    <div class="default-page__left default-page__left--flat">
      <div class="default-page__left-top">
        <img src="/img/logo-left.svg" alt="" />
        <img src="/img/logo-right.svg" alt="" class="ml-2" />
      </div>

      <div class="default-page__left-bottom">
        <div class="register-tab">
          <div
            v-for="(accountType, i) in accountTypes"
            :key="accountType.text"
            class="register-tab__item"
            :class="{ 'register-tab__item--active': activeTypeIndex == i }"
            @click="activeTypeIndex = i"
          >
            <div class="aalign-center">
              <fa-icon class="mr-2" :icon="accountType.icon"></fa-icon>
              <span> {{ accountType.name }}</span>
            </div>
          </div>
        </div>

        <div class="mt-5" v-if="activeTypeIndex === 0">
          <h2>
            Private Registration
          </h2>

          <p class="mt-3">
            We will need your email address to sign you in back to your <br />
            account or to create account.
          </p>

          <b-row>
            <b-col md="6">
              <label class="mt-4">First Name</label>
              <the-input
                type="email"
                v-model="privateForm.firstName"
              ></the-input>
              <label class="mt-4">Address</label>
              <the-input type="email" v-model="privateForm.address"></the-input>

              <label class="mt-4">Password</label>
              <the-input
                type="password"
                v-model="privateForm.password"
              ></the-input>
            </b-col>
            <b-col md="6">
              <label class="mt-4">Last Name</label>
              <the-input
                type="email"
                v-model="privateForm.lastName"
              ></the-input>
              <label class="mt-4">Phone Number</label>
              <the-input
                type="email"
                v-model="privateForm.phoneNumber"
              ></the-input>

              <label class="mt-4"> Re-enter Password</label>
              <the-input
                type="password"
                v-model="privateForm.confirmPassword"
              ></the-input>
            </b-col>
          </b-row>
        </div>

        <div class="mt-5" v-if="activeTypeIndex === 1">
          <h2>
            Corporate Registration
          </h2>

          <p class="mt-3">
            We will need your email address to sign you in back to your <br />
            account or to create account.
          </p>

          <b-row>
            <b-col md="6">
              <label class="mt-4">Company Name</label>
              <the-input
                type="email"
                v-model="corporateForm.companyName"
              ></the-input>
              <label class="mt-4">Contact Name</label>
              <the-input
                type="email"
                v-model="corporateForm.contactName"
              ></the-input>

              <label class="mt-4">Contact Number</label>
              <the-input
                type="email"
                v-model="corporateForm.contactNumber"
              ></the-input>

              <label class="mt-4">Assigned User Email</label>
              <the-input
                type="email"
                v-model="corporateForm.assignedUserEmail"
              ></the-input>

              <label class="mt-4">Password</label>
              <the-input
                type="password"
                v-model="privateForm.password"
              ></the-input>
            </b-col>
            <b-col md="6">
              <label class="mt-4">Company Address</label>
              <the-input
                type="email"
                v-model="corporateForm.companyAddress"
              ></the-input>
              <label class="mt-4">Contact Designation</label>
              <the-input
                type="email"
                v-model="corporateForm.contactDesignation"
              ></the-input>

              <label class="mt-4">Assigned User Name</label>
              <the-input
                type="email"
                v-model="corporateForm.assignedUserName"
              ></the-input>

              <label class="mt-4">Assigned User Phone No</label>
              <the-input
                type="email"
                v-model="corporateForm.assignedUserPhoneNo"
              ></the-input>
              <label class="mt-4"> Re-enter Password</label>
              <the-input
                type="password"
                v-model="privateForm.confirmPassword"
              ></the-input>
            </b-col>
          </b-row>
        </div>

        <b-form-checkbox
          id="checkbox-1"
          v-model="form.receiveEmail"
          name="checkbox-1"
          class="mt-4"
        >
          Yes, I want to receive Toyota marketing emails
        </b-form-checkbox>

        <div class="register-bottom mt-4">
          By clicking Agree and Continue below, I agree to Toyota’s Terms of
          Service, Payment Terms and Privacy Policy

          <the-button block class="mt-4">Create Account</the-button>

          <p class="text-center mt-4">
            Already have an account?
            <b-link to="/" class="color-1"> Sign In</b-link>
          </p>
        </div>
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
        receiveEmail: false
      },
      privateForm: {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
      },
      corporateForm: {
        companyName: "",
        companyAddress: "",
        contactName: "",
        contactDesignation: "",
        contactNumber: "",
        assignedUserName: "",
        assignedUserEmail: "",
        assignedUserPhoneNo: "",
        password: "",
        confirmPassword: ""
      },
      accountTypes: [
        {
          name: "Private Account",
          icon: ["far", "user"]
        },
        {
          name: "Corporate Account",
          icon: "building"
        },
        {
          name: "Government Account",
          icon: "flag"
        }
      ],
      activeTypeIndex: 0
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
.register-bottom {
  max-width: 399px;
  margin: auto;
  text-align: center;
}
</style>

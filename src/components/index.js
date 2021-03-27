// Import vue components
import TheButton from "./form/TheButton.vue";
import TheInput from "./form/TheInput.vue";
import TheNavbar from "./TheNavbar.vue";
import HomeSlides from "./HomeSlides.vue";

// font-awesome
import FontAwesomeIcon from "./fontawesome";

export default {
  install(Vue /*, options */) {
    Vue.component("the-button", TheButton);
    Vue.component("the-input", TheInput);
    Vue.component("the-navbar", TheNavbar);
    Vue.component("home-slides", HomeSlides);

    // font-awesome
    Vue.component("fa-icon", FontAwesomeIcon);
  }
};

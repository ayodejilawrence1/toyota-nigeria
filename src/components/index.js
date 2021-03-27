// Import vue components
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";
import TheButton from "./form/TheButton.vue";
import TheInput from "./form/TheInput.vue";
import HomeSlides from "./HomeSlides.vue";

// font-awesome
import FontAwesomeIcon from "./fontawesome";

export default {
  install(Vue /*, options */) {
    Vue.component("my-header", MyHeader);
    Vue.component("my-footer", MyFooter);
    Vue.component("the-button", TheButton);
    Vue.component("the-input", TheInput);
    Vue.component("home-slides", HomeSlides);

    // font-awesome
    Vue.component("fa-icon", FontAwesomeIcon);
  }
};

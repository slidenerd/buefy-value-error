// https://fontawesome.com/docs/web/use-with/vue/
// https://fontawesome.com/docs/web/use-with/vue/use-with#nuxt
// For Nuxt 2
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faClock,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faLink,
  faLocationArrow,
  faThumbsDown,
  faThumbsUp,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faClock,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faLink,
  faLocationArrow,
  faThumbsDown,
  faThumbsUp,
  faTimes,
  faTimesCircle,
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

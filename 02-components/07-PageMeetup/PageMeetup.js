import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      error: null,
    };
  },

  watch: {
    meetupId: {
      handler() {
        this.callFetchMeetupById();
      },
    },
  },

  mounted() {
    this.callFetchMeetupById();
  },

  methods: {
    callFetchMeetupById() {
      this.meetup = null;
      this.error = null;
      return fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.meetup = meetup;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>
      <ui-container v-else-if="error">
        <ui-alert>{{ this.error }}</ui-alert>
      </ui-container>
      <ui-container v-else>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
    </div>`,
});

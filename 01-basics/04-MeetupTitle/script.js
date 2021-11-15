import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootAppComponent = defineComponent({
  name: 'Root',

  data() {
    return {
      meetup: null,
      meetupId: '',
    };
  },

  watch: {
    meetupId: {
      handler() {
        this.callFetchMeetupById();
      },
    },
  },

  methods: {
    callFetchMeetupById() {
      return fetchMeetupById(this.meetupId).then((data) => {
        this.meetup = data;
      });
    },
  },
});

const app = createApp(RootAppComponent);
const vm = app.mount('#app');
window.vm = vm;

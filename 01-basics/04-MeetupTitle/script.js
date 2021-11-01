import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

// Требуется создать Vue приложение

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
        this.fetchMeetupById();
      },
    },
  },

  methods: {
    fetchMeetupById() {
      return fetch(`${API_URL}/meetups/${this.meetupId}`).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            this.meetup = data;
          });
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
});

const app = createApp(RootAppComponent);
const vm = app.mount('#app');
window.vm = vm;

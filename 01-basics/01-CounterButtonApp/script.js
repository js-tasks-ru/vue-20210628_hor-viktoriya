import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      value: 0,
    };
  },

  methods: {
    incrementValue: function() {
      this.value += 1;
    },
  },

  template: '<button @click="incrementValue" type="button">{{ value }}</button>',
});

const app = createApp(RootComponentOptions);

const vm = app.mount('#app');

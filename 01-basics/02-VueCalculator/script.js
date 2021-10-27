import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponentOptions = defineComponent({
  name: 'Root',

  data() {
    return {
      firstOperand: 0,
      secondOperand: 0,
      operator: 'sum',
    };
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    result() {
      if (this.operator === 'sum') {
        return this.firstOperand + this.secondOperand;
      } else if (this.operator === 'subtract') {
        return this.firstOperand - this.secondOperand;
      } else if (this.operator === 'multiply') {
        return this.firstOperand * this.secondOperand;
      } else if (this.operator === 'divide') {
        return this.firstOperand / this.secondOperand;
      }
    },
  },
});

const app = createApp(RootComponentOptions);

const vm = app.mount('#app');

import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li v-for="agenda_item in agenda" class="agenda__item">
        <meetup-agenda-item :agenda-item="agenda_item"></meetup-agenda-item>
      </li>
    </ul>`,
});

import Vue from 'vue';
import template from './template.html';

export default Vue.extend({
  template: template,
  data: () => {
    return {
      listItem: [ "Item 1", "Item 2", "Item 3"]
    }
  }
});
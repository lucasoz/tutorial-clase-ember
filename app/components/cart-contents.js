import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  //primera forma
  // shoppingCart: service()
  //segunda forma
  cart: service('shopping-cart'),



  actions: {
    remove(item) {
      this.get('cart').remove(item);
    },
    add(item){
      this.get('cart').add(item);
    }
  },
});

app.component("cart-display", {
  props: ["cart", "cartTotal", "discountedTotal"],
  template: /*html*/ `
  <div class="cart">
        <h2>🛒 Mon Panier {{cart.length}}</h2>
        <ul>
          <li v-if="cart.length > 0" v-for="gadget in cart" :key="gadget.id">
            {{gadget.nom}} - {{gadget.prix}}€
            <button class="remove-btn" v-on:click="removeFromCart(gadget)">
              ❌
            </button>
          </li>
          <li v-else>Votre panier est vide.</li>
        </ul>
        <h3>
          💰 Total : <span v-if="cartTotal < 1000">{{cartTotal}}€</span>
          <span>
            <s v-if="cartTotal > 1000">{{cartTotal}}€</s> ➝
            <strong>{{discountedTotal}}€ (-10%)</strong>
          </span>
        </h3>
      </div>`,
  methods: {
    removeFromCart(gadget) {
      this.$emit("remove-from-cart", this.gadget);
    },
  },
});

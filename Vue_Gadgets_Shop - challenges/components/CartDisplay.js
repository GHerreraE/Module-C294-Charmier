app.component("cart-display", {
  props: ["cart", "cartTotal", "discountedTotal"],
  template: /*html*/ `
  <div class="cart">
        <h2>🛒 Mon Panier {{cart.length}}</h2>
        <ul>
        <li v-if="cart.length > 0" v-for="(gadget, index) in cart" :key="gadget.id">
            {{gadget.nom}} - {{gadget.prix}}€
            <button @click="decreaseQuantity(index)">➖</button>
            <strong>{{ gadget.quantity }}</strong>
            <button @click="increaseQuantity(index)">➕</button>
            <button class="remove-btn" @click="removeFromCart(index)">❌</button>
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
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.removeItem(index);
      }
    },
  },
});

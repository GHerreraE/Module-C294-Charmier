app.component("gadget-display", {
  props: ["gadget"], // Le gadget est passé en tant que prop depuis le parent
  template: /*html*/ `
  <div class="gadget">
  <img v-bind:src="gadget.image" />
  <h2>{{gadget.nom}}</h2>
  <p>{{gadget.prix}}€</p>
  <p v-if="gadget.inStock">✅ En stock</p>
  <p v-else>❌ Out of Stock</p>
  <button v-if="gadget.inStock" v-on:click="addToCart(gadget)">
    Ajouter au panier
  </button>
  <button v-else="gadget.inStock" :disabled="!inStock">
    Ajouter au panier
  </button>
</div>
    `,
  methods: {
    addToCart(gadget) {
      this.$emit("add-to-cart", this.gadget);
    },
  },
});

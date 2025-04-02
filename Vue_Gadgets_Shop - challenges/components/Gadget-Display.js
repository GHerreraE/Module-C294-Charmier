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
  <button v-else :disabled="!gadget.inStock">
  Ajouter au panier
</button>
<!-- Affichage des avis -->
<h3 v-if="gadget.reviews.length > 0">Avis :</h3>
<ul v-if="gadget.reviews.length > 0">
<li v-for="review in gadget.reviews" :key="review.name">
<strong>{{ review.name }}</strong> - {{ review.rating }}
<p>{{ review.comment }}</p>
</li>
</ul>
<p v-else>Aucun avis pour ce produit.</p>
<review-form :gadget="gadget" @add-review="addReview"></review-form>
</div>
    `,
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.gadget);
    },
    addReview(review) {
      this.gadget.reviews.push(review);
    },
  },
});

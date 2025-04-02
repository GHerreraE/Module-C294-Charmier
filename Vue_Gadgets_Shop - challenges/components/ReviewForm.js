app.component("review-form", {
  props: ["gadget"],
  data() {
    return {
      review: {
        name: "",
        rating: null,
        comment: "",
      },
      submitted: false,
    };
  },
  template: /*HTML*/ `
      <form @submit.prevent="submitReview" class="review-form">
        <h3>Donnez votre avis sur {{ gadget.nom }}</h3>
  
        <label for="name">Nom</label>
        <input id="name" v-model="review.name" type="text" required />
  
        <label for="rating">Note</label>
        <select id="rating" v-model="review.rating" required>
          <option disabled value="">Sélectionnez une note</option>
          <option>5 - Excellent</option>
          <option>4 - Très bien</option>
          <option>3 - Moyen</option>
          <option>2 - Mauvais</option>
          <option>1 - Très mauvais</option>
        </select>
  
        <label for="comment">Commentaire</label>
        <textarea id="comment" v-model="review.comment" required></textarea>
  
        <button type="submit">Envoyer l'avis</button>
      </form>
    `,
  methods: {
    submitReview() {
      this.$emit("add-review", this.review);
      this.review = { name: "", rating: null, comment: "" };
    },
  },
});

const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      description:
        "Découvrez les derniers gadgets électroniques de haute technologie !",
      gadgets: [
        {
          id: 1,
          nom: "Smartphone XZ",
          prix: 799,
          image: "./assets/phone.jpg",
          inStock: true,
          reviews: [],
        },
        {
          id: 2,
          nom: "Laptop Pro",
          prix: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
          reviews: [],
        },
        {
          id: 3,
          nom: "Ecouteurs Bluetooth",
          prix: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
          reviews: [],
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      let itemInCart = this.cart.find((item) => item.id === gadget.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        this.cart.push({ ...gadget, quantity: 1 });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },

    addReview(gadget, review) {
      this.reviews.push(review);
    },
  },
  computed: {
    cartTotal() {
      let total = 0;
      for (let gadget of this.cart) {
        total += gadget.prix * gadget.quantity;
      }
      return total;
    },
    discountedTotal() {
      if (this.cartTotal > 1000) {
        return this.cartTotal * 0.9;
      }
      return this.cartTotal;
    },
  },
});

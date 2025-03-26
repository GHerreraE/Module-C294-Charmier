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
        },
        {
          id: 2,
          nom: "Laptop Pro",
          prix: 1299,
          image: "./assets/laptop.jpg",
          inStock: false,
        },
        {
          id: 3,
          nom: "Ecouteurs Bluetooth",
          prix: 199,
          image: "./assets/earbuds.jpg",
          inStock: true,
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(gadget) {
      this.cart.push(gadget);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
  computed: {
    cartTotal() {
      let total = 0;
      for (let gadget of this.cart) {
        total += gadget.prix;
      }
      return total;
    },
    discountedTotal() {
      if (this.cartTotal > 1000) {
        return this.cartTotal * 0.9;
      }
    },
  },
});

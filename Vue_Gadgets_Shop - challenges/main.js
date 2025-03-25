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
    };
  },
});

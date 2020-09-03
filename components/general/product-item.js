const ProductItem = {
  template: `

  <div class="h-100">
    <img 
      :src="product.imgs[0].src"
      :alt="product.imgs[0].alt">
    <h2>{{ product.name }}</h2>
    <button class=""><span>Más de 326</span> CENOTES</button>
  </div>
  `,
  filters: {
    formatPrice(value) {
      if (!value) return '';
      let price = Math.ceil(value); //redondea sin decimales hacia arriba
      price = price.toString();
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //agrega comas
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    section: {
      type: String,
      default: 'packs'
    }
  },
  data() {
    return {
      ishover: false,
    }
  },
  methods: {
    formatPrice(price){
      Math.ceil(prod.regularPrice);
    }
  },
}
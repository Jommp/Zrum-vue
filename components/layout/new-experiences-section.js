const NewExperiences = {
  template: `
  <section class="new-experiences">

    <div class="container px-0 ">
      <h1>NUEVAS EXPERIENCIAS</h1>
      <div class="row w-100 mx-auto">
        <div class="new-exp-container mx-md-auto">

          <div class="new-exp-box">
            <a href="#">
              <img 
                :src="product.imgs[0].src"
                :alt="product.imgs[0].alt"
              >
              <h2>{{ product.name }}</h2>
              <button><span></span> CENOTES</button>
            </a>
          </div>
  
          <div class="new-exp-box">
            <a href="#">
              <img src="./img/islas-marietas-vallarta.png" alt="Islas Marietas Vallarta">
              <h2>VALLARTA</h2>
              <button><span></span> CENOTES</button>
            </a>
          </div>
  
          <div class="new-exp-box new-exp-box-lg">
            <a href="#">
              <img src="./img/cenote.png" alt="Cenotes">
              <h2>RIVIERA<br>MAYA</h2>
              <button><span>Más de 326</span> <br> CENOTES</button>
            </a>
          </div>
  
          <div class="new-exp-box new-exp-box-lg">
            <a href="#">
              <img src="./img/islas-marietas-vallarta.png" alt="Islas Marietas Vallarta">
              <h2>VALLARTA</h2>
              <button class=""> CENOTES</button>
            </a>
          </div>
        </div>
      </div>
        
      <button class="btn-new-exp">VER MAS</button>
    </div>
  </section>
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
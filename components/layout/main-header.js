const MainHeader = {
  template: `
  
    <header>

      <img :src="logos.headerSrc" class="item-header img-fluid py-4" alt="logo">

      <div class="nav-area">
      <nav class="navbar navbar-expand-md container navbar-light" id="nav-services"> 
        <b-navbar-toggle target="nav-collapse" class="mx-auto"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav w-100 d-flex flex-column flex-md-row justify-content-around align-items-center">
            <li 
              v-for="link in getLinks"
              class="nav-item mx-0 mx-md-1 mx-lg-3 mx-xl-4"
              :class="getLinkClass(link)"
              >
              <a class="nav-link text-uppercase" :class="getLinkClass(link)" :href="link.url">{{link.text}}</a>
            </li>
          </ul>
        </b-collapse>
      </nav>
    </div>

      <div class="banner-data py-3">
        <div class="container">
          <div class="row">          
            <div class="col-5 ">
              <div class="row justify-content-around">
                <i class="fas fa-phone"></i>
                <p class="text-center">01 800 236 4545</p>
              </div>
            </div>
        
            <div class="col-7 ">
              <div class="row justify-content-around">
                <i class="fas fa-envelope"></i>
                <p class="text-center">info@tuempresa.com</p>
              </div>          
            </div>
          </div>
        </div>
      </div>

    </div>

    </header>

  `,
  props: {
    contactInfo: {
      type: Object,
      required: true
    },
    links: {
      type: Array,
      required: true
    },
    currentPageId: {
      type: String,
      default: 'home'
    },
    logos: {
      type: Object,
      required: true
    },
    lang:{
      type: Array,
      required: true
    },
    moneyEx:{
      type: Array,
      required: true
    }
  },
  data() {
    return {  
    }
  },
  components: { Selector },
  computed: {
    getLinks(){
      return this.links.filter(link => link.showAtHeader == true);
    }
  },
  methods: {
    getLinkClass(link){
      if(this.currentPageId == link.id)
        return 'active';
      return '';
    }
  },
}
const MainFooter = {
  template: `
  <footer class="py-5">

    <div class="container">
      <div class="row">
        <!-- SERVICIOS -->
        <div class="col-4 col-sm-3 col-lg-3 col-xl-3 text-center text-lg-left" id="services">
          <p class="title text-sm-left">Servicios</p>
          <ul>
            <li v-for="(serv, index) in getServicesLinks">
              <a :href="serv.url"> 
                {{serv.text}}
              </a>
            </li>
          </ul>
        </div>
        <!-- DESTINOS -->
        <div class="col-4 col-sm-2 col-lg-2 col-xl-2 text-center text-lg-left" id="destinations">
          <p class="title text-sm-left">Destinos</p>
          <ul>
            <li v-for="(dest, index) in getDestinationsLinks">
              <a :href="dest.url"> 
                {{dest.text}}
              </a>
            </li>
          </ul>
        </div>
        <!-- SIGUENOS SM v-if="viewportSize == 'SM' || viewportSize == 'MD' || viewportSize == 'LG' 
        || viewportSize == 'XL'"-->
        <div v-showon.sm.md.lg.xl class="col-sm-4 pr-md-5">
          
          <div class="social-net-area text-left">
            <p class="title text-left text-sm-center">Síguenos</p>
            <div class="social-net-icons d-flex align-items-center justify-content-between mx-auto">
              <a v-for="sn in contactInfo.socialNetworks"
              :href="sn.url"
              class="sn-link"
              target="_blank">
              <div class="sn-icon" :id="sn.id">
                <i class="fab fa-twitter" 
                v-if="sn.id == 'twitter'"></i>
                <i class="fab fa-facebook-f" 
                v-if="sn.id == 'facebook'"></i>
                <i class="fab fa-instagram"
                v-if="sn.id == 'instagram'"></i>
                <i class="fab fa-youtube"
                v-if="sn.id == 'youtube'"></i>
              </div>
              </a>
            </div>
          </div>

          <div class="ssl-area text-center mt-4">
            <img src="./img/imgZrum/ssl-certified.png" height="40">
          </div>

        </div>
        
        <!-- OPCIONES DE PAGO SM-->
        <div class="col-4 col-sm-3 p-0">

          <div>
            <p class="title text-center">Opciones de pago</p>
            <div class="text-center">
              <img src="./img/imgZrum/payment-option.png" alt="Opciones de Pago" class="img-fluid">
            </div>
          </div>

          <!-- CERTIFICADO SSL  v-if="viewportSize == 'XS'"-->
          <div v-showon.xs class="ssl-area text-center mt-3">
            <img src="./img/imgZrum/ssl-certified.png" height="40">
          </div>

          <!-- SELECTORES v-if="viewportSize == 'SM' || viewportSize == 'MD' || viewportSize == 'LG' || viewportSize == 'XL'"-->
          <div v-showon.sm.md.lg.xl class="mt-3 mt-md-4">

            <div class="language-currency text-center my-auto">

              <select name="language" id="language-select" class="mb-sm-2 mr-md-2 mb-md-0">
                <option value="esp">ESP</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>

              <select name="currency" id="currency-select" class="">
                <option value="mxn">MXN</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
          
            </div>
          </div>
        </div>
       <!--  v-if="viewportSize == 'XS'" -->
        <div v-showon.xs class="col-12 col-md-4 col-lg-3 col-xl-3 mt-3" id="more">        
          <div class="row">
            <!-- REDES SOCIALES -->
            <div class="social-net-area col col-md-12 text-center text-lg-left d-flex justify-content-center">

              <p class="title my-auto mr-3">Síguenos</p>
              <div class="social-net-icons d-flex align-items-center justify-content-between ml-lg-0">
                <a v-for="sn in contactInfo.socialNetworks"
                  :href="sn.url"
                  class="sn-link"
                  target="_blank">
                  <div class="sn-icon" :id="sn.id">

                    <i class="fab fa-twitter" 
                      v-if="sn.id == 'twitter'"></i>
                    <i class="fab fa-facebook-f" 
                      v-if="sn.id == 'facebook'"></i>
                    <i class="fab fa-instagram"
                      v-if="sn.id == 'instagram'"></i>
                    <i class="fab fa-youtube"
                      v-if="sn.id == 'youtube'"></i>
                  </div>
                </a>
              </div>
            </div>
            <!-- CERTIFICADO SSL v-if="minMDViewport" -->
            <div v-showon.md.lg.xl class="ssl-area col-6 col-md-12 text-center text-lg-left mt-md-4">
              <img src="./img/imgZrum/ssl-certified.png" height="40">
            </div>

          </div>
          <!-- SELECTORES v-if="!minMDViewport"-->
          <div v-showon.xs.sm class="row d-flex">
            <div class="language-currency mt-3 mx-auto">

              <select name="language" id="language-select">
                <option value="esp">ESP</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>

              <select name="currency" id="currency-select" class="ml-2">
                <option value="mxn">MXN</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
          
            </div>
          </div>

        </div>

      </div>

      <div class="row bottom">
        <div class="links col-12 text-center mt-4">
          <ul>
            <li v-for="(page, index) in getPagesLinks">
              <b v-if="index > 0"> | </b>
              <a :href="page.url"> {{page.text}} </a>
            </li>
          </ul>
        </div>

        <div class="contact col-12 text-center mt-2">
          Zrum &reg; All Rights Reserved
        </div>

      </div>

    </div>

  </footer>
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
    minMDViewport:{
      type: Boolean,
      required: true
    },
    viewportSize:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  components: {  },
  computed: {
    getPagesLinks(){
      return this.links.filter(link => link.type == 'page' && link.showAtHeader == false);
    },
    getServicesLinks(){
      return this.links.filter(link => link.type == 'service');
    },
    getDestinationsLinks(){
      return this.links.filter(link => link.type == 'desination');
    }
  },
  methods: {
   
  },
}
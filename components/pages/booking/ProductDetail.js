const ProductDetail = {
  template: `
  <div class="content" v-if="product != null">

    <MainHeader 
      :contactInfo="contactInfo"
      :links="links"
      :currentPageId="'product-detail'"
      :logos="logos"
      :lang="lang"
      :moneyEx="moneyEx">
    </MainHeader>

    <section id="main-section">

      <div class="title-main">
        <div class="container py-1 py-md-4">
          <div class="row align-items-center justify-content-center">
            <span class="ml-5">Inicio / Paquetes / <b>Reserva</b></span>
            <h2 class="">RESERVA</h2>
          </div>
        </div>
      </div>

      <div v-if="!minMDViewport">
        <h1 class="product-title py-2 text-center">
          {{product.name}},
          <span> {{product.destination}}.</span>
        </h1>
      </div>

      <div
        v-if="!minMDViewport" 
        class="container-fluid widget-container">
        <div class="row">

          <BookingWidget
            :widgetConfig="widgetConfig"
            :currency="currency"
            :product="product">
          </BookingWidget>

        </div>
      </div> 
    </section>

    <BenefitsSection
      v-if="!minMDViewport" 
      :benefits="benefits"
      class="px-sm-3 my-sm-3">
    </BenefitsSection>

    <section id="product-detail">

      <ProductCarousel
        v-if="!minMDViewport" 
        :slides="product.imgs"
        :carouselId="carouselId">
      </ProductCarousel>

      <div 
        v-if="minMDViewport && product != null"
        class="container mt-4" id="collage-container">

        <div class="row">

          <div class="col-6 col-lg-6">
            <img class="w-100" :src="product.imgs[0].src"> 
          </div>

          <div class="col-6 col-lg-6 d-flex align-items-center">

            <div class="row h-100">

              <div class="col-6 mb-2">
                <img class="w-100 h-100" :src="product.imgs[1].src"> 
              </div>
              <div class="col-6 mb-2">
                <img class="w-100 h-100" :src="product.imgs[2].src"> 
              </div>
              <div class="col-6">
                <img class="w-100 h-100" :src="product.imgs[3].src"> 
              </div>
              <div class="col-6">
                <img class="w-100 h-100" :src="product.imgs[4].src"> 
              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="container product-specifications py-4">

        <div class="row">

          <div class="col-12 col-md-6 col-lg-7">

            <h1 class="product-title pb-1 mb-3 text-center">
              {{product.name}},
              <span> {{product.destination}}.</span>
            </h1>

            <div class="container product-prices separator-ln-bottom">
              <div class="row">
                <div class="col">
                  <p class="text-right font-weight-bold d-sm-inline-block">Adultos: <span class="discount font-weight-normal">{{'$'+product.prices.regularAdult}}</span></p>
                  <p class="text-right font-weight-bold d-sm-inline-block ml-sm-3">{{'$'+ product.prices.discountAdult}}</p>
                </div>

                <div class="col">
                  <p class="text-right text-right font-weight-bold d-sm-inline-block">Niños: <span class="discount text-right font-weight-normal">{{'$' + product.prices.regularKid}}</span></p>
                  <p class="text-right text-right font-weight-bold d-sm-inline-block ml-sm-3">{{'$' + product.prices.discountKid}}</p>
                </div>
              </div>
            </div>

            <p class="text-justify description">{{product.description}}</p>

            <div role="tablist accordion">

              <b-card no-body class="mb-1 accordion_card">

                <b-card-header header-tag="header" class="p-1 card_header" role="tab">
                  <b-button block href="#" v-b-toggle.spec-includes variant="info">Información Adicional 
                    <i class="fas fa-angle-down"></i>
                  </b-button>
                </b-card-header>

                <b-collapse id="spec-includes" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text 
                    v-for="(inc, index) in product.detail.includes"
                    :key="index">
                    {{inc}}
                    </b-card-text>
                  </b-card-body>
                </b-collapse>

              </b-card>

              <b-card no-body class="mb-1 accordion_card">

                <b-card-header header-tag="header" class="p-1 card_header" role="tab">
                  <b-button block href="#" v-b-toggle.spec-not-includes variant="info">Descripción 
                    <i class="fas fa-angle-down"></i>
                  </b-button>
                </b-card-header>

                <b-collapse id="spec-not-includes" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                  <b-card-text 
                  v-for="(inc, index) in product.detail.notIncluded"
                  :key="index">
                  {{inc}}
                  </b-card-text>
                  </b-card-body>
                </b-collapse>

              </b-card>

              <b-card no-body class="mb-1 accordion_card">

                <b-card-header header-tag="header" class="p-1 card_header" role="tab">
                  <b-button block href="#" v-b-toggle.additional-inf variant="info">Incluye
                    <i class="fas fa-angle-down"></i>
                  </b-button>
                </b-card-header>

                <b-collapse id="additional-inf" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      {{product.detail.additionalInf}}
                    </b-card-text>
                  </b-card-body>
                </b-collapse>

              </b-card>

              <b-card no-body class="mb-1 accordion_card">

                <b-card-header header-tag="header" class="p-1 card_header" role="tab">
                  <b-button block href="#" v-b-toggle.spec-tips variant="info">No incluye
                    <i class="fas fa-angle-down"></i>
                  </b-button>
                </b-card-header>

                <b-collapse id="spec-tips" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text 
                    v-for="(inc, index) in product.detail.tips"
                    :key="index">
                    {{inc}}
                    </b-card-text>
                  </b-card-body>
                </b-collapse>

              </b-card>

              <b-card no-body class="mb-1 accordion_card">

                <b-card-header header-tag="header" class="p-1 card_header" role="tab">
                  <b-button block href="#" v-b-toggle.spec-schedule variant="info">Recomendaciones
                    <i class="fas fa-angle-down"></i>
                  </b-button>
                </b-card-header>

                <b-collapse id="spec-schedule" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      {{product.detail.schedule}}
                    </b-card-text>
                  </b-card-body>
                </b-collapse>

              </b-card>

            </div> <!-- accordion -->

          </div> <!-- col -->

          <div class="col-md-6 col-lg-5" v-if="minMDViewport">

            <BookingWidget
              :widgetConfig="widgetConfig"
              :currency="currency"
              :product="product">
            </BookingWidget>

            <BenefitsSection
              v-if="minMDViewport" 
              :benefits="benefits">
            </BenefitsSection>

          </div>

        </div> <!-- row -->

      </div> <!-- container -->

    </section>

    <InstitutionLogosBanner></InstitutionLogosBanner>

      <MainFooter :contactInfo="contactInfo" 
        :links="links"
        :viewportSize="viewportSize"
        :minMDViewport="minMDViewport">
      </MainFooter>
  </div>
  `,
  data() {
    return {
      contactInfo: contactInfo,
      links: links,
      logos: logos,
      lang: languages,
      moneyEx: moneyEx,
      currency: 'MXN',
      currentLang: 'ESP',
      productList: products,
      widgetConfig: {
        id: 'detailWidget', //searchWidget
        cs: 'main-widget my-0', //'main-widget my-4 my-md-0'
        multiService: false,
        defaultService: 'hotel', //in case of multiService
        stage: 'detail',//search, detail
      },
      benefits: benefits,
      carouselId: 'product-carousel',
      windowW: window.innerWidth,
      productId: 'exp-003',
      product: null
    }
  },
  components: { 
              MainHeader,
              BookingWidget,
              BookWithUsSection,
              ProductCarousel,
              InstitutionLogosBanner,
              MainFooter,
              BenefitsSection
            },
  created() {
    this.getProduct();
  },
  mounted() {
    //this.getProduct();
    //Cambiartamaño
    window.addEventListener('resize', this.handleResize)
    this.handleResize();

    this.$root.$on('selectorChanged', (selected) => {
      this.handleSelectorChange(selected);
    });
  },
  methods: {
    handleSelectorChange(selectedElem){
      if(selectedElem.type == "money")
        return this.handleMoneySelectorChange(selectedElem.val);
      if(selectedElem.type == "lang")
      return this.handleLanguageSelectorChange(selectedElem.val);
    },
    handleMoneySelectorChange(val){
      this.currency = val.abrev;
      console.log(this.currency);
      //TODO: change money exchange values
    },
    handleLanguageSelectorChange(val){
      this.currentLang = val.abrev;
      console.log(this.currentLang);
      //TODO: change language values
    },
    //Cambiartamaño
    handleResize() {
      this.windowW = window.innerWidth;
    },
    //funtion that get id of te experience from a click on experiences image
    getProduct(){
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      this.productId = params.get("id");
      this.product = this.productList.find(prod => prod.id == this.productId);
    }
  },
  computed: {
    minMDViewport(){
      if(this.viewportSize == 'MD'
        || this.viewportSize == 'LG'
        || this.viewportSize == 'XL')
        return true;
      return false;
    },
    viewportSize(){
      if(this.windowW < 576)
        return 'XS';
      if(this.windowW >= 576 && this.windowW < 768)
        return 'SM';
      if(this.windowW >= 768 && this.windowW < 992)
        return 'MD';
      if(this.windowW >= 992 && this.windowW < 1200)
        return 'LG';
      if(this.windowW > 1200)
        return 'XL';
    }
  },
}
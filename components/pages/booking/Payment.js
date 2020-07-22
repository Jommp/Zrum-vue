const Payment = {
  template: `
  <div class="content">

    <MainHeader 
      :contactInfo="contactInfo"
      :links="links"
      :currentPageId="'product-payment'"
      :logos="logos"
      :lang="lang"
      :moneyEx="moneyEx">
    </MainHeader>

    <section 
      id="main-section"
      >

      <div class="title-main">
        <div class="container py-1 py-sm-4">
          <div class="row align-items-center justify-content-center">
            <span class="ml-5">Inicio / Paquetes / Reserva / <b>Pago</b></span>
            <h2 class="text-uppercase">Ya casi lo tienes</h2>
          </div>
        </div>
      </div>

      <div class="container-fluid container-lg widget-container mt-4">
        <div class="row">

          <div class="col-12">

            <BookingSummary
              :booking="reservation"
              :currency="currency"
              :viewportSize="viewportSize"
              :minMDViewport="minMDViewport">
            </BookingSummary>

          </div>

        </div>
      </div> 

      <div v-if="viewportSize == 'XS' || viewportSize == 'SM' || viewportSize == 'MD' "
        class="container form-area py-4">
        <h2 class="text-center subtitle mb-3 mb-sm-4">Completa para continuar con tu pago</h2>
        <PaymentForm 
          :viewportSize="viewportSize"
          :minMDViewport="minMDViewport">
        </PaymentForm>
        <h2 class="text-center mt-4 form-quote">¡Asegura tu reservación!</h2>
      </div>

    </section>

    <div>
      <BookWithUsSection 
        v-if="viewportSize == 'XS' || viewportSize == 'SM' || viewportSize == 'MD' "
        :benefits="benefits"
        :showTitle="false"
        :sectionCs="'my-0 my-sm-2'"
        :rowCs="'no-gutters'"
        :colCs="'col-6 mb-0'">
      </BookWithUsSection>
    </div>
    
    <section 
      id="main-section"
      v-if="viewportSize == 'LG' || 
      viewportSize == 'XL'"
      class="pt-4">

      <div class="container">

        <div class="row">

          <div class="col-6 py-4">

            <h2 class="text-center subtitle mb-3 mb-sm-4">Completa para continuar con tu pago</h2>
            <PaymentForm 
              :viewportSize="viewportSize"
              :minMDViewport="minMDViewport">
            </PaymentForm>
            
          </div>

          <div class="col-6 py-2">
            <h2 class="text-center mt-4 form-quote">¡Asegura tu reservación!</h2>
            <BookWithUsSection 
              :benefits="benefits"
              :showTitle="false"
              :sectionCs="'my-0 my-sm-2'"
              :rowCs="'no-gutters'"
              :colCs="'col-8 mb-0'">
            </BookWithUsSection>
          </div>

        </div>

      </div>

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
      benefits: benefits,
      windowW: window.innerWidth,
      reservation: {
        productId: 'exp-004',
        productName: 'Tour Islas Marietas',
        productDestination: 'Puerto Vallarta',
        productImg: './img/product/prod-1.png',
        adults: 2,
        kids: 1,
        date: '28 Octubre 2020',
        time: '9:00 AM',
        totalToPay: 1654.00
      },
    }
  },
  components: { 
              MainHeader,
              BookingSummary,
              PaymentForm, 
              BookWithUsSection,
              InstitutionLogosBanner,
              MainFooter
            },
  created() {
  },
  mounted() {
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
    handleResize() {
      this.windowW = window.innerWidth;
    },
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
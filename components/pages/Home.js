const HomePage = {
  template: `
    <div class="content">
      
      <MainHeader 
        :contactInfo="contactInfo"
        :links="links"
        :currentPageId="'product-detail'"
        :logos="logos"
        :lang="lang"
        :moneyEx="moneyEx">
      </MainHeader>
      <div class="banner-image py-3">
      </div>

      <ExclusivePacks v-if="!minMDViewport"></ExclusivePacks>
      
      <div v-if="minMDViewport" class="container">
        <div class="row justify-content-around">

          <div class="col-7 col-lg-8">
            <ExclusivePacks></ExclusivePacks>
          </div>
          
          <div class="col-5 col-lg-4">
            <MainAside></MainAside> 

            <BenefitsSection
              :benefits="benefits"
              class="mt-4">
            </BenefitsSection>
          </div>

        </div>
      </div>

      <InstitutionLogosBanner></InstitutionLogosBanner>


      <MainAside 
        v-if="!minMDViewport">
      </MainAside>

      <BenefitsSection
        v-if="!minMDViewport" 
        :benefits="benefits"
        class="px-sm-4">
      </BenefitsSection>

      <section class="new-experiences"
        v-if="exps.length > 0"
        id="experience-options">
        <div class="container px-0 text-center">
          <h1 class="text-uppercase text-center">Nuevas Experiencias</h1>
          <div class="row w-100 mx-auto">
            <div class="new-exp-container mx-md-auto">
              <div 
                v-for="(prod, index) in exps"
                :key="prod.id"
                :class="prod.id"
                class="new-exp-box">
                <a :href="getProductLink(prod.id)">
                  <ProductItem
                    :product="prod"
                    :currency="currency"
                    :section="'exps'">
                  </ProductItem>
                </a>
              </div>
            </div>
          </div>
      
          <button class="btn-new-exp"
            :href="getExpsLink">
            VER MAS
          </button>
        </div>
      </section>

      <MainNewsletter></MainNewsletter>

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
      productList: products,
      packs: [],
      exps: [],
      currency: 'MXN',
      currentLang: 'ESP',
      userComments: userComments,
      benefits: benefits,
      windowW: window.innerWidth
    }
  },
  mounted() {
    this.$root.$on('selectorChanged', (selected) => {
      this.handleSelectorChange(selected);
    })
    this.packs = this.getPacks;
    this.exps = this.getExps;
  },
  components: { 
                ProductItem,
                MainHeader,
                InstitutionLogosBanner,
                MainFooter,
                ExclusivePacks,
                MainAside,
                MainNewsletter,
                BenefitsSection
              },
  methods: {
    setProductColClass: function(section, productPosition) {
      switch (section) {
        case 'packs':
          return this.setPackColClass(productPosition);
          break;
        case 'exps':
          return this.setExpColClass(productPosition);
          break;
        default:
          break;
      }
    },
    setPackColClass(position){
      if(position == 0)
        return 'col-12 col-lg-6 mt-0 mt-lg-0';
      if(position == 1){
        return 'col-12 col-lg-6 mt-4 mt-lg-0';
      }else{
        return 'col-12 col-lg-4 mt-4';
      }
    },
    setExpColClass(position){
      if(position == 0)
        return 'col-12 col-md-6  mt-0 mt-md-0';
      if(position == 1){
        return 'col-12 col-md-6 col-lg-4 mt-4 mt-md-0 mt-lg-4';
      }else{
        return 'col-12 col-md-6 col-lg-4 mt-4';
      }
    },
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
    //This method get the id of the product then send the id for post
    getProductLink(productId){
      const link = this.links.find(link => link.id == 'productDetail');
      return link.url + `?id=${productId}`;
    },
    handleResize() {
      this.windowW = window.innerWidth;
    }
  },
  computed: {
    getPacks(){
      return this.productList.filter(prod => prod.type == 'pkg');
    },
    getExps(){
      return this.productList.filter(prod => prod.type == 'exp');
    },
    getPacksLink(){
      const item = this.links.find(link => link.id == 'pkg');
      return item.url;
    },
    getExpsLink(){
      const item = this.links.find(link => link.id == 'exp');
      return item.url;
    },
    minMDViewport(){
      if(this.viewportSize == 'MD' || this.viewportSize == 'LG' || this.viewportSize == 'XL')
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
    },
  
  },
}
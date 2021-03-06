const ContactPage = {
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

      <section class="title-main">
        <div class="container py-1 py-sm-4">
          <div class="row align-items-center justify-content-center">
            <span class="ml-5">Inicio / Contáctanos</span>
            <h2 class="">CONTÁCTANOS</h2>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="row">
          
          <div class="col-4 m-0">
            <MainAside v-showon.lg.xl>
            </MainAside>
          </div>
          
          <div class="col-12 col-lg-8">

            <ContactForm>
            </ContactForm>
            
          </div>
        </div>
      </div>

      
      
      <div class="container">
        <div class="row">

          <MainAside v-showon.xs.sm.md>
          </MainAside>

          <section class="information mt-4 mt-sm-5 ml-sm-auto mr-sm-3 mx-lg-auto px-3">
            <div class="container h-100">
              <div class="row align-items-center justify-content-lg-between h-100">
  
                <div class="info-box mb-2 mt-sm-2 my-lg-auto">

                  <h3 class="py-1 py-lg-3">CONTACTO</h3>
                  <p class="pt-2 pt-sm-3 pt-lg-2 px-lg-4">
                    tucorreoaqui@gmail.com<br />Phone : +52 1 998 156 86 96
                  </p>

                </div>
  
                <div class="info-box mb-2 my-lg-auto">

                  <h3 class="py-1 py-lg-3">DIRECCIÓN</h3>
                  <p class="pt-2 px-sm-3">
                    Av. Tankah Smz 24 Mz 1 Lt 74-75 Local 1<br />C.P. 77500, Cancún Quintana Roo.
                  </p>
                  
                </div>
  
                <div class="info-box mb-2 my-lg-auto">

                  <h3 class="py-1 py-lg-3">HORARIO DE ATENCIÓN</h3>
                  <p class="pt-1 pt-sm-3 pt-lg-1">
                    Lunes a Sábado:<br />06:00 A.M. – 06:00 P.M.<br />Hora Ciudad de México.
                  </p>

                </div>
  
              </div>
            </div>
          </section>

        </div>  
      </div>
      

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
         productList: products,
         packs: [],
         exps: [],
         currency: 'MXN',
         currentLang: 'ESP',
         userComments: userComments,
         benefits: benefits,
         //change size
         windowW: window.innerWidth
      }
   },
   mounted() {
      //change size
      window.addEventListener('resize', this.handleResize)
      this.handleResize();

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
      ContactForm
   },
   methods: {
      //change size
      handleResize() {
         this.windowW = window.innerWidth;
      },
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
      }
  },
  computed: {
      //change size
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
      //change sizeonmd
      minMDViewport(){
         if(this.viewportSize == 'MD' || this.viewportSize == 'LG' || this.viewportSize == 'XL')
            return true;
         return false;
      },
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
      }
   },
}
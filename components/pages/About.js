const AboutPage = {
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

        <div class="container py-2 py-sm-4">
          <div class="row align-items-center justify-content-center px-2">
            <span class="ml-5">Inicio / <strong>Nosotros</strong></span>
            <h2 class="text-center">TE CONTAMOS QUIENES SOMOS</h2>
          </div>
        </div>

      </section>

      <div class="container">

        <section class="history mx-sm-auto"
          <div class="container mt-4">
            <div class="row justify-content-center pb-3 justify-content-md-start">
              <h2 class="ml-md-5">NUESTRA HISTORIA</h2>
            </div>
            <div class="row flex-md-row-reverse">

              <div class="history-img d-flex position-relative w-100">
                <img class="small-img position-absolute img-fluid" src="./img/imgZrum/small-image.png" alt="">
                <img class="big-img img-fluid ml-auto" src="./img/imgZrum/big-image.png" alt="">
              </div>
              <p class="text-center px-3 mt-lg-3 history-text">Lorem ipsum dolor sit amet consectetur adipiscing elit quam dapibus, est ut class facilisi
                vehicula facilisis porttitor suscipit, pharetra interdum accumsan nunc sagittis faucibus elementum magnis. Inceptos laoreet
                tristique iaculis sem elementum porttitor luctus netus dapibus eleifend nam porta, dignissim sodales nibh
                nuncrhoncus neque viverra cursus pellentesque magnis praesent, urna eget nascetur nisi donec hendrerit imperdiet
                nullam phasellus fames natoque. Consequat dis mollis etiam potenti gravida nisi sem integer auctor, sagittis
                arcu est luctus eu id ad conubia sapien, ut ligula ridiculus natoque tincidunt interdum praesent cum. Hac
                natoque ante convallis semper malesuada pretium magnis non fusce blandit, praesent sodales taciti porttitor
                rhoncus curae varius suspendisse.
              </p>
            </div>
          </div>
        </section>

        <section class="members mt-3 ">
          <div class="container">
            <div class="row justify-content-around">

              <div class="member-box d-flex">
                <img src="./img/imgZrum/she.png" alt="">
                <div class="member-info ml-sm-2 ml-md-0">
                  <h2 class="text-center text-sm-left text-md-center mt-3 mb-sm-3">
                    <strong>Basic Craft Supplies</strong>
                  </h2>
                  <p class="text-center text-sm-left text-md-center mt-sm-2">Lorem ipsum dolor sit amet consectetur
                    adipiscing
                    elit quam dapibus, est ut class
                    facilisi vehicula facilisis
                    porttitor suscipit.
                  </p>
                </div>
              </div>

              <div class="member-box d-flex mt-lg-5">
                <img src="./img/imgZrum/he.png" alt="">
                <div class="member-info ml-sm-2 ml-md-0 mt-md-3">
                  <h2 class="text-center text-sm-left text-md-center mt-3 mb-sm-3"><strong>Kid Craft</strong></h2>
                  <p class="text-center text-sm-left text-md-center mt-sm-2">Lorem ipsum dolor sit amet consectetur
                    adipiscing
                    elit quam dapibus.
                  </p>
                </div>
              </div>

              <div class="member-box d-flex mt-sm-3 mt-md-0">
                <img src="./img/imgZrum/she.png" alt="">
                <div class="member-info ml-sm-2 ml-md-0 ">
                  <h2 class="text-center text-sm-left text-md-center mt-3 mb-sm-3">
                    <strong>Basic Craft Supplies</strong>
                  </h2>
                  <p class="text-center text-sm-left text-md-center mt-sm-2">Lorem ipsum dolor sit amet consectetur
                    adipiscing
                    elit quam dapibus, est ut class
                    facilisi vehicula facilisis
                    porttitor suscipit.
                  </p>
                </div>
              </div>

              <div class="member-box d-flex mt-sm-3 mt-md-0 mt-lg-5">
                <img src="./img/imgZrum/he.png" alt="">
                <div class="member-info ml-sm-2 ml-md-0 mt-md-3">
                  <h2 class="text-center text-sm-left text-md-center mt-3 mb-sm-3"><strong>Kid Craft</strong></h2>
                  <p class="text-center text-sm-left text-md-center mt-sm-2">Lorem ipsum dolor sit amet consectetur
                    adipiscing
                    elit quam dapibus.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
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
                MainNewsletter
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
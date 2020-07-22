const BenefitsSection = {
  template: `
    <div class="container-fluid px-0 ">

      <div class="benefits mx-md-auto px-lg-3 px-xl-0">

        <div class="benefit-box benefit-left">
          <a href="#">{{benefits[0].title}}</a>
        </div>
        <div class="benefit-box benefit-right">
          <a href="#">{{benefits[1].title}}</a>
        </div>
        <div class="benefit-box benefit-left">
          <a href="#">{{benefits[2].title}}</a>
        </div>
        <div class="benefit-box benefit-right">
          <a href="#">{{benefits[3].title}}</a>
        </div>

      </div>
    </div>
  `,
  props: {
    benefits: {
      type: Array,
      required: true,
    }
  },
}
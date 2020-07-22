const BookWithUsSection = {
  template: `
  <section :class="sectionCs" id="book-with-us">

    <div :class="containerCs" class="px-sm-3">

      <h2 v-if="showTitle"
        class="text-uppercase text-center mt-3 mb-3 mb-md-5 green-dark-color">
        RESERVA CON NOSOTROS
      </h2>

      <div class="row flex-column align-items-center flex-md-row" :class="rowCs">

        <div 
          v-for="(benefit, index) in benefits"
          :class="colCs" 
          class="mx-md-auto">
          <ColorBox
            :color="getBoxColor(index)"
            :iconSrc="benefit.iconSrc"
            :title="benefit.title"
            :detail="benefit.description">
          </ColorBox>
        </div>

      </div>
      
    </div>
  </section>
  `,
  props: {
    benefits: {
      type: Array,
      required: true,
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: true
    },
    sectionCs: {
      type: String,
      required: false,
      default: 'py-4',
    },
    containerCs: {
      type: String,
      required: false,
      default: 'container',
    },
    rowCs: {
      type: String,
      required: false,
    },
    colCs: {
      type: String,
      required: false,
      default: 'col-6 col-md-3 mb-2 mb-md-0',
    }
  },
  components: { ColorBox },
  methods: {
    getBoxColor: function(i){
      switch (i) {
        case 0:
          return 'green'
        case 1:
          return 'green'
        case 2:
          return 'green'
        case 3:
          return 'green'
      }
    },
  },
}
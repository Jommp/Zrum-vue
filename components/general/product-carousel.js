const ProductCarousel = {
  template: `
  <b-carousel
    id="carouselId"
    v-model="slide"
    :interval="timeInterval"
    controls
    :indicators="showIndicators"
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      v-for="sld in slides"
      :caption="sld.caption"
      :text="sld.text"
      :img-src="sld.src"
      :img-alt="sld.alt"
    ></b-carousel-slide>

  </b-carousel>
  `,
  props: {
    carouselId: {
      type: String,
      required: false,
      default: 'carousel'
    },
    slides: {
      type: Array,
      required: true
    },
    showIndicators: {
      type: Boolean,
      required: false,
      default: false
    },
    timeInterval: {
      type: Number,
      required: false,
      default: 5000,
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
}
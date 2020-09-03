const ColorBox = {
  template: `

  <div 
    :class="color"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    class="box py-4 d-flex align-items-center align-items-sm-start align-items-md-center 
    justify-content-around h-100">

    <template v-if="!isHover || isLgViewport">

      <div class="text text-center mx-auto">
        <p class="title mb-0 mb-lg-1 mx-auto">{{title}}</p>
        
      </div>

    </template>

    <div class="text d-flex d-lg-none" v-if="!isLgViewport && isHover">

      <p class="detail" v-if="detail">
        {{detail}}
      </p>

    </div>

  </div>
  `,
  props: {
    color: {
      type: String,
      default: 'green'
    },
    iconSrc: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isHover: false,
      windowW: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowW = window.innerWidth;
    }
  },
  computed: {
    isLgViewport(){
      if ( this.windowW >= 992)
        return true;
      return false;
    }
  },
}
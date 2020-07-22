const BookingSummary = {
  template: `
  <div id="booking-summary" class="w-100">

    <b-card no-body class="overflow-hidden booking-summary-card">

      <b-card-body class="p-0">

        <b-row no-gutters>

          <b-col :sm="colSM" :lg="7"  class="summary-img">
            <b-card-img :src="booking.productImg" class="rounded-0"></b-card-img>
          </b-col>

          <b-col :sm="colSM" :lg="5" class="summary-content mt-4 mt-sm-0 p-0 p-sm-3 pb-md-0 ">
            
            <h1 class="pb-lg-4 text-sm-left">{{booking.productName}}, 
              <span>{{booking.productDestination}}</span>
            </h1>

            <div class="group d-flex mt-2 mt-lg-4 pl-lg-2">
              <p class="item">Adultos:</p>
              <p class="val">{{booking.adults}}</p>
            </div>

            <div class="group d-flex pl-lg-2">
              <p class="item">Niños:</p>
              <p class="val">{{booking.kids}}</p>
            </div>

            <div class="group d-flex pl-lg-2">
              <p class="item">Fecha:</p>
              <p class="val">{{booking.date}}</p>
            </div>

            <div class="group d-flex mb-md-3 pl-lg-2">
              <p class="item">Horario:</p>
              <p class="val">{{booking.time}} </p>
            </div>

            <div v-if="viewportSize == 'XS' || viewportSize == 'SM' "
              class="group total d-flex mt-sm-3 mb-lg-4">
              <p class="item">TOTAL:</p>
              <p class="val font-weight-bold">{{booking.totalToPay | formatPrice}}
                <span class="">{{currency}}</span>
              </p>
            </div>

            <div v-if="minMDViewport" class="group total-md d-flex pt-lg-3 pl-lg-2" id="">
              <p class="item item-total">TOTAL:</p>
              <p class="val font-weight-bold">{{booking.totalToPay | formatPrice}}
                <span class="">{{currency}}</span>
              </p>
            </div>

          </b-col>

        </b-row>

      </b-card-body>

    </b-card>

  </div>
  `,
  props: {
    booking: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    colSM: {
      type: Number,
      default: 6
    },
    colMD: {
      type: Number,
      default: 12
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
  filters: {
    formatPrice(value) {
      if (!value) return '';
      let price = Math.ceil(value); //redondea sin decimales hacia arriba
      price = price.toString();
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //agrega comas
    }
  },
  data() {
    return {
      
    }
  },
}
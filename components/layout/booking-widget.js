const BookingWidget = {
  template: `
  <div :class="widgetConfig.cs" :id="widgetConfig.id">
    
    <div 
      v-if="widgetConfig.multiService"
      class="tabs"
      id="service-tabs">
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item" style="border-radius: 9px 0 0 9px;" >
          <a class="nav-link active" style="border-radius: 9px 0 0 9px;" href="#">Hotel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hotel+Vuelo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Transporte</a>
        </li>
        <li class="nav-item" style="border-radius: 0 9px 9px 0;">
          <a class="nav-link" href="#" style="border-radius: 0 9px 9px 0;">Vuelo</a>
        </li>
      </ul>
    </div>

    <div 
      v-if="widgetConfig.stage == 'search'" 
      class="search-form mt-5" 
      id="hotel-search">

      <form id="hotel-form">
        <h1> ¿Buscas Hospedaje? </h1>

        <div class="input-group">
          <input type="search" class="form-control input-el" id="search" placeholder="Nombre del hotel, ciudad, area">
          <div class="input-group-append">
            <div class="input-group-text input-icon">
              <i class="fas fa-search" id="btnSearch"></i>
            </div>
          </div>
        </div>

        <div class="form-row mt-4">

          <div class="form-group col-6 dt-picker">
            <label for="arrive-dt">Llegada</label>
            <b-form-datepicker 
              id="arrive-datepicker" 
              v-model="dtStart"  
              class="mb-2"
              locale="es-MX"
              :min="minDt">
            </b-form-datepicker>
          </div>

          <div class="form-group col-6 dt-picker">
            <label for="arrive-dt">Salida</label>
            <b-form-datepicker 
              id="leave-datepicker" 
              v-model="dtEnd" 
              class="mb-2"
              locale="es-MX"
              :min="minDt">
            </b-form-datepicker>
            <!--<div class="input-group">
              <input type="text" class="form-control input-el" id="leave-dt" placeholder="21/03/20">
              <div class="input-group-append">
                <div class="input-group-text input-icon">
                  <i class="fas fa-calendar-alt" id="btnDtLeave"></i>
                </div>
              </div>
            </div> -->
          </div>

        </div>

        <div class="form-row mt-4">

          <div class="form-group col-4">
            <label for="arrive-dt">Habitaciones</label>
              <select type="text" class="form-control" id="rooms">
                <option id="1">1</option>
                <option id="2">2</option>
                <option id="3">3</option>
                <option id="4">4</option>
              </select>
          </div>

          <div class="form-group col-4">
            <label for="adults">Adultos</label>
            <select type="text" class="form-control" id="adults">
                <option id="1">1</option>
                <option id="2" selected>2</option>
                <option id="3">3</option>
                <option id="4">4</option>
            </select>
          </div>

          <div class="form-group col-4">
            <label for="adults">Niños</label>
            <select type="text" class="form-control" id="kids">
              <option id="0" selected>0</option>
              <option id="1">1</option>
              <option id="2">2</option>
              <option id="3">3</option>
              <option id="4">4</option>
            </select>
          </div>

        </div>

        <div class="form-row mt-4">
          <button class="btn submit-btn col-12 text-uppercase">Buscar</button>
        </div>

      </form>
    </div>

    <div 
      v-if="widgetConfig.stage == 'detail'" 
      class="search-form" 
      id="booking-detail">

      <form id="detail-form" @submit="submitForm">

        <div class="form-row mt-2">
          <b-alert show variant="warning" v-if="showWarningAlert"
            class="w-100 yellow">
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </b-alert>
        </div>

        <div class="form-group mb-4">
          <label for="arrive-dt">Tour:</label>
          <div class="input-group">
            <input type="search" class="form-control input-el" id="search" :value="product.name" disabled>
          </div>
        </div>

        <div class="form-row mt-2">

          <div class="form-group col-6 dt-picker">
            <label for="product-dt">Elige una fecha:</label>
            <b-form-datepicker 
              id="product-dt" 
              placeholder=""
              v-model="dtStart"  
              class="mb-2"
              locale="es-MX"
              :min="minDt"
              :dateFormatOptions="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              required>
            </b-form-datepicker>
          </div>

          <div class="form-group col-6 tm-picker">
            <label for="arrive-tm">Elige un horario:</label>
            <b-form-timepicker 
              id="product-tm" 
              placeholder="" 
              v-model="tmStart" 
              locale="es"
              required>
            </b-form-timepicker>
          </div>

        </div>

        <div class="form-row mt-3">

          <div class="form-group col-6">
            <label for="adults" class="">Adultos
            </label>
            <b-form-select 
              id="adults" 
              v-model="adults" 
              :options="quantityOpts">
            </b-form-select>
          </div>

          <div class="form-group col-6">
            <label for="kids" class="">Niños
            </label>
            <b-form-select 
              id="kids" 
              v-model="kids" 
              :options="quantityOpts">
            </b-form-select>
          </div>

        </div>

        <div class="form-row mt-3" id="total-row">

          <div class="form-group col-12">
            <b-button 
              v-b-toggle.total-area 
              variant="primary"
              class="btn-collapse yellow-light-btn">
              Total
              <i class="fas fa-caret-down"></i>
            </b-button>
            <b-collapse 
              id="total-area"
              class="mt-2">
              <b-card>
                <div class="row">
                  <div class="col-6">
                    <p class="text-left">{{adults}} {{adultsWord}}: </p>
                  </div>
                  <div class="col-6">
                    <p class="text-right price font-weight-bold"> 
                      {{totalAdults | formatPrice}} 
                      <span class="currency"> {{currency}} </span>
                    </p>
                  </div>
                </div>
                <div class="row" v-if="kids > 0">
                  <div class="col-6">
                    <p class="text-left"> {{kids}} {{kidsWord}}: </p>
                  </div>
                  <div class="col-6">
                    <p class="text-right price font-weight-bold">
                      {{totalKids | formatPrice}}
                      <span class="currency"> {{currency}} </span>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p class="text-right font-weight-bold price total-price">
                      {{totalToPay | formatPrice}}
                      <span class="currency"> {{currency}} </span>
                    </p>
                  </div>
                </div>
              </b-card>
            </b-collapse>
          </div>
          
        </div>

        <div class="form-row mt-3">

          <!-- <a href="./payment.html" class="btn submit-btn col-12 text-uppercase">Reservar</a>-->
          <button class="btn submit-btn col-12 " id="book-btn"> 
            Reservar
          </button>

        </div>

        <p class="text-center mt-2 notes">
          <small> No se hará ningún cargo por ahora </small>
        </p>
        
      </form>
    </div>

  </div>
  `,
  filters: {
    formatPrice(value) {
      if (!value) return '';
      let price = Math.ceil(value); //redondea sin decimales hacia arriba
      price = price.toString();
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //agrega comas
    }
  },
  props: {
    widgetConfig: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    product: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      dtStart: '',
      tmStart: '',
      dtEnd: '',
      quantityOpts: [
        { value: 0, text: '0' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: '7' },
        { value: 8, text: '8' },
        { value: 9, text: '9',  disabled: true },
        { value: 10, text: '10',  disabled: true },
      ],
      adults: 1,
      kids: 0,
      showWarningAlert: false,
      errors: [],
    }
  },
  computed: {
    today(){
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    },
    minDt(){
      const minDt = new Date(this.today);
      minDt.setDate(minDt.getDay() + 2);
      return minDt;
    },
    totalAdults(){
      return this.product.prices.discountAdult * this.adults;
    },
    totalKids(){
      return this.product.prices.discountKid * this.kids;
    },
    totalToPay(){
      return this.totalAdults + this.totalKids;
    },
    adultsWord(){
      if(this.adults > 1) return 'Adultos';
      return 'Adulto';
    },
    kidsWord(){
      if(this.kids > 1) return 'Niños';
      return 'Niño';
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      let isValidForm = this.validateForm();
      if(isValidForm){
        //save booking
        console.log('sucessful');
        this.showWarningAlert = false;
        window.location.href= './payment.html';
      }else{
        this.showWarningAlert = true;
      }
    },
    validateForm(){
      this.errors = [];
      let isValid = true;
      if (!this.dtStart) {
        this.errors.push('Por favor elige fecha');
        isValid = false;
      }
      if (!this.tmStart) {
        this.errors.push('Por favor elige horario');
        isValid = false;
      } 
      return isValid;
    },
  },
  
}
/*
  widgetConfig= {
    multiService: false,
    
  }
*/
const PaymentForm = {
  template: `
  <form class="large-form p-3" id="reservation-form" @submit="submitForm">

    <div class="form-row">

      <b-alert show variant="success" v-if="showSuccessAlert"
        class="w-100">
        {{successMsg}}
      </b-alert>

      <b-alert show variant="warning" v-if="showWarningAlert"
        class="w-100">
        {{errorMsg}}
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </b-alert>

    </div>

    <div class="form-row">

      <div class="form-group col-12 col-md-6 col-lg-12">
        <label for="name">Nombre (s) *</label> 
        <input type="text" id="name" placeholder="" v-model="name" class="form-control" required>
      </div> 

      <div class="form-group col-12 col-md-6 col-lg-12">
        <label for="lastname">Apellido (s) *</label> 
        <input type="text" id="lastname" placeholder="" v-model="lastname" class="form-control" required>
      </div>

    </div>

    <div class="form-row">
      
      <div class="form-group col-12 col-lg-12">
        <label for="email">Correo electrónico *</label>
        <input type="email" id="email" placeholder="" v-model="email" class="form-control" required>
      </div>

        <div v-if="!minMDViewport" class="form-group col-12 col-lg-12">
          <label for="phone" class="d-block">Número de celular *</label>
          <input type="tel" id="lada" placeholder="" v-model="lada" class="form-control w-25 d-inline-block" required>
          <input type="tel" id="phone" placeholder="" v-model="phone" class="form-control d-inline-block" required>
        </div>

    </div>
    
    <div class="form-row">

      <div class="form-group col-6">
        <label for="country">Pais *</label>
        <b-form-select 
          id="country" 
          v-model="country" 
          :options="countryOpts">
        </b-form-select>
      </div>
      
      <div class="form-group col-6">
        <label for="city">Ciudad *</label>
        <b-form-select 
          id="city" 
          v-model="city" 
          :options="citiesByCountry">
        </b-form-select>
      </div>

    </div>

    <div class="form-row">

      <div v-if="minMDViewport" class="form-group col-6">
        <label for="phone" class="d-block">Número de celular *</label>
        <input type="tel" id="lada" placeholder="" v-model="lada" class="form-control w-25 d-inline-block" required>
        <input type="tel" id="phone" placeholder="" v-model="phone" class="form-control d-inline-block" required>
      </div>

      <div class="form-group col-12 col-sm-8 col-md-6 mt-2 mt-lg-0 ">

        <label for="country">Elige un método de pago *</label>

        <div class="d-flex justify-content-around payment-method-container ">

          <div class="form-check form-check-inline form-radio-custom mr-0">
            <label class="form-check-label" for="visa-rad">
              <input class="form-check-input radio-box" type="radio" name="payment-method-opts" id="visa-rad" value="visa" checked="toggleChecked">
              <span class="checkmark"></span>
              <img class="payment-method img-fluid" src="./img/payment-methods/visa.png">
            </label>
          </div>

          <div class="form-check form-check-inline form-radio-custom mr-0">
            <label class="form-check-label" for="mc-rad">
              <input class="form-check-input radio-box" type="radio" name="payment-method-opts" id="mc-rad" value="mastercard">
              <span class="checkmark"></span>
              <img class="payment-method img-fluid" src="./img/payment-methods/mastercard.png">
            </label>
          </div>

          <div class="form-check form-check-inline form-radio-custom mr-0">
            <label class="form-check-label" for="amex-rad">
              <input class="form-check-input radio-box" type="radio" name="payment-method-opts" id="amex-rad" value="amex">
              <span class="checkmark"></span>
              <img class="payment-method img-fluid" src="./img/payment-methods/american-express.png">
            </label>
          </div>

        </div>

      </div>

      <div v-if="viewportSize == 'SM'" class="col-sm-4 mt-2 d-flex align-items-center">
        <button class="yellow-light-btn mx-auto text-uppercase mt-2" id="submit-btn"> 
          Pagar 
        </button>
      </div>

    </div>

    <div 
      v-if="viewportSize == 'XS' || viewportSize == 'MD' || viewportSize == 'LG' || viewportSize == 'XL' "
      class="form-row mt-2">
      <button class="yellow-light-btn mx-auto text-uppercase" id="submit-btn"> 
        Pagar 
      </button>
    </div>

  </form>
  `,
  props: {
    minMDViewport:{
      type: Boolean,
      required: true
    },
    viewportSize:{
      type: String,
      required: true
    } 
  },
  data() {
    return {
      name: null,
      lastname: null,
      email:null,
      lada: null,
      phone: null,
      country: 'MEX',
      city: null,
      errors: [],
      countryOpts: countries,
      cities: cities,
      showSuccessAlert: false,
      showWarningAlert: false,
      successMsg: 'Gracias por realizar tu compra! En breve te llegara un correo con los detalles de la compra.',
      errorMsg: ''
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      let isValidForm = this.validateForm();
      if(isValidForm){
        //process payment
        //if payment is success show successMsg
          this.showSuccessAlert = true;
          this.showWarningAlert = false;
        //if payment throws error:
        // this.errorMsg = "Ooops! Algo salio mal, por favor intenta nuevamente."
      }else{
        //show error list
        this.errorMsg = 'Por favor verifica los siguientes errores:';
        this.showWarningAlert = true;
        this.showSuccessAlert = false;
      }
    },
    validateForm(){
      this.errors = [];
      let isValid = true;
      if (!this.name) {
        this.errors.push('El campo "Nombre" es requerido.');
        isValid = false;
      }
      if (!this.lastname) {
        this.errors.push('El campo "Apellido" es requerido.');
        isValid = false;
      }
      if (!this.email) {
        this.errors.push('El campo "Email" es requerido.');
        isValid = false;
      } else if (!this.validEmail(this.email)) {
        this.errors.push('El campo "Email" tiene formato incorrecto.');
        isValid = false;
      }
      if (!this.phone) {
        this.errors.push('El campo "Telefono" es requerido.');
        isValid = false;
      }
      return isValid;
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed: {
    citiesByCountry(){
      return this.cities.filter(ct => ct.country == this.country);
    }
  },
}
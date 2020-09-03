const ContactForm = {
    template: `
    <section class="contact-form d-flex mt-5 mt-sm-4 mx-auto">
        <div class="container">
            <div class="row justify-content-center">
              <p class="mr-lg-auto ml-xl-4">Envíanos tus comentarios</p>
            </div>
            <div class="row justify-content-center">
              <form action="" class="d-flex mr-lg-auto ml-xl-4" id="reservation-form" @submit="submitForm">

                <div class="form-row">
                  <b-alert show variant="success" v-if="showSuccessAlert" class="w-100">
                    {{successMsg}}
                  </b-alert>
                  <b-alert show variant="danger" v-if="showWarningAlert" class="w-100">
                    {{errorMsg}}
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </b-alert>
                </div>

                <input type="text" id="name" placeholder="Nombre (s) *" v-model="name" class="pl-3" >
                <input type="text" id="lastname" placeholder="Apellidos *" v-model="lastname" class="pl-3" >
                <input type="text" id="subject" placeholder="Asunto *" v-model="subject" class="pl-3" >
                <textarea id="message" placeholder="Tu mensaje *" v-model="message" class="pl-3 pt-2" cols="30" rows="5"></textarea>
                <button class="mt-4 text-uppercase" id="submit-btn"> 
                  Enviar mensaje 
                </button>
              </form>
            </div>
        </div>
    </section>

    <!-- 
    -->
    `,
    data() {
      return {
        name: null,
        lastname: null,
        subject: null,
        message: null,
        errors: [],
        showSuccessAlert: false,
        showWarningAlert: false,
        successMsg: 'Muchas gracias por tus comentarios!',
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
          this.errors.push('El campo "Nombre(s)" es requerido.');
          isValid = false;
        }
        if (!this.lastname) {
          this.errors.push('El campo "Apellidos" es requerido.');
          isValid = false;
        }
        if (!this.subject) {
          this.errors.push('El campo "Asunto" es requerido.');
          isValid = false;
        }
        if (!this.message) {
          this.errors.push('El campo "Mensaje" es requerido.');
          isValid = false;
        }
        return isValid;
      }
    }
  }
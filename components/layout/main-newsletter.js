const MainNewsletter = {
  template: `
  <section class="news-recom-container">

        <div class="container">
          <div class="row">

            <div class="newsletter col col-md-6 text-center text-md-left pt-3 pl-lg-6">
              <h2 class="mx-auto mb-md-2">INSCRIBETE Y RECIBE LAS MEJORES OFERTAS</h2>
              <form action="">
                <input type="email" placeholder="Escribe tu email" class="mr-1 mr-sm-3 ">
                <button type="submit" class="p-0">¡RECIBIRLAS!</button>
              </form>
              <p class="mx-auto">Recibirás emails promocionales de nuestro sitio web.
                Más información consulta los <a href="#">Avisos de privacidad.</a>
              </p>
            </div>

            <div class="recommendations col-md-6 pt-3 pl-lg-4">
              <h2 class=" mb-md-3">RECOMENDACIONES</h2>
              <div class="recom-box">
                <div class="recom-img">
                </div>
                <div class="recom-cart">
                  <p class="recom-name"><strong>Nely Lugo</strong></p>
                  <p class="recom-testimony"> Reitero mis felicitaciones de parte de toda mi familia estamos
                    agradecidos con ustedes por su excelente servicio y por su amabilidad en todo...</p>
                </div>
                <img src="./img/imgZrum/arrow.png" alt="arrow">
              </div>
            </div>
          </div>
        </div>
      </section>
  `,
  props: {
   
  },
}
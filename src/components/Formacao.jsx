import ListaCertificados from "./ListaCertificados"
import ListaIdiomas from "./ListaIdiomas"
import ListaFormacao from "./ListaFormacao"

function Formacao() {

  return (
    <section class="formacao" id="formacao" aria-label="Formação">
      <div class="container2 formacao-container">
        <h2 class="subtitulo">Formação</h2>
        <div>
          <p class="formacao-texto">Tenho meus <strong>certificados</strong> de cursos que eu já participei, e mesmo assim ainda <strong>pratico</strong> por fora desafios que eu acho na internet para aprender realmente, acredito que é na <strong>prática que se aprende!</strong></p>
          <ListaCertificados/>
          <div class="formacao-extra">
            <ListaFormacao/>
            <ListaIdiomas/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formacao
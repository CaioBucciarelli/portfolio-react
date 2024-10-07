import { useParams } from "react-router-dom"
import experiencias from '../data/experiencia.json'

function ExperienciaDetalhe() {

  const { id } = useParams()

  const experiencia = experiencias.find( (experiencia) => experiencia.id == id)

  return (
    <section key={experiencia.id}>
      <h1 className="titulo-experiencia-detalhada">{experiencia.titulo}</h1>
      <div className="container-pages-detalhada">
        <h2>{experiencia.funcao}</h2>
        <p>{experiencia.descricao}</p>
        <ul>
          {experiencia.habilidades.map((selecionado, index) => (
            <li key={index}>{selecionado.nome}</li>
          ))}
        </ul>
        <a href={experiencia.link} target="_blank">Acessar Site</a>
      </div>
    </section>
  )
}

export default ExperienciaDetalhe
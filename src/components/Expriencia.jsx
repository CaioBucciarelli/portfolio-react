import experiencias from '../data/experiencia.json'
import ExperienciaCard from '../components/ExperienciaCard'

function Experiencia() {

  const experienciasFiltradas = experiencias.filter( experiencia => experiencia.titulo.toLowerCase())

  return (
    <section className="container2 experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">Experiência</h2>
      <div>
        <p className="experiencia-texto">Desenvolvo projetos utilizando <strong>React</strong> como framework pela <strong>facilidade</strong>, <strong>rapidez</strong> e <strong>flexibilidade</strong> de se usar. Para todos os sites que desenvolvi, trabalhei com todo o <strong>UX</strong> e <strong>UI Design</strong>, com técnicas específicas.</p>
        <ul className="lista-empresa">
          {
            experienciasFiltradas.length > 0 ?
              experienciasFiltradas.map(experiencia => (<ExperienciaCard key={experiencia.id} {...experiencia}/>))
            :
            <p>Experiencia não Encontrada</p>
          }
        </ul>
      </div>
    </section>
  )
}

export default Experiencia
import experiencias from '../data/experiencia.json'
import ExperienciaCard from '../components/ExperienciaCard'

function Experiencia() {

  const experienciasFiltradas = experiencias.filter( experiencia => experiencia.titulo.toLowerCase())

  return (
    <section>
      <h1 className='subtitulo-page'>Experiência</h1>
      {/* <input type="text" name="search" id="serach" value={search} onChange={handleSearch} className="input-experiencia"/>
      <button>Pesquisar</button> */}
      <ul className="container-pages">
        {
          experienciasFiltradas.map(experiencia => (<ExperienciaCard key={experiencia.id} {...experiencia}/>))
        }
      </ul>
    </section>
  )
}

export default Experiencia
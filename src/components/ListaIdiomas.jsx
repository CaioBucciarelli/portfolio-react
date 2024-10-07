import ItemIdioma from './ItemIdioma'

function ListaIdiomas() {

  const idiomas = [
    {
      nome: "Inglês",
      nivel: "Intermediário"
    },
    {
      nome: "Italiano",
      nivel: "Intermediário"
    },
  ]

  return (
    <div className="idiomas">
      <h3>Idiomas</h3>
      <ul>
        {idiomas.map(idioma => <ItemIdioma
          key={idioma.nome}
          nome={idioma.nome}
          nivel={idioma.nivel}
        />)}
      </ul>
    </div>
  )
}

export default ListaIdiomas
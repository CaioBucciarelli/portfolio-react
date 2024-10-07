import ItemFormacao from './ItemFormacao'

function ListaFormacao() {

  const formacoes = [
    {
      nome: "Fiap School",
      curso: "Ensino Médio Técnico",
      tempo: "3 Anos"
    },
    {
      nome: "FIAP",
      curso: "Engenharia de Software",
      tempo: "Em andamento"
    },
  ]

  return (
    <div className="formacao-academica">
      <h3>Formação Acadêmica</h3>
      <ul>
        {formacoes.map(formacao => <ItemFormacao
          key={formacao.nome}
          nome={formacao.nome}
          curso={formacao.curso}
          tempo={formacao.tempo}
        />)}
      </ul>
    </div>
  )
}

export default ListaFormacao
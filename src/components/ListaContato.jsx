import ItemContato from './ItemContato'

function ListaContato() {

  const contatos = [
    {
      forma: "Telefone",
      meio: "+55 11 97203-5892"
    },
    {
      forma: "E-mail",
      meio: "caio.bucciarelli@gmail.com"
    },
  ]

  return (
    <ul className="contato-lista">
      {contatos.map(contato => <ItemContato
        key={contato.forma}
        forma={contato.forma}
        meio={contato.meio}
      />)}
    </ul>
  )
}

export default ListaContato
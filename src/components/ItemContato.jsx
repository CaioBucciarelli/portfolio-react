function ItemContato({ forma, meio }) {
  return (
    <li className="contato-informacao">
      <h3>{forma}</h3>
      <p>{meio}</p>
    </li>
  )
}

export default ItemContato
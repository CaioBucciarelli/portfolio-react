function ItemFormacao({ nome, curso, tempo }) {
  return (
    <li>{nome} - {curso} <span>/ {tempo}</span></li>
  )
}

export default ItemFormacao
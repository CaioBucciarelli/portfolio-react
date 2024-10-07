function ItemCertificado({ nivel, nome, tempo, organizacao, link }) {
  return (
    <li class="curso">
      <span class="curso-tipo">{nivel}</span>
      <h3 class="curso-nome">{nome}</h3>
      <span class="curso-tempo">{tempo}</span>
      <div class="certificado">
        <span class="curso-instituicao">{organizacao}</span>
        <a href={link} target="_blank">ver certificado</a>
      </div>
    </li>
  )
}

export default ItemCertificado
import { Link } from 'react-router-dom';

function ExperienciaCard({ id, titulo, funcao, descricao, habilidades,}) {
  return (
    <li className="item-lista-empresa">
      <div className="empresa">
        <h3 className="empresa-titulo">{titulo}</h3>
        <span className="empresa-titulo">{funcao}</span>
        <p className="empresa-texto">{descricao}</p>
        <ul className="empresa-habilidades">
          {habilidades.map((selecionado, index) => (
              <li key={index}>{selecionado.nome}</li>
          ))}
        </ul>
      </div>
      <Link className="link-empresa" href={`experiencia/${id}`}>Saiba Mais</Link>
    </li>
  )
}

export default ExperienciaCard

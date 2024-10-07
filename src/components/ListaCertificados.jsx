import ItemCertificado from './ItemCertificado.jsx'

function ListaCertificados() {

  const certificados = [
    {
      nivel: "Curso Intensivo",
      nome: "WooCommerce Como CMS",
      tempo: "20h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/6fd52185",
    },
    {
      nivel: "Curso Intensivo",
      nome: "WordPress Como CMS",
      tempo: "18h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/4dc18545",
    },
    {
      nivel: "Curso Intensivo",
      nome: "UI Design Avançado",
      tempo: "30h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/e1ae3714",
    },
    {
      nivel: "Curso Intensivo",
      nome: "HTML e CSS Iniciante",
      tempo: "46h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/ec68a91f",
    },
    {
      nivel: "Curso Intensivo",
      nome: "UI Design Iniciante",
      tempo: "34h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/510aaa23",
    },
    {
      nivel: "Curso Básico",
      nome: "CSS Flexbox",
      tempo: "6h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/319543c0",
    },
    {
      nivel: "Curso Básico",
      nome: "CSS Grid Layout",
      tempo: "10h",
      organizacao: "ORIGAMID",
      link: "https://www.origamid.com/certificate/8954fd1b",
    },
    {
      nivel: "Curso Básico",
      nome: "Introdução HTML + CSS",
      tempo: "5h",
      organizacao: "DNC",
      link: "https://api.dinamicatreinamentos.com/public/acervo/132-37d6865fa08137a299d67b3095d98b4c.pdf",
    },
  ]

  return (
    <ul className='lista-certificados'>
      {certificados.map(certificado => <ItemCertificado
        key={certificado.nome}
        nivel={certificado.nivel}
        nome={certificado.nome}
        tempo={certificado.tempo}
        organizacao={certificado.organizacao}
        link={certificado.link}
      />)}
    </ul>
  )
}

export default ListaCertificados
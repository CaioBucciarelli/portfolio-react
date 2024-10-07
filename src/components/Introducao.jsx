import ImgCaio from '../assets/img-caio.png'

function Introducao() {
  return (
    <main className="container introducao">
      <div>
        <h1>Desenvolvedor Front End & UX/UI Designer</h1>
        <p>Localizado em São Paulo, SP</p>
      </div>
      <img src={ImgCaio} alt="Foto do Caio"/>
    </main>
  )
}

export default Introducao
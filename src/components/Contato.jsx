import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import ListaContato from './ListaContato'

function Contato() {
  return (
    <section class="contato" id="contato" aria-label="Contato">
      <div class="container2 contato-container">
        <h2 class="subtitulo">Contato</h2>
        <div>
          <p class="contato-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa!</p>
          <ListaContato/>
          <div class="contato-links">
            <ul className='flex justify-center mt-1 gap-5 pt-5'>
              <li><a href="https://github.com/CaioBucciarelli" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaGithub/></a></li> 
              <li><a href="https://www.linkedin.com/in/caiobucciarelli/" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaLinkedin/></a></li>
              <li><a href="https://www.instagram.com/caio.bucciarelli/" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaInstagram/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
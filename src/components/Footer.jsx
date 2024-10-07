import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-titulo">
          <h2>Caio</h2>
          <h3>Desenvolvedor Front-End & UX/UI Design</h3>
          <ul className='flex gap-5 pt-5 mb-3'>
            <li><a href="https://github.com/CaioBucciarelli" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaGithub/></a></li> 
            <li><a href="https://www.linkedin.com/in/caiobucciarelli/" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaLinkedin/></a></li>
            <li><a href="https://www.instagram.com/caio.bucciarelli/" target="blank" className="text-[#fff] text-5xl hover:text-[#90c4eb] transition-all"><FaInstagram/></a></li>
          </ul>
          <p>© Todos direitos reservados.</p>
        </div>
        <nav>
          <ul class="footer-menu">
            <li><Link to="/experiencia">Experiência</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
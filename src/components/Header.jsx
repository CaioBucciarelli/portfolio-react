import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

function Header() {

  return (
    <header className="header">
      <Link to="/" className='header-logo'><img src={Logo} alt="Caio Bucciarelli" /></Link>
      <nav>
        <ul className='header-menu'>
          <li><NavLink to="/experiencia">Experiência</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
import { Link } from 'react-router-dom'

import '../Menu/menu.styles.css'

const Menu = () => {
    return(
        <ul className="navbar">
      <li className="button">
        <Link  title="Home"  className="link" to="/" >Home</Link>
        
      </li>
      <li className="button" >
        <Link title="Sobre" className="link" to="/sobre">Sobre</Link>
      </li>
      <li className="button" >
        <Link  title="Portfolio" className="link" to="/portfolio">Portfolio</Link>
      </li>
      <li className="button" >
        
        <Link title="Contato" className="link" to="/contato">Contato</Link>
      </li>
      
    </ul>
    
    )
}
export default Menu
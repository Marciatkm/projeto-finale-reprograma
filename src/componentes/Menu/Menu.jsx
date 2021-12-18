import { Link } from 'react-router-dom'
import '../Menu/menu.styles.css'

const Menu = () => {
    return(


      <>
      <ul className="navbar">
       <li className="buttone">
         <Link  title="Home"  className="link" to="/" >Home</Link>
        
      </li>
       <li className="buttone" >
        <Link title="Sobre" className="link" to="/sobre">Sobre</Link>
       </li>
       <li className="buttone" >
        <Link  title="Portfolio" className="link" to="/portfolio">Portfólio</Link>
       </li>
      <li className="buttone" >
        <Link title="Contato" className="link" to="/contato">Contato</Link>
       </li>
      
     </ul>
     </>
    )

    
}
export default Menu
import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.png'
import Logo from '../../assets/logo-branco.png'

import Quiz from '../../componentes/Quiz/Quiz'

import DiscricaoSobre from "../../DiscricaoSobre/DiscricaoSobre"
import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <img className="logoImagem" src={Logo} alt='logo'/>
    <Banner className="imagem" image={ImageSobre} > </Banner>
    <DiscricaoSobre/>
    <Quiz/>
    <Footer />
  </>
 )
}

export default Sobre 
import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.png'
import Logo from '../../assets/logo-branco.png'
import picTorguga from "../../assets/Tartaruga-planeta.png"
import Quiz from '../../componentes/Quiz/Quiz'
import tverde from "../../assets/t-verd.jpg"
import taustriana from "../../assets/t-australiana.jpg"
import tcouro from "../../assets/t-couro.jpg"
import tolivia from "../../assets/t-oliva.jpg"
import tcabecuda from "../../assets/t-cabecuda.jpg"
import tpente from "../../assets/t-pente.jpg"
import tflatback from "../../assets/t-flatback.jpg"

import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <img className="logoImagem" src={Logo} alt='logo'/>
    <Banner className="imagem" image={ImageSobre} > </Banner>
    <>
    <h1>Tipos de tartarugas</h1>
    <div className="caixao" >
      
      <div className="caixa-foto"><img className="tortu" src={tverde} alt='tartaruga verde'/>  </div>
      
      <div className="caixa-foto"><img className="tortu" src={taustriana} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tcouro} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tolivia} alt='logo'/></div>
      
      <div className="caixa-foto"><img className="tortu" src={tcabecuda } alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tpente} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tflatback} alt='logo'/></div>
      


    </div>
    </>
    <Quiz/>
    <Footer />
  </>
 )
}

export default Sobre 
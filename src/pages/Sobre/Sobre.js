import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.png'
import Logo from '../../assets/logo-branco.png'
import picTorguga from "../../assets/Tartaruga-planeta.png"
import Quiz from '../../componentes/Quiz/Quiz'



import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <img className="logoImagem" src={Logo} alt='logo'/>
    <Banner className="imagem" image={ImageSobre} > </Banner>
    <>
    <div className="container" >
      <div class="child"><img className="tortuga" src={picTorguga} alt='logo'/>  </div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      <div className="child"><img className="tortuga" src={picTorguga} alt='logo'/></div>
      


    </div>
    </>
    <Quiz/>
    <Footer />
  </>
 )
}

export default Sobre 
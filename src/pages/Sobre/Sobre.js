import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.png'

import Quiz from '../../componentes/Quiz/Quiz'



import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <Banner className="imagem" image={ImageSobre} > </Banner>
    <Quiz/>
    <Footer />
  </>
 )
}

export default Sobre 
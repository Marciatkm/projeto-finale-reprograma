import Menu from '../../componentes/Menu/Menu'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.svg'
import Quiz from '../../componentes/Quiz/Quiz'
import Conteudo from '../../componentes/Conteudo/Conteudo'


import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageSobre}>Sobre mim</Header>
    <Conteudo/>
    <Quiz/>
    
    
    <Footer />
  </>
 )
}

export default Sobre 
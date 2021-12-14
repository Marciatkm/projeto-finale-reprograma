import Menu from '../../componentes/Menu/Menu'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.svg'
import Quiz from '../../componentes/Quiz/Quiz'



import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageSobre}>Sobre mim</Header>
    <div className='main'>
      <img src="https://j.gifs.com/Y7lgwY.gif" alt="foto" />
      <div>
        <h2>Márcia Tadakuma</h2>
        <p>Desenvolvedora Jr</p>
        <Quiz/>
       
      </div>
      
    </div>
    
    <Quiz/>
    <Footer />
  </>
 )
}

export default Sobre 
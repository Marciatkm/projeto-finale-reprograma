import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageBanner from "../../assets/home.png"
import Conteudo from '../../componentes/Conteudo/Conteudo'
import "../Home/home.styles.css"

const Home = () => {
    return(
        <>
            <Menu/>
            <Banner className="imagem" image={ImageBanner} > </Banner>
            
            <Conteudo/>
            <Footer/>
        </>
        
    )
}
export default Home
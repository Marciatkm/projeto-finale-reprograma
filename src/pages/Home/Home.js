import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageBanner from "../../assets/tartaruga.jpg"
import "../Home/home.styles.css"

const Home = () => {
    return(
        <>
            <Menu/>
            <Banner className="imagem" image={ImageBanner} > </Banner>
            
            <Footer/>
        </>
        
    )
}
export default Home
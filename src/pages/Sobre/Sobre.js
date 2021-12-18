import Menu from '../../componentes/Menu/Menu'
import Banner from '../../componentes/Banner/Banner'
import Footer from '../../componentes/Footer/Footer'
import ImageSobre from '../../assets/sobre.png'
import Logo from '../../assets/logo-branco.png'
import { GiTurtle}  from 'react-icons/gi'
import tPoluicao from "../../assets/t-poluicao.jpg"
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
    <h1>Poluição na Imensidão Azul </h1>
    <div className='container-youtube'>
    
    <a className='youtube' href='https://www.youtube.com/watch?v=P8dQGL7jYg4' target="_blank"  title="video salve as tartarugas"  > 
    
    <img   className="video-poluicao" src={tPoluicao} alt='foto do video de poluição'/>
    
    
    </a>
    
    <p className='paragrafo-poluicao'> <b>  Estudos  mostra que o odor do plástico sujo pode ser semelhante ao cheiro de comida para os animais.Imagine só: sacolas, canudos, garrafas e outros materiais são lançados ao   mar. Para esses plásticos se decomporem, são necessários cerca de 400 anos. Enquanto isso, eles ficam ali vagando e sendo “embrulhados” por algas, plantas e micróbios.
     As tartarugas estão acostumadas a nadar longas distâncias guiada pelo cheiro de camarões e peixes.Então,vão em busca de um belo almoço e acabam afundando no lixão da imensidão azul.Vale lembrar que elas não são as únicas prejudicadas pelo plástico.Aves e outros animais marinhos também são vítimas da poluição.Só no ano de 2016, cerca de mil tartarugas morreram ao ingerir plástico no oceano da região – são três por dia! o homem está causando um estrago praticamente irreversível ao meio ambiente,Mas o ideal mesmo seria o ser humano tomar vergonha na cara e parar de jogar lixo no meio ambiente, né?</b>
     </p>
    </div>
    
    <h1 className='p-quiz'><GiTurtle/>Vamos ver se você conhece as nossas amigas tartarugas<GiTurtle/></h1>
    
    <Quiz/>
   
    
    <Footer />
  </>
 )
}

export default Sobre 
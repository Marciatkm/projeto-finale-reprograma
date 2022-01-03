            
import { TiSocialLinkedinCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import { DiGithubBadge } from 'react-icons/di'
import { SiMinutemailer } from 'react-icons/si'
import Menu from '../../componentes/Menu/Menu'
import Header from '../../componentes/Header/Header'
import ImageContato from '../../assets/contato.svg'
import Footer from '../../componentes/Footer/Footer'

import '../Contato/contato.styles.css'

const Contato = () => {
 return (
   <>
    <Menu />

    <Header image={ImageContato}>Chama no contatinho</Header> 

    <div className='main'>
    <img src="https://j.gifs.com/Y7lgwY.gif" alt="foto" />
      <div>
           <h2>Márcia Tadakuma</h2>
           <p><b>Graduada em engenharia civil</b></p>
           <p><b>Desenvolvedora Jr na <span>Reprograma</span>  </b></p>
           <p><b>Amo filme de natal</b></p>
           <p><b>Amo tocar instrumentos</b></p>
           <p><b>Amo tartarugas e nataureza</b></p>
           <p className='site'> <b>Esse site foi desenvolvido como projeto final do curso bootcamp Reprograma que traz uma mensagem de preservação e amorao meio ambiente, e principalmentes a amada tartarugas marinhas."Em todas as coisas da natureza exixte algo de maravilhoso. 'Aristóteles', Amados jogue lixo no lixo,vamos cuidar e amar nosso Planetas </b></p>
           
      </div>
    </div>
    <div className="redes-sociais">
      <p className="siga">Siga-me nas redes sociais:</p>
      <p className='email'> <SiMinutemailer size={21} color="rgb(56, 56, 56)"/>  marciatadakuma@gmail.com</p> 
      <div>
      <a href="https://github.com/marciatkm" target="_blank" rel="noreferrer">
           <DiGithubBadge size={92} color="rgb(56, 56, 56)"/>
         </a>
         <a href="https://linkedin.com/in/marcia-tadakuma" target="_blank" rel="noreferrer">
           <TiSocialLinkedinCircular size={89} color="rgb(56, 56, 56)"/>
         </a>
         <a href="https://www.instagram.com/marcinhatkm/"  target="_blank" rel="noreferrer"> 
          <TiSocialInstagramCircular size={88} color="rgb(56, 56, 56)"/>
          </a>
      </div>
    </div>

    
      
     
    <Footer/>
    
    
  </>
  
 )
}

export default Contato 

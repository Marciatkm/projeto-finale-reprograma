            
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

    <div className="redes-sociais">
    <br /><br />
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
    <Footer />
  </>
 )
}

export default Contato 

import {useState, useEffect} from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Menu from '../../componentes/Menu/Menu'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import ImagePortfolio from '../../assets/portfolio.svg'
import '../Portfolio/portfolio.styles.css'

const Portfolio = () => {
  const [repositories, setRepositories] = useState([])
  
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://api.github.com/users/marciatkm/repos')
      const data = await response.json()

      setRepositories(data)
    }
    getData()
  
  },[])

  return(
    <>
      <Menu />
      <Header image={ImagePortfolio}>Meus projetos</Header>
      <div className="main">
          <div className="card-container" >
            {repositories.map(repo=>
              <div className="card">
                <h3 key={repo.id}>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                  <BsArrowReturnRight size={16} color="#fff"/>
                </a>
              </div>
            )}
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio 
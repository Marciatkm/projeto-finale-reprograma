import tverde from "../assets/t-verd.jpg"
import taustriana from "../assets/t-australiana.jpg"
import tcouro from "../assets/t-couro.jpg"
import tolivia from "../assets/t-oliva.jpg"
import tcabecuda from "../assets/t-cabecuda.jpg"
import tpente from "../assets/t-pente.jpg"
import tflatback from "../assets/t-flatback.jpg"
import "../DiscricaoSobre/discricao.styles.css"


const DiscricaoSobre = () =>{
    return(
        <>
      <h1>Tipos de tartarugas</h1>
      <div className="caixao" >
      
      <div className="caixa-foto"><img className="tortu" src={tverde} alt='tartaruga verde'/>  </div>
      
      <div className="caixa-foto"><img className="tortu" src={taustriana} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tcouro} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tolivia} alt='logo'/></div>
      
      <div className="caixa-foto"><img className="tortu" src={tcabecuda } alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tpente} alt='logo'/></div>
      <div className="caixa-foto"><img className="tortu" src={tflatback} alt='logo'/></div>
      


    </div>
    </>

    
    )
}
export default DiscricaoSobre
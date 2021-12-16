import "../Conteudo/conteudo.styles.css"
import picTorguga from "../../assets/Tartaruga-planeta.png"
 import "../Conteudo/conteudo.styles.css"

const Conteudo = () => {
    return(
        <>
          <div class="container">
           
            <div class="child">

               <img className="tortuga" src={picTorguga} alt='logo'/>  
               
               <p className=" primeiro-paragrafro">São répteis existentes há mais de 180 milhões de anos e teriam evoluído a partir das tartarugas de água doce. A carapaça das tartarugas marinhas é mais achatada, o que as deixam mais leves e hidrodinâmicas. Possuem visão, olfato e audição desenvolvidos e as patas são eficientes nadadeiras debaixo d´agua. Outra importante adaptação foi o surgimento de glândulas de sal, localizadas próximo aos olhos. A maioria das espécies de tartarugas marinhas é migratória e se orientam pelo oceano com a ajuda do campo magnético terrestre.</p>
               
            </div>
                <div class="child">
                     
                    <p className=" segundo-paragrafro">São répteis existentes há mais de 180 milhões de anos e teriam evoluído a partir das tartarugas de água doce. A carapaça das tartarugas marinhas é mais achatada, o que as deixam mais leves e hidrodinâmicas. Possuem visão, olfato e audição desenvolvidos e as patas são eficientes nadadeiras debaixo d´agua. Outra importante adaptação foi o surgimento de glândulas de sal, localizadas próximo aos olhos. A maioria das espécies de tartarugas marinhas é migratória e se orientam pelo oceano com a ajuda do campo magnético terrestre.</p>
                    <img className="tortuga" src={picTorguga} alt='logo'/> 
               </div> 
            </div>  
        
         
        
            
    

           
          
           

               
        </>
        

    )
}
export default Conteudo
import "../Conteudo/conteudo.styles.css"
import Planeta from "../../assets/Tartaruga-planeta.png"
import Imagens from "../Imagens/Imagens"
 import "../Conteudo/conteudo.styles.css"

const Conteudo = () => {
    return(
        <>
        
           <h1 className="titulo">Tartarugas Marinhas</h1>
          
           

               <div  className=" container">
                        
               <Imagens className="imagem" image={Planeta} ></Imagens>

               <p className=" primeiro-paragrafro">São répteis existentes há mais de 180 milhões de anos e teriam evoluído a partir das tartarugas de água doce. A carapaça das tartarugas marinhas é mais achatada, o que as deixam mais leves e hidrodinâmicas. Possuem visão, olfato e audição desenvolvidos e as patas são eficientes nadadeiras debaixo d´agua. Outra importante adaptação foi o surgimento de glândulas de sal, localizadas próximo aos olhos. A maioria das espécies de tartarugas marinhas é migratória e se orientam pelo oceano com a ajuda do campo magnético terrestre.</p>

                    

                </div>
             
        </>
        

    )
}
export default Conteudo
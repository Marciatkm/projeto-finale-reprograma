import "../Conteudo/conteudo.styles.css"
import picTorguga from "../../assets/Tartaruga-planeta.png"
import ImageTurtle from "../../assets/home-turtle.jpg"

const Conteudo = () => {
    return(
        <>
        <h1>ConsciênciAMAR em busca da sobrevivência</h1>
        <div class="container">
           
           <div class="child">

              <img className="tortuga" src={ImageTurtle} title="Tartaruga-verde" alt='logo'/>  
              
              <p className=" primeiro-paragrafro">Tartarugas marinhas são répteis existentes há mais de 180 milhões de anos e teriam evoluído a partir das tartarugas de água doce. Você sabia que há somente sete espécies de tartarugas marinhas no mundo? 
              É isso mesmo! Dessas sete, cinco ocorrem no litoral brasileiro: a tartaruga-cabeçuda, a tartaruga-de-pente, a tartaruga-verde, a tartaruga-oliva e a tartaruga-de-couro..</p>


              
           </div>
               <div class="child">
               <img className="tortuga" src={picTorguga} alt='foto de tartaruga marinha'/>   
               <p className=" segundo-paragrafro">A poluição é uma das principais ameaças, pois degradam o ambiente marinho como um todo.. <br></br>Faça parte da conservação e ajude a salvar essas tartaruguinhas, na praia só deixe amor e pegadas! ❤ </p>
                    
                   
                  
                    
              </div> 
           </div>  
       
        
       
          
        </>
        

    )
}
export default Conteudo
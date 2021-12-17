import "../Conteudo/conteudo.styles.css"
import picTorguga from "../../assets/Tartaruga-planeta.png"
import ImageTurtle from "../../assets/home-turtle.jpg"

const Conteudo = () => {
    return(
        <>
          <div class="container">
           
            <div class="child">

               <img className="tortuga" src={ImageTurtle} title="Tartaruga-verde" alt='logo'/>  
               
               <p className=" primeiro-paragrafro">São répteis existentes há mais de 180 milhões de anos e teriam evoluído a partir das tartarugas de água doce. Você sabia que há somente sete espécies de tartarugas marinhas no mundo? 
               É isso mesmo! Dessas sete, cinco ocorrem no litoral brasileiro: a tartaruga-cabeçuda, a tartaruga-de-pente, a tartaruga-verde, a tartaruga-oliva e a tartaruga-de-couro..</p>


               
            </div>
                <div class="child">
                     
                    <p className=" segundo-paragrafro">A poluição é uma das principais ameaças, pois degradam o ambiente marinho como um todo..<p>  clique aqui <a  href="https://www.youtube.com/watch?v=P8dQGL7jYg4"></a></p> </p>
                     
                    <img className="tortuga" src={picTorguga} alt='foto de tartaruga marinha'/>  
                   
                     
               </div> 
            </div>  
        
         
        
            
    

           
          
           

               
        </>
        

    )
}
export default Conteudo
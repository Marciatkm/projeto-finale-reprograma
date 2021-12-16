import "../Imagens/imagens.styles.css"



const Header = (props) => {
    return (
       <div className="fotos">
         <h1>{props.children}</h1>
         <img className="img" src={props.image} alt='ilustração' />
       </div>
     )
   }
  
  export default Header
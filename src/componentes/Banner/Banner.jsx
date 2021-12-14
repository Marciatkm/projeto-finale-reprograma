

import '../Banner/banner.styles.css'

const Header = (props) => {
  return (
     <div className="banner">
       <h1>{props.children}</h1>
       <img className="img" src={props.image} alt='ilustração' />
     </div>
   )
 }

export default Header
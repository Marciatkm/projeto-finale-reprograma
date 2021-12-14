import { BsFillSuitHeartFill } from 'react-icons/bs'
import './footer.styles.css'

const Footer = () => {
  return(
    <div className="footer">
      <span> <BsFillSuitHeartFill size={16} color="rgb(196, 26, 26)"/><strong>  Site desenvolvido pela aluna Márcia Tadakuma Reprograma <BsFillSuitHeartFill size={16} color="rgb(196, 26, 26)"/> | © Copyright 2021 </strong> </span>
    </div>
  )
}

export default Footer
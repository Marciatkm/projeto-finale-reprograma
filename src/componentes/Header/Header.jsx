import './header.styles.css'

const Header = (props) => {
 return (
    <div className="header">
      <h1>{props.children}</h1>
      <img className='img-topo' src={props.image} alt='ilustracao de mulher' />
    </div>
  )
}

export default Header 
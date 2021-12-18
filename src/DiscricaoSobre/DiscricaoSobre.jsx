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
        {/* <div>ConciênciAMAR</div> */}
      <h1>Tipos de tartarugas</h1>
      <div className="caixao-tartarg" >
      
      <figure title="Tartaruga Verde" className="caixa-foto">
          <img className="img-tortu" src={tverde} alt='tartaruga Verde'/> 
          <figcaption className="nome-tartarugas">Tartaruga Verde:Ela é uma tartaruga de tamanho grande que habita as águas tropicais e subtropicais dos oceanos Atlântico e Pacífico. As principais áreas de desova no Brasil são as Ilhas oceânicas de Trindade, Reserva Biológica do Atol das Rocas e Parque Nacional Marinho de Fernando de Noronha. . </figcaption> 
      </figure>
      
      <figure  title="Tartaruga Austrariana" className="caixa-foto">
          <img className="img-tortu" src={taustriana} alt='Tartaruga Austrariana'/>
          <figcaption className="nome-tartarugas">Tartaruga Austrariana: . A tartaruga-marinha-australiana tem preferência pelas águas pouco profundas. A cor de seus cascos está na gama de cores verde-oliva ou verde-pardo.Esta tartaruga mede entre 90 e 135 cm e pesa de 100 a 150 quilos. Não possui hábitos migratórios, exceto para a desova que ocasionalmente a obriga a deslocar-se até 100 km.  </figcaption> </figure>
      <figure title="Tartaruga Couro" className="caixa-foto">
          <img className="img-tortu" src={tcouro} alt='Tartaruga Couro'/>
          <figcaption className="nome-tartarugas">Tartaruga Couro:  É a maior e mais pesada. Seu tamanho habitual é de 2,3 metros e pesa mais que 600 quilos, ainda que tenham se registrado exemplares gigantes com pesos que ultrapassavam os 900 quilos. A área conhecida com desovas regulares situa-se no litoral norte do Espírito Santo, próximo à foz do Rio Doce.</figcaption>
      </figure>
      <figure title="Tartaruga Olivia" className="caixa-foto">
          <img className="img-tortu" src={tolivia} alt='Tartaruga Olivia'/>
          <figcaption className="nome-tartarugas">Tartaruga  Olivia: É a menor entre os tipos de tartarugas marinhas. Medem em média 67 centímetros e seu peso oscila ao redor dos 40 quilos, ainda que tenham se registrado exemplares de até 100 quilos.</figcaption>
          </figure>
      <figure title="Tartaruga Cabeçuda" className="caixa-foto">
          <img className="img-tortu" src={tcabecuda } alt='Tartaruga Cabeçuda'/>
          <figcaption className="nome-tartarugas">Tartaruga Cabeçuda: Ela leva este nome de tartaruga-cabeçuda porque sua cabeça tem o maior tamanho entre as tartarugas marinhas.No Brasil, as áreas prioritárias de desova estão localizadas no litorais norte do Rio de Janeiro, Espírito Santo e Bahia, e ao longo do litoral de Sergipe.</figcaption>
      </figure>
      <figure title="Tartaruga Pente"className="caixa-foto">
          <img className="img-tortu" src={tpente} alt='Tartaruga Pente'/>
          <figcaption className="nome-tartarugas">Tartaruga  Pente: É um precioso animal entre os tipos de tartarugas marinhas . Existem duas subespécies. Uma delas habita as águas tropicais do Oceano Atlântico e a outra as águas quentes da zona Indo-Pacífica. Estas tartarugas têm hábitos migratórios.
          
</figcaption>
          </figure>
      <figure title="Tartaruga Flatback" className="caixa-foto">
          <img className="img-tortu" src={tflatback} alt='Tartaruga Flatback'/>
          <figcaption className="nome-tartarugas">Tartaruga Flatback:É  nativa da costa norte da Austrália e das águas próximas,a forma de sua concha, que tem um topo muito plano. A tartaruga flatback se reproduz apenas em certas áreas da Austrália,Novembro e dezembro são a estação de reprodução das tartarugas flatback   </figcaption>
      </figure>
    </div>
        <div className="card-poluicao">
            <div >
                <p className="paraf-polui"></p>
            </div>
        </div>

    </>

    
    )
}
export default DiscricaoSobre
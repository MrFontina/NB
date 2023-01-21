
import wasap from './whatsapp.svg'
import './whatsapp.css'

function Whatsapp() {
  return (
    <div className="wasap">
    <a href="https://wa.me/5491131522831?text=¡Estoy+interesado!" target="_blank" rel='noreferrer'>
        <img src={wasap} alt="" width="40px"/></a>
        
  </div>
  )
}

export default Whatsapp
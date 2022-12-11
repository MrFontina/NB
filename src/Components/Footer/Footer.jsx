import { useContext } from 'react'
import themeContext from '../../Storage/ThemeContext'
import './footer.css'
import git from './github.png'
import linkedin from './linkedin.png'

function Footer(){

    const { gradient51 } = useContext(themeContext)

    return(
        <footer className="foot">
            <nav className="navbar navbar-light" style={{background:gradient51}}>
                <div className='logos container-fluid '>
                    <div className=''>
                      <a href='https://github.com/MrFontina'><img src={git} alt='gitHub' style={{width:'40px'}}/>
                    </a>       
                    <a href='https://linkedin.com/in/nahuel-bracchitta'>
                      <img src={linkedin} alt='linkedin' style={{width:'40px'}}/>  
                    </a>  
                    </div>
                    <span className="navbar-brand mb-0 mx-auto h1">Copiright Nahuel Bracchitta</span>
                    
                </div>
                
            </nav>
        </footer>
    )
}

export default Footer
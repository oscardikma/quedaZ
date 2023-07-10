import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importe os ícones específicos que você deseja usar
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';




const BoxLogin = () => {
    return (
        <div class = 'form -control'>
            <div ><h1 style={{ marginBottom: '50px' }}>Queda Zero login</h1></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '10px' }}>
                <div style={{margin: 'auto' }}>
                    <FontAwesomeIcon icon={faUser} beat style={{ marginRight: '10px' }} />
                </div>
                <input type='text' placeholder='Username' />
                <div>
                    <FontAwesomeIcon icon={faLock} beat style={{ marginRight: '10px' }} />
                </div>
                <input type='password' placeholder='Password' />
            </div>

            <div> 
                <button style={{ borderRadius: '20px' }}>Login</button>
            </div>

            <div style={{marginTop:'30px'}}>
                <input type='checkbox'/>Remember-me
            </div>
        </div>
    )
}
/*
function logar(){
    document.getElementById('login').style.display='none'
    document.getElementById('form').style.display='block'
  
}*/
export default BoxLogin
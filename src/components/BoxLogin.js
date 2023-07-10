import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const BoxLogin = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

    const handleLogin = () => {
        if (user === 'admin' && pass === 'dikma') {
            document.getElementById('login').style.display = 'none'
            document.getElementById('form').style.display = 'block'
        }else{
            alert('Usuario ou senha incorreto, tente novamente!')
        }
    };

  return (
    <div className="form-control">
      <div>
        <h1 style={{ marginBottom: '50px' }}>Queda Zero login</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '10px' }}>
        <div style={{ margin: 'auto' }}>
          <FontAwesomeIcon icon={faUser} beat style={{ marginRight: '10px' }} />
        </div>
        <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} />
        <div>
          <FontAwesomeIcon icon={faLock} beat style={{ marginRight: '10px' }} />
        </div>
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>

      <div>
        <button style={{ borderRadius: '20px' }} onClick={handleLogin}>
          Login
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <input type="checkbox" /> Remember-me
      </div>
    </div>
  );
};

export default BoxLogin;

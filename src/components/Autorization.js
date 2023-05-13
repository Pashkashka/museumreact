import React from 'react';

import axios from 'axios';

function Autorization() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        axios.post('https://644b992817e2663b9df340a0.mockapi.io/Users', {
            email,
            password,
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            window.location.reload();
        }).catch((err) => {
            console.error(err);
            alert('Ошибка авторизации');
        });
    };

    React.useEffect(() => {
        document.querySelector('.overlay').style.display = 'block';
    }, []);

    return (
        <div className="overlay">
            <div className="Login">
                <h2>Autorization</h2>
                <div className="login">
                    <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="logBtn" onClick={handleLogin}>Log in</button>
            </div>
        </div>
    );
}
export default Autorization;
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Autorization() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://644b992817e2663b9df340a0.mockapi.io/Items', {
            email,
            password,
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            window.location.href='/';
        }).catch((err) => {
            console.error(err);
            alert('������ �����������');
        });
    };

    React.useEffect(() => {
        document.querySelector('.overlay').style.display = 'block';
    }, []);

    return (
        <div className="overlay">
            <div className="Login">
                <h2>Autorization</h2>
                <Link to="/registration" className="Link">
                <span>Want to registration?</span>
                </Link>

                <div className="login">
                    <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <a href="/" className="Link" onClick={handleLogin}>
                <button className="logBtn" >
               
                        Log in
                   
                    </button>
                </a>
            </div>
        </div>
    );
}
export default Autorization;
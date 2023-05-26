
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Autorization() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
       axios.get(`https://646cd32b7b42c06c3b2c1813.mockapi.io/Users?search=${login}`).then((res) => {
            localStorage.setItem('userId', res.data[0].id); // Добавляем id пользователя в LocalStorage
        localStorage.setItem('userLogin', login); // Добавляем логин пользователя в LocalStorage
        setUser(res.data[0]);
        window.location.href = '/';
    }).catch ((err) => {
        console.error(err);
        alert('Authorization error');
    });
       
};

React.useEffect(() => {
    document.querySelector('.overlay').style.display = 'block';
}, []);

return (
    <div className="overlay">
        <div className="Login">
            <h2>Authorization</h2>
            <Link to="/registration" className="Link">
                <span>Want to register?</span>
            </Link>

            <div className="login">
                <input placeholder="Login..." value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div className="login">
                <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="logBtn" onClick={handleLogin}>
                Log in
            </button>

        </div>
    </div>
);
}

export default Autorization;
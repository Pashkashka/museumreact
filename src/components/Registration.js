import React from 'react';

import axios from 'axios';

function Registration() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phoneNum, setPhoneNum] = React.useState('');
    const [name, setName] = React.useState('');
   



    const handleLogin1 = (e) => {
        e.preventDefault();
        axios.post('https://644b992817e2663b9df340a0.mockapi.io/Items', {
            email,
            password,
            name,
            phoneNum
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/';
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
                <h2>Registration</h2>
                <div className="login">
                    <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Phone Number..." value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <a href="/" className="Link" onClick={handleLogin1}>
                    <button className="logBtn"  >
                       
                            Sign up
                       
                </button>
            </a>
               
           
            </div>
        </div>
    );
}
export default Registration;
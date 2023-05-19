import React from 'react';

import axios from 'axios';

function Registration() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phoneNum, setPhoneNum] = React.useState('');
    const [name, setName] = React.useState('');
    const [login, setLogin] = React.useState('');

    const [countryCodeId, setCountryCodeId] =React.useState('+7');
    const options = ['+7', '1', '0'];

    const handleOptionChange = (event) => {
        setCountryCodeId(event.target.value);
    };


    const handleLogin1 = (e) => {
        e.preventDefault();
        axios.post('https://localhost:7045/Users', {
            email,
            password,
            name,
            login,
            phoneNum,
            countryCodeId
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/';
        }).catch((err) => {
            console.error(err);
            alert('Autorisation Error');
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
                    <input placeholder="Login..." value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login1" >
                    <select value={countryCodeId} onChange={handleOptionChange}>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                   
                </div>
                <div className="login">
                    <input placeholder="Phone Number..." value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="login">
                    <input placeholder="Login..." value={login} onChange={(e) => setLogin(e.target.value)} />
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
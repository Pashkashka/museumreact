import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function User({ onCloseUser, orders = [20], cartItems = [20], favoriteItems = [20], onClickOrders }) {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('userId');
    const userLogin = localStorage.getItem('userLogin');
    let navigate= useNavigate();

    useEffect(() => {
        if (userId) {
            axios.get(`https://646cd32b7b42c06c3b2c1813.mockapi.io/Users/${userId}`).then((res) => {
                setUser(res.data);
            }).catch((err) => {
                console.error(err);
                alert('Error getting user information');
            });
        }
    }, []);

    if (!user) {
        return <div>First log in...</div>;
        //window.location.href = '/login';
       // navigate("/login");
    }

    const Exit = async () => {
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://646d02667b42c06c3b2c69e3.mockapi.io/Cart/' + item.id);
        }
        for (let i = 0; i < favoriteItems.length; i++) {
            const item = favoriteItems[i];
            await axios.delete('https://646d02667b42c06c3b2c69e3.mockapi.io/Favorites/' + item.id);
        }
        for (let i = 0; i < orders.length; i++) {
            const item = orders[i];
            await axios.delete('https://646cd32b7b42c06c3b2c1813.mockapi.io/Orders/' + item.id);
        }
        localStorage.removeItem('userId'); 
        localStorage.removeItem('userLogin'); 
        window.location.href = '/login';
    };

    return (
        <div className="overlay">
            <div className="User">

                <button className="removeButton" onClick={onCloseUser}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
                </button>

                <div>
                    <h2>User</h2>

                    <span>Login:</span>
                    <b>{user.login}</b>

                    <span>Name:</span>
                    <b>{user.name}</b>

                    <span>Email:</span>
                    <b>{user.email}</b>

                    <span>Country and number:</span>
                    <b>{user.countryCodeId}{user.phoneNum}</b>
                    <b onClick={onClickOrders} className="clickOrders">My orders</b>
                </div>

                <button onClick={Exit} className="ExitButton">Log out</button>

            </div>
        </div>
    );
}

export default User;
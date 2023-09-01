import axios from 'axios';
import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/context';
import { toast } from 'react-toastify';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch } = useContext(GlobalContext);

    const loginUser = (e) => {
        e.preventDefault();

        const payload = { email, password };

        axios
            .post('http://localhost:1234/api/login', payload)
            .then((json) => {
                Cookies.set('token', json.data.token);
                dispatch({
                    type: 'USER_LOGIN',
                    token: json.data.token,
                });
                toast.success(json.data.message, {
                    position: 'top-center',
                    autoClose: 3000,
                });
            })
            .catch((err) =>
                toast.error(err.message, {
                    position: 'top-center',
                    autoClose: 3000,
                })
            );
    };

    return (
        <div className="flip-card__front" style={{ backgroundColor: '#CD7F32', color: 'white' }}>
            <div className="title" style={{ color: 'black' }}>
                Log in
            </div>
            <form className="flip-card__form" onSubmit={loginUser}>
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn animated-btn" style={{ backgroundColor: 'black', color: '#CD7F32' }}>
                    Let's go!
                </button>
            </form>
            <a href="#" style={{ color: 'black' }}>Forgot your password?</a>
        </div>
    )
}

import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Signupform() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }

        axios.post('http://localhost:1234/api/signup', payload)
            .then((json) =>  toast.success(json.data.message, {
                position: 'top-center',
                autoClose: 3000,               }))
            .catch(err =>toast.error(err.message, {
                position: 'top-center',
                autoClose: 3000,
              }))

    }

    return (
        <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form className="flip-card__form" onSubmit={SignupUser}>
                <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ backgroundColor: 'black', color: '#CD7F32' }}
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn animated-btn"style={{ backgroundColor: 'black' }}>Confirm!</button>
            </form>
        </div>
    )
}

import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';


export default function SignIn({ toggleForm, setToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login({ email, password });
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/dashboard')
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
                <h1>Se connecter</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Connexion</button>
                <div className="social-container">
                    <p>ou continuez avec</p>
                    <button className="google-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google logo" />
                    </button>
                </div>
                <p className="toggle-message">
                    Pas de compte ? <span onClick={toggleForm}>Créer plutôt un compte</span>
                </p>
            </form>
        </div>
    );
};
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

export default function SignUp({ toggleForm, setToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await register({ email, password, userName });
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleRegister}>
                <h1>Créer un compte</h1>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required

                />
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
                <button type='submit'>Inscription</button>
                <div className="social-container">
                    <p>ou continuez avec</p>
                    <button className="google-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google logo" />
                        Google
                    </button>
                </div>
                <p className="toggle-message">Déjà un compte ? <span onClick={toggleForm}>Se connecter</span></p>
            </form>
        </div>
    );
};
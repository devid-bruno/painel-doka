import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                'http://localhost:3000/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const navigate = useNavigate();
            const status = response.status;
            
            if(status === 200){
                navigate('http://localhost:3000/')
            }else{
                console.log(status)
            }
        } catch (error) {
            // Tratamento de erro, como exibir uma mensagem de erro para o usuário.
            setLoginError('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <form onSubmit={(e)=>handleLogin(e)}>
            <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit" onClick={(e) => handleLogin(e)}>
                Login
            </button>
            {loginError && <p>{loginError}</p>}
        </form>
    );
}

export default FormLogin;

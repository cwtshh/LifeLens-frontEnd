import React from 'react';
import './Auth.css';

// components
import { Link } from 'react-router-dom';


// hooks
import { useState, useEffect } from 'react';


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    }

    console.log(user);
  }

  return (
    <div id='register'>
      <h2>LifeLens</h2>
      <p className='subtitle'>Cadastre-se para encontrar seus amigos!</p>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Digite seu Nome' onChange={(e) => setName(e.target.value)} value={name || ""}/>
        <input type='email' placeholder='Digite seu Email' onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
        <input type='password' placeholder='Digite sua Senha' onChange={(e) => setPassowrd(e.target.value)} value={password || ""} />
        <input type='password' placeholder='Confirme sua Senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ""} />

        <input type='submit' value='Registrar' />
      </form>

      <p>Já tem conta?<Link to='/login'>Clique aqui para Logar.</Link></p>
    </div>
  )
}

export default Register;
import React from 'react';
import './Auth.css';

// components
import { Link } from 'react-router-dom';
import { Message } from '../../components/Message';

// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id='login'>
      <h2>LifeLens</h2>
      <p>Faça login para ver as Lens de seus amigos!</p>

      <form onSubmit={handleSubmit}>
    	  <input type='text' placeholder='Email' />
        <input type='password' placeholder='Senha' />
        <input type='submit' value='Logar' />
      </form>

      <p>Não tem uma conta? <Link to='/register'>Clique aqui!</Link></p>
    </div>
  )
}

export default Login
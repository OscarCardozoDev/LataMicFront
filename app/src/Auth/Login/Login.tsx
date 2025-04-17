import React, { useState, useEffect } from 'react';
import { LoginView } from './Login.view';
import { GET_USER_BY_ID } from './Login.service';
import { useLazyQuery } from '@apollo/client';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getUserById, { data, loading, error }] = useLazyQuery(GET_USER_BY_ID);

  const handleSubmit = () => {
    getUserById({ variables: { user_id: 1 } });
  };

  // Mostrar datos si están disponibles
  if (data) {
    const user = data.getUserById;
    console.log(
      'Usuario 1:',
      user.email,
      user.name,
      user.lastname,
      user.country?.name
    );
  }


  return (
    <LoginView
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

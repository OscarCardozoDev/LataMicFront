import React, { useState } from 'react';
import { RegisterView } from './Register.view';

export const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [country, setCountry] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = () => {
    console.log('Registrando usuario con:');
    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Nickname:', nickname);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    console.log('Confirmación:', passwordConfirmation);
    console.log('País:', country);
    console.log('Fecha de nacimiento:', birthday);
    // Aquí puedes añadir la lógica de autenticación o registro
  };

  return (
    <RegisterView
      name={name}
      lastName={lastName}
      nickname={nickname}
      email={email}
      password={password}
      passwordConfirmation={passwordConfirmation}
      country={country}
      birthday={birthday}
      onNameChange={setName}
      onLastNameChange={setLastName}
      onNicknameChange={setNickname}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onPasswordConfirmationChange={setPasswordConfirmation}
      onCountryChange={setCountry}
      onBirthdayChange={setBirthday}
      onSubmit={handleSubmit}
    />
  );
};

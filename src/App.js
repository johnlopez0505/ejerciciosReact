// App.js

import React, { useState } from 'react';


import './App.css'; 
import UserCard from './componentes/UserCard';
import UserList from './componentes/UserList';
const urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkh66V-u1otFaWy7eS_9lnjx3WZqAPZBz1A&usqp=CAU';
const users = 
  {
    photo: urlImagen,
    firstName: 'John',
    lastName: 'lopez',
    birthdate: '1990-01-01',
    description: 'Web Developer',
    currentCompany: 'ABC Inc.',
  };

const urlImagen1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMRAvurfdHRs_M8PSP6wMGArDfWEVvaPgKQ&usqp=CAU';
  const user1 = 
  {
    photo: urlImagen1,
    firstName: 'Juan',
    lastName: 'perez',
    birthdate: '1984-05-05',
    description: 'movil Developer',
    currentCompany: 'NTT data.',
  };

  const userlist = [
    {photo: urlImagen,firstName: 'dario',lastName: 'romero',birthdate: '1987-05-23',description: 'señor developer', currentCompany: 'NTT data'},
    {photo: urlImagen,firstName: 'francisco',lastName: 'nolasco',birthdate: '1987-05-23',description: 'señor developer', currentCompany: 'NTT data'},
    {photo: urlImagen,firstName: 'jose',lastName: 'chema',birthdate: '1987-05-23',description: 'señor developer', currentCompany: 'NTT data'},
    {photo: urlImagen,firstName: 'carlos',lastName: 'sanchez',birthdate: '1987-05-23',description: 'señor developer', currentCompany: 'NTT data'},
    {photo: urlImagen,firstName: 'ivan',lastName: 'el-terrible',birthdate: '1987-05-23',description: 'señor developer', currentCompany: 'NTT data'},
  ]

const App = () => {
  const [theme, setTheme] = useState('light-theme');

  const handleToggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <UserCard user= {users}/>
      <UserCard user= {user1}/>
      <UserList user= {user}/>
    </div>
  );
};

export default App;

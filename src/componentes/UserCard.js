

// UserCard.js
import './UserCard.css';
import React from 'react';

const UserCard = ({user}) => {
  const { photo, firstName, lastName, birthdate, description, currentCompany } = user;

  return (
    <div className="user-card">
      <img src={photo} alt={`${firstName} ${lastName}`} />
      <div>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p><strong>Fecha de nacimiento:</strong> {birthdate}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <p><strong>Empresa actual:</strong> {currentCompany}</p>
      </div>
    </div>
  );
};

export default UserCard;

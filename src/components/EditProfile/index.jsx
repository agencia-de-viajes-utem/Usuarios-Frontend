import React, { useState } from 'react';
import './EditProfile.css';
import Input from "../Form/Input";

function EditProfile() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSave = () => {
    // Agrega lógica para guardar los datos del perfil aquí
  };

  return (
    <div className="center-content">
            <div className="content">
                <h1 className="content-tittle">Datos personales</h1>
                <div className="content-layout">
                    Datos basicos
                </div>
                <div className='profile-editor'>
                    <div>
                        <label className='content-label'>Nombre: </label>
                        <input className='content-input' 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className='content-label'>Apellidos: </label>
                        <input className='content-input'
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                    </div>
                    <div>
                        <label className='content-label'>Genero</label>

                    </div>
                    <div>
                        <label className='content-label'>Correo: </label>
                        <input className='content-input' 
                           type="tel"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                         />
                    </div>
                    <div>
                        <label className='content-label'>Fecha de Nacimiento: </label>
                        <input className='content-input'
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                         />
                </div>
            </div>             
        </div>
    </div>        
  );
}

export default EditProfile;

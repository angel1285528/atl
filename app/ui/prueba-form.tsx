/*'use client'
import React, { useState } from 'react';
import { create } from "../lib/action";

export default function Form() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name) {
            setMessage('Por favor, ingresa un nombre.');
            return;
        }

        try {
            const newRecord = await create(name);
            setMessage(`Registro creado con éxito: ${newRecord.name}`);
            setName(''); // Limpiar el campo después del éxito
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`No se pudo crear el registro: ${error.message}`);
            } else {
                setMessage('Ocurrió un error desconocido.');
            }
        }
    };
    return (
  
  <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='text-black'
                />
                <button type="submit">Crear Registro</button>
            </form>
            {message && <p>{message}</p>}
        </div>
          
    );
}
    */
'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Usuario } from '@prisma/client';
import { usuarioSchema } from '../lib/zSchemaUsuarios';
import { zodResolver } from '@hookform/resolvers/zod';
import { set } from 'date-fns';
import { crearUsuario } from '../lib/CrudUsuarios';
import { toast } from 'react-toastify';

const UserForm: React.FC = () => {
const [submitError, setSubmitError] = React.useState<string | null>(null);
const router = useRouter();
const methods = useForm<Usuario>({
    resolver: zodResolver(usuarioSchema)
});

const [isSubmitting, setIsSubmitting] = React.useState(false);

const onSubmit: SubmitHandler<Usuario> = async (data) => {
  setIsSubmitting(true);
  try {
    const nuevoUsuario = await crearUsuario(data);
    toast.success('Usuario registrado exitosamente',
      {
        position: 'bottom-center',
        autoClose: 4000, // Duración de la notificación en milisegundos
      });
    
    router.push(`/modulos/`);
    
    setSubmitError(null);

  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error
  }
 return (
  <>  
  </>
 )
}
export default UserForm;
import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'; // Importa FieldErrorsImpl

type ErrorMessageProps = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | null;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error || typeof error.message !== 'string') return null;

  return <span className='text-red-500 mt-1'>{error.message}</span>;
};

export default ErrorMessage;
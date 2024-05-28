
// import entrenamientos from '@app/lib/prisma';
// import { createEntrenamiento } from '@/app/lib/create/';
// import { zEntrenamientos } from '@/app/lib/zod/z';
// import { useRouter } from 'next/navigation';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { FormProvider } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { toast } from 'react-toastify';
// import InputsFormularioEntrenamientos from './camposFormularioSocio';

// const [isSubmitting, setIsSubmitting] = React.useState(false);

// const onSubmit: SubmitHandler<Entrenamientos> = async (data) => {
//   setIsSubmitting(true);
//   try {
//     const nuevoEntrenamiento = await createEntrenamiento(data);
//     toast.success('Entrenamiento registrado exitosamente',
//       {
//         position: 'bottom-center',
//         autoClose: 4000, // Duración de la notificación en milisegundos
//       }
//     );

//     router.push(`/modulos/entrenamientos/`);

//     setSubmitError(null);

//   } catch (error) {
//     console.error('Error al enviar el formulario:', error);
//     setSubmitError('Error al enviar el formulario.'); // Establecer mensaje de error
//   }
//   setIsSubmitting(false);


// return (
//   <FormProvider {...methods}>
//     <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>
//       {/*Inputs del Formulario*/}
//       <div className='flex justify-center'>
//         <button type='submit' disabled={isSubmitting} className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
//           {isSubmitting ? 'Registrando...' : 'Registrar Socio'}
//         </button>
//       </div>
//     </form>
//   </FormProvider>
// );
// }




// // import {
// // Accordion,
// // AccordionContent,
// // AccordionItem,
// // AccordionTrigger,
// // } from '@/components/ui/accordion'
// // import { NewspaperIcon } from 'lucide-react'
// // const NuevoFormularioEntrenamiento: React.FC = () => {
// // return (<>
// // <Accordion className='w-full md:w-5/6 lg:w-4/6 mx-auto' type='single' collapsible>
// // <AccordionItem value='item-1'>
// // <AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900'>
// // <span><NewspaperIcon className=' text-2xl md:text-3xl text-right mr-auto'/></span><span> Nuevo Entrenamiento</span>
// // </AccordionTrigger>
// // <AccordionContent>
// // {/* Incluir contenido del accordeon*/}
// // </AccordionContent>
// // </AccordionItem>
// // </Accordion>
// //  </>)}
// // export default NuevoFormularioEntrenamiento
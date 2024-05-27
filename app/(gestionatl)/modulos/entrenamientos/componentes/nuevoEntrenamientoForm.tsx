import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from '@/components/ui/accordion'
import { NewspaperIcon } from 'lucide-react'
const NuevoFormularioEntrenamiento: React.FC = () => {
return (<>
<Accordion className='w-full md:w-5/6 lg:w-4/6 mx-auto' type='single' collapsible>
<AccordionItem value='item-1'>
<AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900'>
<span><NewspaperIcon className=' text-2xl md:text-3xl text-right mr-auto'/></span><span> Nuevo Entrenamiento</span>
</AccordionTrigger>
<AccordionContent>
{/* Incluir contenido del accordeon*/}
</AccordionContent>
</AccordionItem>
</Accordion>
 </>)}
export default NuevoFormularioEntrenamiento
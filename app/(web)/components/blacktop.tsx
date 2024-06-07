import { HomeIcon } from 'lucide-react'; 
import { FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';

const BlackTop = () => {
    return (
        <div id='blackTop' className='bg-black h-8 text-white flex items-center justify-end pr-2 md:pr-4 space-x-2 z-50'>
            <span className='md:hidden justify-start'><HomeIcon className="w-5 h-5" /></span>
            <span className='font-extrabold'>Academia Tigres</span>
            <span className='font-bold'>Linares |</span>
            <span><FaFacebook className="w-5 h-5" /> </span>
            <span><FaInstagram className="w-5 h-5" /> </span>
            <span><FaMailBulk className="w-5 h-5" /> </span>
        </div>
    );
};

export default BlackTop;

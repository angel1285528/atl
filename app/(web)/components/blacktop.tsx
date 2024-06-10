import { HomeIcon } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';
const BlackTop = () => {
    return (
        <div id='blackTop' className='bg-black h-10 text-white flex items-center justify-end pr-2 md:pr-12 space-x-2 z-50'>
            <span className='md:hidden justify-start'>
                <Link href="/">
                    <HomeIcon className="w-5 h-5" />
                </Link>
            </span>
            <Link href="/">
                <span className='font-extrabold'>ACADEMIA TIGRES</span>

                <span className='font-bold pl-2'>LINARES |</span>
            </Link>
            <Link href="https://www.facebook.com/tigres.linares.oficial"> <span><FaFacebook className="w-5 h-5" /></span></Link>

            <Link href="https://www.instagram.com/academiatigreslinares/"><span>
                <FaInstagram className="w-5 h-5" /> </span>
            </Link>
            <Link href="mailto:info@tigreslinares.com" aria-label="Email">
                <span>
                    <MailIcon className="w-5 h-5" /> 
                    </span>
            </Link>
        </div>
    );
};

export default BlackTop;

import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            {/* Logo with Link and Alt text */}
            <Link href="/">
                <Image 
                    src={logo} 
                    width={450} 
                    height={100} 
                    alt='Dragon News Logo' 
                    className='mx-auto hover:opacity-90 transition-opacity cursor-pointer' 
                    priority // লোগো দ্রুত লোড হওয়ার জন্য
                />
            </Link>
            
            <p className='text-gray-500 text-lg italic font-medium'>
                Journalism Without Fear or Favour
            </p>
        
            <div className='inline-block bg-gray-100 px-6 py-2 rounded-lg shadow-sm border border-gray-200'>
                <p className='text-[#403F3F] font-semibold'>
                    <span className='text-gray-600 font-bold'>Date:</span> {format(new Date(), "EEEE, MMMM dd, yyyy")}
                </p>
            </div>
        </div>
    );
    
};

export default Header;
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-7 space-y-3'>
            <Image src={logo} width={300} height={200} alt='logo' className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>Date {format(new Date(), "EEEE, MMMM, dd, yyy")}</p>
        </div>
    );
};

export default Header;
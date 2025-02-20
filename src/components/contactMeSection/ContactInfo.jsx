import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='Hyileenet@gmail.com' Image={MdOutlineEmail}/>
        <SingleInfo text='+65 9827 5085' Image={FaWhatsapp}/>
    </div>
  )
}

export default ContactInfo
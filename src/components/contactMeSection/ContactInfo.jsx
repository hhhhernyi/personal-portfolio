import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='Email' Image={MdOutlineEmail}/>
        <SingleInfo text='phone number' Image={LuPhone}/>
        <SingleInfo text='address' Image={CiLocationOn}/>
    </div>
  )
}

export default ContactInfo
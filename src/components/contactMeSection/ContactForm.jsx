import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='your name' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <input type='email' placeholder='your email' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <textarea type='text' placeholder='your message' rows='9' cols='50' required className=' rounded-lg bg-lightBrown p-2'/>
            <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
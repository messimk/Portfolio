import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        <p className='text-gray-400 mt-4 max-w-[600px] mx-auto'>
          Feel free to reach out via email or phone. I’d love to hear from you!
        </p>
      </div>

      <div className='max-w-[600px] mx-auto mt-10 bg-[#161616] p-8 rounded-xl shadow-lg'>
        <div className='flex items-center gap-4 mb-6'>
          <Mail className='text-primary-color' size={24} />
          <a
            href='mailto:mekuriyawmeseret09@gmail.com'
            className='text-gray-300 hover:underline text-lg'
          >
            mekuriyawmeseret09@gmail.com
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <Phone className='text-primary-color' size={24} />
          <a
            href='tel:+251972024774'
            className='text-gray-300 hover:underline text-lg'
          >
            0972024774
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

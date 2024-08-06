import React, { useState } from 'react';
import { Input, Textarea, Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from '@material-tailwind/react';
import emailjs from '@emailjs/browser';
import successIcon from '../../assets/success-icon.svg';
import errorIcon from '../../assets/error-icon.svg';

function Contact() {

  return (
    <>
      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Get In Touch</h1>
            <hr className='border-b-4 border-secondary w-28 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>I'd love to hear from you! Whether you have a project idea, a question about my work, or simply want to connect and say hello, please don’t hesitate to reach out. Drop me a message below, and I'll get back to you as soon as possible.</p>
        </div>
        <div className='flex justify-center'>
          <div className="contact-form w-full md:w-[550px] rounded-lg bg-primary ">
            <div className='bg-[#00000000] rounded-lg p-8'>
              <form >
                <div className='flex flex-col gap-8'>
                  <Input
                    variant="standard"
                    label="Full name"
                    name="name"
                    className='text-white input-field'
                    required
                    color='light-blue'
            
                  />
                  <Input
                    variant="standard"
                    label="Email"
                    name="email"
                    type='email'
                    required
                    className='text-white input-field'
                    color='light-blue'
                    
                  />
                  <Input
                    variant="standard"
                    label="Mobile"
                    name="mobile"
                    type='tel'
                    className='text-white input-field'
                    color='light-blue'
                    
                  />
                  <Textarea
                    variant="standard"
                    label="Message"
                    name="message"
                    required
                    className='text-white input-field'
                    color='light-blue'
                    
                  />
                </div>
                <div className='flex justify-end'>
                  <IconButton type='submit'>
                    SEND
                    <span></span>
                  </IconButton>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className='text-accent my-20'>Any Project Ideas ? Just Mail me on <span className='font-bold italic'>anishlohiya196@gmail.com</span>. Whether you have a specific project in mind, a question, or just want to connect, I'm always happy to hear from you. Click <a href="mailto:anishlohiya196@gmail.com" className='text-white underline'>here</a> to send an email directly.</p>
        <hr className="border-[#ffffff25] my-5" />
      </section>
    </>
  );
}

export default Contact;

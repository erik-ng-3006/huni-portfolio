import ContactForm from '@/components/contact-form'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s get in touch</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage

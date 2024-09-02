'use client'

import { ContactFormSchema } from '@/lib/schemas'
import React from 'react'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Link from 'next/link'
import { sendEmail } from '@/lib/actions'
type Inputs = z.infer<typeof ContactFormSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)
    if (result?.error) {
      toast.error('Something went wrong, please try again later!')
      return
    }
    toast.success('Your message has been sent successfully!')
    reset()
  }
  return (
    <section className='relative isolate'>
      <div className='relative'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-16 lg:flex-auto'
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='given-name'
                {...register('name')}
              />
              {errors.name?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                id='email'
                type='email'
                placeholder='Email'
                autoComplete='given-email'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
              />
              {errors.message?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

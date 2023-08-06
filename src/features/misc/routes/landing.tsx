import { useNavigate } from 'react-router'

import logo from '@/assets/react.svg'
import { Button } from '@/components/elements'
import { Head } from '@/components/head'
import { useUser } from '@/lib/auth'

export const Landing = () => {
  const navigate = useNavigate()
  const { data } = useUser()

  const handleStart = () => {
    if (data) {
      navigate('/app')
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <>
      <Head description='Welcome to react' />
      <div className='flex h-[100vh] w-full items-center bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>React</span>
          </h2>
          <img
            src={logo}
            alt='react'
            width={200}
            height={200}
            className='mx-auto'
          />
          <p>Showcasing Best Practices For Building React Applications</p>
          <div className='mt-8 flex justify-center'>
            <div className='inline-flex rounded-md shadow'>
              <Button
                onClick={handleStart}
                startIcon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                }
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

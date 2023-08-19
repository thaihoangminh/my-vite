import { ReactNode } from 'react'

import logo from '@/assets/react.svg'
import { Link } from '@/components/elements'
import { Head } from '@/components/head'

type LayoutProps = {
  children: ReactNode
  title: string
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className='flex min-h-screen w-full flex-col bg-gray-50 pt-10'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='flex justify-center'>
            <Link className='flex items-center text-white' to='/'>
              <img className='h-24 w-auto' src={logo} alt='Workflow' />
            </Link>
          </div>
          <h2 className='mt-3 text-center text-3xl font-extrabold text-gray-900'>{title}</h2>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='rounded-xl bg-white px-4 py-8 shadow-xl sm:px-10'>{children}</div>
        </div>
      </div>
    </>
  )
}

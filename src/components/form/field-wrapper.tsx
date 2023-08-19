import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import clsx from 'clsx'

type FieldWrapperProps = {
  label?: string
  className?: string
  children: ReactNode
  error?: FieldError | undefined
  description?: string
}

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props
  return (
    <div>
      <label className={clsx('block text-sm font-medium text-gray-700', className)}>
        <span className='block font-semibold text-slate-700'>{label}</span>
        <div className='mt-1'>{children}</div>
      </label>
      {error?.message && (
        <div role='alert' aria-label={error.message} className='text-sm font-semibold text-red-500'>
          {error.message}
        </div>
      )}
    </div>
  )
}

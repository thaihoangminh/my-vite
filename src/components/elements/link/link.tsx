import { Link as RouterLink, LinkProps } from 'react-router-dom'
import clsx from 'clsx'

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={clsx('text-indigo-600 hover:text-indigo-900', className)} {...props}>
      {children}
    </RouterLink>
  )
}

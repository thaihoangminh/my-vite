import { cloneElement, ReactElement, ReactNode, useEffect } from 'react'

import { useDisclosure } from '@/hooks/use-disclosure'

import { Button } from '../elements/button'
import { Drawer, DrawerProps } from '../elements/drawer'

type FormDrawerProps = {
  isDone: boolean
  triggerButton: ReactElement
  submitButton: ReactElement
  title: string
  children: ReactNode
  size?: DrawerProps['size']
}

export const FormDrawer = ({
  title,
  children,
  isDone,
  triggerButton,
  submitButton,
  size = 'md',
}: FormDrawerProps) => {
  const { close, open, isOpen } = useDisclosure()

  useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  return (
    <>
      {cloneElement(triggerButton, { onClick: open })}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={title}
        size={size}
        renderFooter={() => (
          <>
            <Button variant='inverse' size='sm' onClick={close}>
              Cancel
            </Button>
            {submitButton}
          </>
        )}
      >
        {children}
      </Drawer>
    </>
  )
}

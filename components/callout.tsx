import React from 'react'
import {
  InfoCircledIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
  CrossCircledIcon
} from '@radix-ui/react-icons'

type CalloutType = 'info' | 'success' | 'warning' | 'error'

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

const Callout: React.FC<CalloutProps> = ({ type = 'info', children }) => {
  const getCalloutStyle = (): string => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-700'
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700'
      case 'error':
        return 'bg-red-100 border-red-500 text-red-700'
      default:
        return 'bg-blue-100 border-blue-500 text-blue-700'
    }
  }

  const getIcon = (): React.ReactNode => {
    switch (type) {
      case 'success':
        return <CheckCircledIcon className='mr-3 h-5 w-5' />
      case 'warning':
        return <ExclamationTriangleIcon className='mr-3 h-5 w-5' />
      case 'error':
        return <CrossCircledIcon className='mr-3 h-5 w-5' />
      default:
        return <InfoCircledIcon className='mr-3 h-5 w-5' />
    }
  }

  return (
    <div className={`mb-4 border-l-4 p-4 ${getCalloutStyle()}`} role='callout'>
      <div className='flex items-center'>
        {getIcon()}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Callout

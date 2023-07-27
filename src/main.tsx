import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from '@/providers/auth-provider'
import { ReactQueryProvider } from '@/providers/react-query-provider'
import { ReactRouterProvider } from '@/providers/react-router-provider'

// import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      {/*<App />*/}
      <AuthProvider>
        <ReactRouterProvider />
      </AuthProvider>
    </ReactQueryProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from './components/Theme-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider defaultTheme='light' storageKey='ui-theme'>
      <App />
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>,
)

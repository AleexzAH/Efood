import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './contexts/CartContexts'

import App from './App'
import { GlobalStyle } from './styles'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <BrowserRouter>
  <GlobalStyle />
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
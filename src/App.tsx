import { BrowserRouter } from 'react-router-dom'

import { Container } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Rotas />
      </Container>
    </BrowserRouter>
  )
}

export default App

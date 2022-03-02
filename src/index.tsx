import ReactDOM from 'react-dom'
import './index.css'
import App from 'app'
import { GlobalStateProvider } from 'hooks/use-global-state'

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
)

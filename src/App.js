import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      <Center>
        <img src={logo} className="App-logo" alt="logo" />
      </Center>
    </div>
  )
}

export default App

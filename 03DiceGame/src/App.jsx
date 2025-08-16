import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import { useState } from 'react';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStart = () => {
    setIsGameStarted( (prev) => !prev ); 
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay /> :
      <StartGame toggle={toggleGameStart} />
    }
    </>
  )
}

export default App

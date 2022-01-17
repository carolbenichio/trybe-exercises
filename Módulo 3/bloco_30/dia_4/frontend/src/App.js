import './App.css';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [square, setSquare] = useState(false);

  useEffect(() => {
    socket.on('position', ({x, y}) => {
      setX(x);
      setY(y);
    })
  }, []);

  const showSquare = () => {
    setSquare(true);
  }

  const resetGame = () => {
    setX(0);
    setY(0);
  }

  const moveSquare = () => {
    socket.emit('click', {
      width: {
        min: -560,
        max: 560,
      },
      height: {
        min: -310,
        max: 310,
      }
    });
  };
  
  return (
    <div>
      <header>
        <h1>Saia do seu quadrado!</h1>
      </header>
      <aside>
        <button onClick={showSquare}>Iniciar Jogo</button>
        <button onClick={resetGame}>Reiniciar Jogo</button>
      </aside>
      <main className="mainzin">
        { square && <div onClick={moveSquare} className="quadradao" style={ { transform: `translate(${x}px, ${y}px)` } }/> }
      </main>
    </div>
  );
}

export default App;

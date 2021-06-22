import './App.css';
import Image from './Image';
import catstaring from './images/catstaring.jpg'; // a imagem tem q ta dentro de src

// Fixacao 1
function App() {
  return (
    <main>
      <Image source={catstaring} alternativeText={'Cute cat staring'}/>
    </main>
  );
}

export default App;

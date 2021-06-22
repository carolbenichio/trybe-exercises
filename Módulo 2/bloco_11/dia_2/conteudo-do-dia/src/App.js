import './App.css';
// import Greeting from './components/Greeting';
// import Album from './components/Albums';
import UserProfile from './components/UserProfile'
import React from 'react';
// import Order from './components/Order';


// Greetings
// function App() {
//   return (
//     <Greeting name="Samuel" lastName="Silva" />
//   );
// }

// Albuns Coldplay
// class App extends React.Component {
//   render() {
//     const album01 = {
//       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     return (
//       <div>
//         <Album album={ album01 } />
//         <Album album={ album02 } />
//       </div>
//     );
//   }
// }

// arquivo App.js, criado pelo create-react-app, modificado
class App extends React.Component {
  render() {
    // SEM SER DINAMICO
    // const joao = {
    //   id: 102,
    //   name: "João",
    //   email: "joao@gmail.com",
    //   avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    // };

    // const amelia = {
    //   id: 77,
    //   name: "Amélia",
    //   email: "amelia@gmail.com",
    //   avatar: "https:cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    // };

    // DINAMICO
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      // SEM SER DINAMICO
      // <div className="App">
      //   <UserProfile user={joao} /> 
      //   <UserProfile user={amelia} />
      // </div>

      // DINAMICO
      <div className="App">
      { users.map(user => <UserProfile key={user.id} user={user} />) }
      </div>
    );
  }
}

// Exemplo Componentes React (ultimo) 
// class App extends React.Component {
//   render() {
//     const headphone = {
//       id: 102,
//       user: "cena@gmail.com",
//       product: "Razer Headphone",
//       price: {
//         value: 99.99,
//         currency: "dollars"
//       }
//     };

//     const energyDrink = {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     };

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//          <Order order={headphone}/>
//          <Order order={energyDrink}/>
//       </div>
//     );
//   }
// }

export default App;
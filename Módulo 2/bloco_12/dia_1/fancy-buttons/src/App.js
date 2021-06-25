// import logo from './logo.svg';
import React from 'react';
import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.handleClick1 = this.handleClick1.bind(this);
//   }
//   handleClick1() {
//     console.log('Clicou no botão UM!');
//   }
//   render() {
//     return (
//     <div>
//       <button onClick={this.handleClick1}>Meu botão</button>
//     </div>
//     );
//   };
// };

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0,
    }
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1,
    }));
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */

    // handleChange(e) {
    //   this.setState({ inputValue: e.target.value }) ?
    // } CÓDIGO DA AULA
  };
  
  render() {
    console.log(this);
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    )   
  }
}

// class App extends React.Component {
//   constructor() {
//     super()
//     /* Para definir um estado inicial ao componente, a ser definido
//     no momento em que o componente for colocado na tela, faça uma atribuição
//     de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
//     this.state = {
//       palavra : '',
//     }
//     // A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleWrite = this.handleWrite.bind(this);
//   }
  
//   handleWrite(event) {
//     this.setState({palavra : event.target.value});
//   }

//   render() {
//     console.log(this);
//     /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
//     return (
//       <input type='text' onChange={this.handleWrite}/>
//     )   
//   }
// }

export default App;

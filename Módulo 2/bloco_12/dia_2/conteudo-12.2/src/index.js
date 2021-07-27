import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './App';
import reportWebVitals from './reportWebVitals';
import TextArea from './TextArea';
import FlavorForm from './FlavorForm';

ReactDOM.render(
  <React.StrictMode>
    <form>
      <NameForm />
      <TextArea />
      <FlavorForm />
    </form>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

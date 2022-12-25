import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        hi
        <p>
                    Hi, my name is Chris Walker. I am a high school student who enjoys
                    learning and understanding the world. I love spending time coding, playing music, 
                    playing sports, playing video games, spending time with my family and
                    friends. I am probably questioning reality, relaxing, or improving
                    myself. I am striving to go to a universiy in Canada for engineering and then help the lives of others through my products and designs.
                </p>
      {/* <App /> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

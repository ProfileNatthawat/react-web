import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js'

/*const data = (
    <h1>สวัสดี React</h1>
)
function HelloComponent(){
    return <h1>สวัสดี Component ครับผม</h1>
}
class HelloComponent extends React.Component{
    render(){
      return <h1>สวัสดี Component Class</h1>
    }
}*/
//ReactDOM.render(<HelloComponent/>,document.getElementById('root') );
//ReactDOM.render(data,document.getElementById('root') );
ReactDOM.render(<App />,document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

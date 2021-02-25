import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

console.log('app.js awal')
const store = configureStore()
console.log('app.js')
class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
      </BrowserRouter> 
      </Provider>
    )
  }

}

export default App;

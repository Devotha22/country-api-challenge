import { div } from 'prelude-ls';
import {Component} from 'react';
import Countries from './component/countries';
import Header from './component/header.js';
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Countries/>
        
      </div>
    )
  }
}
export default App;
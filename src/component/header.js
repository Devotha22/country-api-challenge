import {Component} from 'react';
 class Header extends Component{
     render(){
         return(
             <header className="flex items-center justify-between bg-sky-900 p-4 text-white">
<div><h1>Where in World</h1></div>
<div><i>Dark Mode</i></div>
             </header>
         )
     }
 }
 export default Header;
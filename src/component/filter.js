import {Component} from 'react';
 class Filter extends Component{
     render(){
         return(
<div>
    <select>
<option value="Filregionter by ">Filter by region</option>
<option value="Africa">Africa</option>
<option value="America">America</option>
<option value="Europe">Europe</option>
<option value="Asia">Asia</option>
<option value="Oceania">Oceania</option>
    </select>
</div>
         )
     }
 }
 export default Filter;
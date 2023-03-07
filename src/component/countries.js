
import React, { Component } from "react";
import JsonData from "../data.json";
import Filter from "./filter"
class Countries extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:''
    };
  }
   componentDidMount() {
    this.setState({data:JsonData})
  }
  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  
  }
  

  render() {
  const filtereddata=JsonData.filter((jsonItem)=>(
   jsonItem.name.toLocaleLowerCase().includes(this.state.getdata)
  ))

    return( <div>
      <div className="flex items-center justify-between bg-sky-900 p-4"><input type='text' placeholder="search....." className='h-6' onChange={this.searchdata} /><Filter/></div>
    <div className='grid grid-cols-4 gap-4   justify-end p-9 w-full mt-8'>
    
      {/* {console.log(this.state.getdata)} */}
    
      {filtereddata.map((dataitem)=>(
      
        <div className='bg-gray-300'>
       <img src={dataitem.flag} className='h-20 w-50  p-3'></img>
          <h1 className="font-bold text-black p-3">{dataitem.name}</h1>
          <p className="px-3">population:{dataitem.population}</p>
          <p className="px-3">region:{dataitem.region}</p>
          <p className="px-3">capital:{dataitem.capital}</p>
          
        </div>
        
      ))}
      </div>
    </div>)
  }
}
export default Countries;

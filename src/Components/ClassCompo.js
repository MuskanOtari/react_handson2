import React, { Component } from 'react'

export default class ClassCompo extends Component {
state ={
    name:"",
    dept: "",
    rating :"",
    data:[]
}

 handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        this.setState({[e.target.dept]:e.target.value})
        this.setState({[e.target.rating]:e.target.value})
        // console.log(name);
    }
 handleSubmit =()=>{
        const dataObj={
            name: this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
        }
        const arr=this.state.data;
        arr.push(dataObj);
        console.log(arr);

        this.setState(this.state.data=arr)
        console.log(this.state.name);
        console.log(this.state.data);
       

    }
  render() {
    return (
        <>
       <div className="oneDiv">
       <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
       <div className="form">
       <div className="row">
       <label>Name: </label>
       <input type='text' placeholder="Enter Your Name" name="name" onChange={this.handleChange}/>
       </div>
       <div className="row">
       <label>Department: </label> 
       <input type='text' placeholder="Enter Your Department" name="dept" onChange={this.handleChange}/>
       </div>
      <div className="row">
      <label>Rating: </label> 
      <input type='text' placeholder="Enter Rating" name="rating" onChange={this.handleChange}/>
      </div>
        
        <button onClick={this.handleSubmit}>Submit</button>
       
       </div>
       <div className="bottom">
        {this.state.data.map((i,index)=>{
        return(
           
            <div className="box">
             <h1 key={index}>{i.name} || {i.dept} || {i.rating}</h1>
           </div>
          
        )
    })} </div>
       </div>

     </>
    )
  }
}


import React, { Component, Fragment } from 'react';
import './demo.css';
class Demo extends React.Component {
    constructor(props){
        super(props);
        // defining a state
        this.state={
            items :[],
            countarr:[1],
            txtContent: "",
            
            no :0,
            fname:'',
            lname:''
        }
        this.firstNameEle = null;
        this.lastNameEle=null;

    this.firstName = element => {
      this.firstNameEle = element;
      console.log( this.firstNameEle);
    };
    this.lastName = element => {
        this.lastNameEle = element;
      };
    }
  
    // countincrement=() =>{
    //     this.setState({no:this.state.no+1});
    // }
    handleRemove=(event)=>{
        console.log(event);
        let currentItems = this.state.items;
    currentItems.splice(event,1);
    console.log(currentItems);
    this.setState( {items:currentItems});

    }
    
    handlechange=(e)=>{
       // dynamic key 
        this.setState({[e.target.name]:e.target.value});
        console.log("name");
        console.log(this.state);
        
    }
    handleAdd=() =>{
       
        //updating the state , with new input values 
        this.setState({ 
          items:[...this.state.items,{fname:this.state.fname,lname:this.state.lname}]
          })
          console.log('llll' ,this.firstNameEle)
          this.firstNameEle.value='';
          this.lastNameEle.value='';
       
          this.setState({fname:''})
          this.setState({lname:''})


    }
//txt change uses arrow fun 
txtChange =(e,index) =>{

    let curentusers = this.state.users;
    // curentusers[index].first_name
this.setState({txtContent:e.target.value});
}
addItem = ()=>{
    let currentTxt = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentTxt);
    //update state
    this.setState({items:currentItems});
}
removeItem=(index)=>{
    alert(index);
    let currentItems = this.state.items;
    currentItems.splice(index,1);
    this.setState( {items:currentItems});
}
    render() { 
        return (
            // <div className="">
            //     <input type="text" onChange = {this.txtChange}/>
            //     <button onClick={this.addItem}>Add</button>
            //     <ul>
                   
            //             {this.state.items.map((item,key)=>{
            //                 return (//inline fun on onclick
            //                     <li>{item} <button onClick={ ()=>{ this.removeItem(key) }}>delete</button>
            //                         </li>
            //                 )

            //             })}
                    
            //     </ul>
            //     <p>{this.state.txtContent}</p>
        /* <div onClick={this.countincrement}>{this.state.no}</div> */
            /* </div> */

            
            
            <div className="wraper">
                <div className="tbl">
                <table>
                <th>first name</th>
                <th>last name</th>
                <tr>
                                    <td>{this.state.fname}</td>
                                <td>{this.state.lname}</td>
                                </tr>
               
                                {Object.keys(this.state.items).length >0 &&  this.state.items.map((item,key)=>{
                            return (//inline fun on onclick
                                
                                <tr>
                                    <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                </tr>
                                    
                            )

                        })}

                                
               
                </table>    
                </div>
                <div>
                <div>
                {Object.keys(this.state.items).length >0 &&  this.state.items.map((item, index) =>{
                  return(
                    <form className="container">
                <input type="text" value={item.fname}/> 
                <input type="text" value={item.lname}/>    
                
             <button onClick={ ()=>{ this.handleRemove(index) }}>remove</button>
               </form>

                  )
                 
              }) }
                </div>
                {console.log(this.state.items)}
                <div>
                <input type="text" name="fname" placeholder="Enter first Name" onChange = {this.handlechange} ref={this.firstName}/>
             <input type="text" name="lname" placeholder="Enter last Name" onChange = {this.handlechange} ref={this.lastName}/>
             <button onClick={this.handleAdd}>Add</button>
                </div>  
                
            </div>
            </div>

        );
    }
}
 
export default Demo;

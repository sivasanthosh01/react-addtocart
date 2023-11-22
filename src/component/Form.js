import React,{Component,useState} from "react";
import Home from "./Home";
class CreateForm extends Component{

    constructor(){
        super()
        this.state={
            id:"",
            image:"",
            name:"",
            model:"",
            price:""
        }
    }

    render(){

        const handle=(e)=>{
            console.log(e);
            if(e.target.name==="id"){
                this.setState({id:e.target.value})
            }
            else if(e.target.name==="img"){
                this.setState({image:e.target.value})
            }
            else if(e.target.name==="name"){
                this.setState({name:e.target.value})
                console.log(e.target.value);
                
            }
            else if(e.target.name==="model"){
                this.setState({model:e.target.value})
            }
            else if(e.target.name==="price"){
                this.setState({price:e.target.value})
            }
        }
       
        const hanSubmit=(e)=>{
            e.preventDefault()
            console.log(this.state.name);

        const data={
            id:this.state.id,
            image:this.state.image,
            Name:this.state.name,
            model:this.state.model,
            price:this.state.price
        }    
        console.log(data);
       saveData(data)

    //    this.setState({id:""})
    //    this.setState({image:""})
    //    this.setState({name:""})
    //    this.setState({model:""})
    //    this.setState({price:""})
        
        }

        const saveData=(data)=>{
            let storeData=JSON.parse(localStorage.getItem("Formdata")) || []
            storeData.push(data)
            localStorage.setItem("Formdata",JSON.stringify(storeData))
        }

    return <div>
        <form onSubmit={hanSubmit}>
            <label>ID:</label>&nbsp;
            <input type="number" name="id" onChange={handle}></input><br></br><br></br>
            <label>Image:</label>&nbsp;
            <input type="text" name="img" onChange={handle}></input><br></br><br></br>
            <label>Name:</label>&nbsp;
            <input type="text" name="name" onChange={handle}></input><br></br><br></br>
            <label>Model:</label>&nbsp;
            <input type="text" name="model" onChange={handle}></input><br></br><br></br>
            <label>Price:</label>&nbsp;
            <input type="tel" name="price" onChange={handle}></input><br></br><br></br>
            <button>Submit</button>
        </form>
        {/* <Home/> */}
    </div>
    }
}

export default CreateForm
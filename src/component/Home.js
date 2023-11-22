import React, { Component } from "react";
import './Home.scss'

class Home extends Component{

    

    render(){
        let getData=JSON.parse(localStorage.getItem("Formdata"))
          console.log(getData);
       
        //   getData.map((e)=>{
        //         console.log(e.Name);
        //   })

        return <div className="section">
           <div className="container">
                <div className="row">
                    {getData.map((e)=>{
                        return ( 
                        <div className="col">
                            <div className="card">
                                <div className="imgDiv">
                                    <img src={e.image} />
                                </div>
                                <h2>{e.Name}</h2>
                                <p>{e.model}</p>
                                <p>Price:{e.price}</p>
                            </div>
                        </div>
                    )})}
                </div>

           </div>
        </div>
    }
}

export default Home
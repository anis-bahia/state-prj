import React from 'react';
import './Main.css'
import Sitin from './sitin.jpg';


class Show extends React.Component{

constructor (props){
    super(props)
   this.state={
        show : false,
        count : 0,
        fullName : 'Anis Bahia',
        profession: 'FullStack Devlopper ',
        bio: "worked as a manger in lot of companies",
        profilePhoto: <img src='Sitin'/>

    };
this.toggleDiv = this.toggleDiv.bind(this)
    
}
toggleDiv = () =>{
    const {show} = this.state;
    this.setState({show : !show})
}
render(){
    const {count} = this.state
    return(
        <div >
            <button onClick={()=> this.toggleDiv()}>show</button>
            {this.state.show && 
            <div className="container">
              <p>{this.state.fullName}</p>
               <p>{this.state.profession}</p>
               <p>{this.state.bio}</p>
               <img  src={Sitin} />
               <p>current count: {count}</p>
            </div>
            
             }

        </div>

    );
}
componentWillMount(){
    this.myInterval = setInterval(()=>{
        this.setState(prevState => ({
            count : prevState.count + 1
            
        }))

    }, 1000)
   
}

}


export default Show;
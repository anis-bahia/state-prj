import React from 'react';



class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count : 0
        }
    }
    componentDidMount(){
        this.myIInterval = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.myIInterval);
    }
    tick = ()=>{
        this.setState(prevState => ({
            count : prevState.count + 1 
        }))
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
            </div>

        );

    }

}
 export default Clock;
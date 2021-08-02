import React,{Component} from 'react';
export class CompoCom extends Component{
    
    state = {
    name:"Rama",
    age:24

    }

render(){

    return(
        <div>
            <CompoB name={this.state.name} age={this.state.age} />

            <CompoC name={this.state.name} age={this.state.age} />            
        </div>
        
    )
}

}
class CompoB extends Component{
    render(){
        return(
            <div>
                Hello I am
                <p>Name :{this.props.name} </p>
                <p>Age :{this.props.age} </p>
                 </div>
        )
    }
}
class CompoC extends Component{
    render(){
        return(
            <div>
                Hello I am
                <p>Name-C :{this.props.name} </p>
                <p>Age-C :{this.props.age} </p>
                 </div>
        )
    }
}
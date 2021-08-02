import React ,{Component} from 'react';


export class ChildToParent extends Component{
   
    getData = (name,age) => {

    }

    render(){
        return(
            <div>
                <CompoB/>
            </div>

        )
    }

}
class CompoB extends Component {
    state ={
        name:"Rama Child",
        age:26
    }
    sendData = () => {
        
    }

    render(){
        return(
<div>
    <button onClick = {this.sendData}>Send Data</button>
</div>

        )
    }

}

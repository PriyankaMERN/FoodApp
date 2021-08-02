import React, { Component } from 'react';
// 1.fun
// function Apps(){
// return <h1>hello World</h1>

// }
// var a = () => <h1>hello</h1>;
// export default a;

class Apps extends Component {
    constructor() {
        super();
        this.state = {
            wish: "hello everyone I am class component",
            wish2: "helooooooo"
        }
    }


    render() {
        var style1 = {
            color: "white",
            backgroundColor: "grey"

        }
        var changecolor = () => {
            this.setState({
                
                wish : "changed content"
               

            })
        }
        return (
            <div>

                <h1 style={{ color: "red", backgroundColor: "#ddd" }}>{this.state.wish}</h1>
                <h2 onMouseOver={this.changecolor} style={style1}>{this.state.wish2}</h2>

            </div>
        )
    }


}
export default Apps;



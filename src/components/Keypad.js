// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    keyUpHandler = () => console.log("Entering password...")


    render() {
        return <input onKeyUp={this.keyUpHandler} type="password" />
    }

}


export default Keypad
// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    keyHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <React.Fragment>
                <input type="password" onKeyUp={this.keyHandler}></input>
            </React.Fragment>
        )
    }

}

export default Keypad

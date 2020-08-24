import React from 'react'


class Keypad extends React.Component {

    message = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input 
                    type="password" 
                    onKeyUp={this.message}>
                </input>
            </div>
        )
    }
}


export default Keypad;
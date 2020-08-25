// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    focusHandler = () => {
        console.log('Good!')
    }

    blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <React.Fragment>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Click</button>
            </React.Fragment>
        )
    }
}

export default EyesOnMe 


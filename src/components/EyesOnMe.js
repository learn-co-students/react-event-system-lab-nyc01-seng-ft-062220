// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {

    focusHelper = () => {
        console.log("Good!")
    }

    blurHelper = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.focusHelper} onBlur={this.blurHelper}>
                something
            </button>
            )
    }

}


export default EyesOnMe
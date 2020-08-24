import React from 'react'

class EyesOnMe extends React.Component {

  buttonFocus = () => {
    console.log("Good!")
  }
  buttonBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.buttonFocus} onBlur={this.buttonBlur}>Eyes On Me</button>

    )
  }



}

export default EyesOnMe


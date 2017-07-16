import React from 'react'
import { Game } from '../components/game.jsx'

class Container extends React.Component {
  //
  // constructor( props ) {
  //   super( props )
  //   this.state = {
  //   }
  // }

  // saveToGameController(index) {
  //   let newGameController = this.state.gameController
  //   newGameController[index] = this.state.symbol
  //   this.setState({ gameController: newGameController  })
  //   if(this.state.symbol === "X"){
  //     this.setState( { symbol: "O" } )
  //   }else{
  //     this.setState( { symbol: "X" } )
  //   }
  // }
  render() {

    return(
      <Game/>
    )
  }

}

export default Container

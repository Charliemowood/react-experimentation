import React from 'react'

export const Game = (props) => {


  if(!props) return null
  return (
    <div>
      <h1>Guess who is behind the card?</h1>
      <img src="../images/card.png" onClick={makeDoggy}/>
    </div>
  )

}

function makeDoggy(e) {
e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg');
e.target.setAttribute('alt', 'doggy')
}

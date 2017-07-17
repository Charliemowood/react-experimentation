import React from 'react'

export const Game = (props) => {


  if(!props) return null
  return (
    <div>
      <h1>Guess who is behind the card?</h1>
      <p>Ask yes or no questions to find out what is behind the card.</p>
      <img src="../images/card.png" onClick={makeCat}/>
    </div>
  )

}

function makeCat(e) {
e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg');
e.target.setAttribute('alt', 'cat')
}

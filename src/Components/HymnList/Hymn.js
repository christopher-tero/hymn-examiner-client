import React from 'react'

export default function Hymn(props) {
  const doctrine = () => {
    if (props.doctrine === 3) {
      return "Balanced"
    } else if (props.doctrine < 3) {
      return "Armenian"
    } else return "Calvinist"
  }

  const scriptural = () => {
    console.log(props)
    switch (props.scriptural) {
      case 1: return "None"
      case 2: return "Low"
      case 3: return "Fair"
      case 4: return "Good"
      case 5: return "Strong"
    }
  }

  return(
    <div>
      <p>Hymn Test</p>
      <h4>Title: {props.title}</h4>
      <p>Description: {props.description}</p>
      <p>Story: {props.story}</p>
      <p>Editor Rating: {props.editorRating}</p>
      <p>Editor Review: {props.editorReview}</p>
      <p>Doctrine: {doctrine()}</p>
      <p>Scripturality: {scriptural()}</p>
    </div>
  )
}

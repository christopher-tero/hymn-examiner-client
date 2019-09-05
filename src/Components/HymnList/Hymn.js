import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HymnPage from '../HymnPage/HymnPage'

export default function Hymn(props) {
  const thisHymn = props
  return(
    <div>
      <h4>Title: {props.title}</h4>
      <p>Editor Rating: {props.editorRating}</p>
      <Link to={{
        pathname: `/hymns/${props.id}`,
        state: {
          project: thisHymn,
        }
      }}>See Hymn</Link>
    </div>
  )
}

import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return(
    <div id="header">
      <p id="header-logo">Hymn Examiner</p>
      <span className="header-links">
        <Link className="link" to='/home'>Home</Link>
        <Link className="link" to='/hymns'>Hymns</Link>
        <Link className="link" to='/resources'>Resources</Link>
        <Link className="link" to='/about'>About</Link>
      </span>
    </div>
  )
}

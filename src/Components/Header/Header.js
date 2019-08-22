import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return(
    <div id="header">
      <p id="header-logo">Hymn Examiner</p>
      <span class="header-links">
        <Link class="link" to='/home'>Home</Link>
        <Link class="link" to='/hymns'>Hymns</Link>
        <Link class="link" to='/resources'>Resources</Link>
        <Link class="link" to='/about'>About</Link>
      </span>
    </div>
  )
}

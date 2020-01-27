import React from "react"
import ListLink from "./ListLink/ListLink"
import style from "./Nav.module.css"

export default () => (
  <nav className={style.Nav}>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </nav>
)

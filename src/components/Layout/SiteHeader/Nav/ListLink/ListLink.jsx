import React from "react"
import { Link } from "gatsby"
import style from "./ListLink.module.css"

console.log(style)

export default props => (
  <li className={style.ListLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

import React from "react"
import style from "./ListLink.module.scss"

export default props => {
  const additionalClassName = props.additionalClassName
    ? " " + props.additionalClassName
    : ""
  return (
    <li className={style.ListLink + additionalClassName + " nav-item"}>
      {props.children}
    </li>
  )
}

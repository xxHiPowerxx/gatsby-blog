import React from "react"
import { Link } from "gatsby"
import Nav from "./Nav/Nav"
import SiteTitle from "../SiteTitle/SiteTitle"

export default () => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}><SiteTitle /></h3>
    </Link>
    <Nav />
  </header>
)

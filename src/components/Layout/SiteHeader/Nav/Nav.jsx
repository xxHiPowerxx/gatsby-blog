import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ListLink from "./ListLink/ListLink"
import "./Nav.scss"
import style from "./Nav.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    {
      __typename
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <nav className={style.Nav}>
      <ul>
        <ListLink>
          <Link to="/"></Link>
        </ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink additionalClassName={style.dropdown + " dropdown"}>
          <Link to="/blog/">Blog</Link>
          <span
            className="dropdown-arrow dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          ></span>
          <ul className="dropdown-menu">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ListLink additionalClassName={style.dropdownItem} key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </ListLink>
            ))}
          </ul>
        </ListLink>
      </ul>
    </nav>
  )
}

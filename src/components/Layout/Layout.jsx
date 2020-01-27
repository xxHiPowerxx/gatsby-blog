import React from "react"
import SiteHeader from "./SiteHeader/SiteHeader"
import SiteTitle from "./SiteTitle/SiteTitle"
export default ({ pageTitle, children }) => {
  const pageTitleSpan = pageTitle ? (
    <span className="page-title">{pageTitle} - </span>
  ) : (
    ""
  )
  return (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <SiteHeader />
    <h1>
      {pageTitleSpan}
      <SiteTitle />
    </h1>
    {children}
  </div>
  )
}

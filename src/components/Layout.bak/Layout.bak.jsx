import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"
import SiteTitle from "./SiteTitle/SiteTitle"
export default ({ pageTitle, children }) => {
  const pageTitleSpan = pageTitle ? (
    <span className="page-title">{pageTitle} - </span>
  ) : (
    ""
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          <SiteTitle />
        </h3>
      </Link>
			<ul css={css`
          float: right;
        `}>
      <Link
        to={`/about/`}
        css={css`display:inline-block`}
      >
        About
      </Link>
      <Link
        to={`/contact/`}
				css={css`display:inline-block; margin-left: 1em;`}

      >
        Contact
      </Link>
			</ul>
      <h1>
        {pageTitleSpan}
        <SiteTitle />
      </h1>
      {children}
    </div>
  )
}

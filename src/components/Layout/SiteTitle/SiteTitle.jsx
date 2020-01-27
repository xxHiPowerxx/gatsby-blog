import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return data.site.siteMetadata.title
}

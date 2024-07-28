import React from "react"
import { useStaticQuery, Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isBlog = location.pathname.includes("/blog")
  const author = data.site.siteMetadata?.author?.name
  let header

  if (isBlog) {
    header = (
      <Link className="header-link-home" to="/blog">
        {author}'s Blog
      </Link>
    )
  } else {
    header = null
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header && <header className="global-header">{header}</header>}
      <main>{children}</main>
      <footer>© 2020-{new Date().getFullYear()}, Yuki Yamamoto</footer>
    </div>
  )
}

export default Layout

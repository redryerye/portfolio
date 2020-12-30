import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isBlog = location.pathname === '/blog'
  let header

  if (isBlog) {
    header = (
      <Link className="header-link-home" to="/blog">
        {title}'s Blog
      </Link>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Yuki Yamamoto
      </footer>
    </div>
  )
}

export default Layout

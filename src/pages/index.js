import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
  // console.log(data);
  console.log(location);
  const query = useStaticQuery(graphql`
    query HomeQuery {
      github: file(absolutePath: { regex: "/logo_github.png/" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      youtube: file(absolutePath: { regex: "/logo_youtube.png/" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/logo_twitter.png/" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const github = query?.github?.childImageSharp?.fixed
  const youtube = query?.youtube?.childImageSharp?.fixed
  const twitter = query?.twitter?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div class="home-list">
        <ul>
          <li>
            <h1>
              <Link to="/about">About me</Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link to="/blog">Blog</Link>
            </h1>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/redryerye" target="_blank">
            <Image
              fixed={github}
              alt="Github"
            />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCT-om9iFTiQTom5tjNfmGHw" target="_blank">
              <Image
                fixed={youtube}
                alt="Youtube"
              />
            </a>
          </li>
          <li>
            <iframe
              class="sound-cloud-logo"
              allowtransparency="true"
              scrolling="no"
              frameborder="no"
              src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fredryerye&color=white_transparent&size=40"
            />
          </li>
          <li>
            <a href="https://twitter.com/redryerye" target="_blank">
              <Image
                fixed={twitter}
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home

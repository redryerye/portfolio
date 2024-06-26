import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const About = ({ location }) => {
  const query = useStaticQuery(graphql`
    query AboutQuery {
      icon: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 208) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const icon = query?.icon?.childImageSharp?.fixed
  const siteTitle = query.site.siteMetadata?.title || `redryerye`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <Link to="/">
        <Image
          fixed={icon}
          alt="Profile"
        />
      </Link>
      <div>
        <h1>Yuki Yamamoto</h1>
      </div>
      <div>
        <h2>About me</h2>
        <p>
          I'm a software engineer based in Paris.<br/>
          I enjoy building products—especially by developing iOS apps.
        </p>
        <p>
          Other than that, I have a deep love for hiphop. I dance and produce music.
        </p>
      </div>
      <hr />
      <div>
        <h2>Experiences</h2>
        <ul className="no-bullet">
          <li>Dec 2022 - Current | Dott | iOS Engineer</li>
          <li>Oct 2020 - Nov 2022 | KANKAK | iOS Engineer</li>
          <li>Aug 2018 - Sep 2020 | Amatorium | CTO</li>
          <li>Dec 2016 - Jul 2017 | Mediotech Co. | Web Engineer Intern</li>
        </ul>
        <p>For more info: <a href="https://www.linkedin.com/in/iamyukiyamamoto" target="_blank">LinkedIn</a></p>
      </div>
      <hr />
      <div>
        <h2>Talks</h2>
        <h3>2022</h3>
        <ul className="no-bullet">
          <li><a href="https://speakerdeck.com/redryerye/finding-alternatives-for-graphql-client-for-ios"
              target="_blank">“Finding alternatives for GraphQL client for iOS”</a> @ potatotips #77</li>
        </ul>
        <h3>2020</h3>
        <ul className="no-bullet">
          <li><a href="https://fortee.jp/iosdc-japan-2020/proposal/36676fca-9823-4a22-a90b-8eb2e98f4b1a"
              target="_blank">“In App Purchaseのこれからの在り方を考える”</a> @ iOSDC Japan 2020</li>
        </ul>
        <h3>2019</h3>
        <ul className="no-bullet">
          <li><a href="https://speakerdeck.com/redryerye/tvosnitiyotutozhu-mu-sitemiru"
              target="_blank">“tvOSにちょっと注目してみる”</a> @ iOSDC Japan 2019</li>
          <li><a href="https://speakerdeck.com/redryerye/implementing-mvvm-in-2019" target="_blank">“Implementing MVVM in
              2019”</a> @ Otemachi.swift </li>
          <li><a href="https://speakerdeck.com/redryerye/implement-p2p-connection-and-stream-your-content"
              target="_blank">“Implement P2P connection and stream your content”</a> @ try! Swift Pre Talks 2019</li>
        </ul>
      </div>
      <hr />
      <div>
        <h2>Contact</h2>
        <p>Drop me an email at yymmt3 [at] gmail.com or send me a message on <a href="https://twitter.com/redryerye"
            target="_blank">Twitter</a>
        </p>
      </div>
    </Layout>
  )
}

export default About

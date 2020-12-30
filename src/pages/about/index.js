import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../../components/layout"

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
      <Link to="/">
        <Image
          fixed={icon}
          alt="Profile"
        />
      </Link>
      <div class="about-name">
        <h1>Yuki Yamamoto</h1>
      </div>
      <div class="about-me about-section">
        <h2>About me</h2>
        <p>
          I'm a software engineer, and I love iOS development and hip-hop.
        </p>
        <p>
          In 2018, I started working on <a href="https://vall.app"
            target="_blank">VALL</a> with my friends, where I created
          a streaming platform from scratch using unique tech stacks,
           including AWS Lambda and <a href="https://www.datomic.com/"
            target="_blank">Datomic</a>. Along the way, I've found a passion for iOS development.
        </p>
        <p>
          Other than software development, I have a deep love for Hiphop. I produce music and dance.
        </p>
      </div>
      <hr />
      <div class="about-experience about-section">
        <h2>Experience</h2>
        <ul>
          <li>Oct 2020 - Current | KANKAK | iOS Engineer</li>
          <li>Aug 2018 - Sep 2020 | Amatorium | CTO</li>
          <li>Feb 2018 - May 2018 | My Student Quarters | Matketing Intern</li>
          <li>Jan 2018 - May 2018 | 1776 | Research Intern</li>
          <li>Jun 2017 - Aug 2017 | Remote Work, Inc. | Marketing Intern</li>
          <li>May 2017 - Aug 2017 | Sekai Creator | Creator</li>
          <li>Dec 2016 - Jul 2017 | Mediotech Co. | Web Engineer Intern</li>
        </ul>
        <p>For more info: <a href="https://www.linkedin.com/in/iamyukiyamamoto" target="_blank">LinkedIn</a></p>
      </div>
      <hr />
      <div class="about-talks about-section">
        <h2>Talks</h2>
        <h3>2020</h3>
        <ul>
          <li><a href="https://fortee.jp/iosdc-japan-2020/proposal/36676fca-9823-4a22-a90b-8eb2e98f4b1a"
              target="_blank">“In App Purchaseのこれからの在り方を考える”</a> @ iOSDC Japan 2020</li>
        </ul>
        <h3>2019</h3>
        <ul>
          <li><a href="https://speakerdeck.com/redryerye/tvosnitiyotutozhu-mu-sitemiru"
              target="_blank">“tvOSにちょっと注目してみる”</a> @ iOSDC Japan 2019</li>
          <li><a href="https://speakerdeck.com/redryerye/implementing-mvvm-in-2019" target="_blank">“Implementing MVVM in
              2019”</a> @ Otemachi.swift </li>
          <li><a href="https://speakerdeck.com/redryerye/implement-p2p-connection-and-stream-your-content"
              target="_blank">“Implement P2P connection and stream your content”</a> @ try! Swift Pre Talks 2019</li>
        </ul>
      </div>
      <hr />
      <div class="about-contact about-section">
        <h2>Contact</h2>
        <p>Drop me an email at yymmt3 [at] gmail.com or send me a message on <a href="https://twitter.com/redryerye"
            target="_blank">Twitter</a>
        </p>
      </div>
    </Layout>
  )
}

export default About
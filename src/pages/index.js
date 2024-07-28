import React, { useEffect, useState, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ location }) => {
  const query = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `)

  const [shakeClass, setShakeClass] = useState("")
  const [bounceClass, setBounceClass] = useState("")
  const scrollStarted = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShakeClass("shake")
    }, 500)

    const handleScroll = () => {
      if (!scrollStarted.current) {
        scrollStarted.current = true
        setBounceClass("bounce")

        // Remove the class after the animation completes
        setTimeout(() => {
          setBounceClass("")
        }, 1000) // 1000ms matches the animation duration
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const author = query.site.siteMetadata?.author
  const siteTitle = query.site.siteMetadata?.title || `redryerye`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div>
        <p>
          hey <span className={shakeClass}>👋</span>
        </p>
        <p>
          I am a coffee lover, hiphop lover, and a beginner French learner based
          in Paris.
        </p>
        <p>
          At 17, I discovered the world of startup for the first time through a{" "}
          <a
            class="gradient-link"
            href="https://www.youtube.com/watch?v=kqJNQevSgP8"
            target="_blank"
          >
            video
          </a>{" "}
          and wanted to do the same.
        </p>
        <p>
          I first{" "}
          <a
            class="gradient-link"
            href="https://www.youtube.com/watch?v=1XqfPD2Yg48&list=PL0d1XViCICSbj37r4CwtK211QaQKC8RJs&index=35"
            target="_blank"
          >
            envisioned
          </a>{" "}
          creating a better solution for the overcrowded trains in Tokyo, but
          ended up joining my friend's startup, and created an{" "}
          <a
            class="gradient-link"
            href="https://www.asahi.com/dialog/articles/14233751"
            target="_blank"
          >
            art streaming platform
          </a>{" "}
          together.
        </p>
        <p>
          Later, I joined another company, where we created an{" "}
          <a
            class="gradient-link"
            href="https://japan.cnet.com/article/35149892/"
            target="_blank"
          >
            app for pre-ordering coffee
          </a>{" "}
          at the cafés we operated in Tokyo.
        </p>
        <p>
          In 2022, I moved to Paris{" "}
          <Link class="gradient-link" to="/blog/higher-and-higher">
            because of hiphop
          </Link>
          .
        </p>
        <p>
          I am currently working at Dott to provide a hassle free vehicle
          renting experience in European cities.{" "}
          <span className={bounceClass}>🚲🛴</span>
        </p>
      </div>
      <div>
        <h5>Links</h5>
        <ul className="no-bullet">
          <li>
            <a
              href="https://www.linkedin.com/in/iamyukiyamamoto/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/redryerye" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://bento.me/redryerye" target="_blank">
              Bento
            </a>
          </li>
          <li>
            <Link to="/blog">
              {author?.name || ``}'s personal blog in Japanese
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <p>
          Drop me an email at yymmt3 [at] gmail.com
          <br />
          Always happy to help.
        </p>
      </div>
    </Layout>
  )
}

export default Home

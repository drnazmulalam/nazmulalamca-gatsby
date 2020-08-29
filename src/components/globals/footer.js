import React from "react"
import {
  // FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { useStaticQuery, graphql, Link } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          twitterHandle
          linkedin
          siteUrl
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <div className={footerStyles.ftBottom}>
          <div className={footerStyles.social}>
            {/* <p className={footerStyles.checkMe}>Connect</p> */}
            <ul className={footerStyles.socialList}>
              <li className={footerStyles.socialItem}>
                <a
                  href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="twitter"
                >
                  <FaTwitter />
                </a>
              </li>

              <li className={footerStyles.socialItem}>
                <a
                  href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="linkedin"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <p className={footerStyles.copy}>
            Copyright  &copy;{" "}
            {new Date().getFullYear().toString()}
            <span> {data.site.siteMetadata.siteUrl}</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <p> Lets go for a <FaFacebookF />? </p>

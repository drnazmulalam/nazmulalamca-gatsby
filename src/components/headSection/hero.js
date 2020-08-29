import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
  return (
    <div className={`hero__container ${heroStyles.homePageHero}`}>
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.title}>
          Articles on Analytical Method Development
        </h1>
        <p className={heroStyles.description}>
          Hey! I am passionate to share my experience in analytical sample preparation,
          method development, validation here in this site.
          Hope this will help you to develop your own methods.
        </p>

        <div className={heroStyles.heroButtonContainer}>
          <div className={heroStyles.startHere}>
            <Link
              //activeClass="active"
              to="blog"
              //spy={true}
              smooth={true}
              offset={-64}
              duration={500}
            >
              get started
            </Link>
          </div>
        </div>

      </div>

      <Link
        //activeClass="active"
        to="blog"
        //spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link>
    </div>
  )
}

export default Hero

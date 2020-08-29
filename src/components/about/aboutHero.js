import React from "react"
import aboutHeroStyles from "./about.module.scss"
import Subscribe from "../subscribe/subscribe"
// import authorImage from "../../images/ibas.png"

const AboutHero = () => {
  return (
    <section className={`about__hero ${aboutHeroStyles.aboutHero}`}>
      <div
        className={`${aboutHeroStyles.contentWrapper} ${aboutHeroStyles.wrapper}`}
      >
        <div className={aboutHeroStyles.bannerContent}>
          <h1>New here? Here is how I can help!</h1>
          <p className={aboutHeroStyles.description}>
            I will show you how to develop analytical method, use UPLC, LC-MS for Analytical Labs
          </p>
        </div>
        <div
          className={`subscribe__content ${aboutHeroStyles.subscribeContent}`}
        >
          <div className={aboutHeroStyles.formContent}>
            <p className={aboutHeroStyles.description}>
              Subscribe to get updates to your email. 
            </p>
          </div>
          <div className="about__subscribe">
            <Subscribe submitText="Yes, I want" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

import React from "react"
import aboutContentStyles from "./about.module.scss"
import SubHeading from "../home/subHeading"
import { Link } from "gatsby"
// import SubscribeSection from "./subscribeSection"

const AboutContent = () => {
  return (
    <section className={aboutContentStyles.about}>
      <div
        className={`${aboutContentStyles.content} ${aboutContentStyles.wrapper}`}
      >
        <div
          className={`about__content_wrap ${aboutContentStyles.mainContentWrapper}`}
        >
          <div className={aboutContentStyles.mainContent}>
            <div className={aboutContentStyles.headingWrap}>
              <SubHeading title="How Can I help you in solving your analytical needs" />
            </div>

            <div className={aboutContentStyles.staticContent}>
              <p>
                Are you finding it difficult to differntiate extraction, microextraction?{" "}
              </p>
              <p>Do you need to google to know which will be suitable sample preperation method for your sample?</p>
              <p>
                Learning analytical principles and techniqes with practical example will help to decide the suitable approaches for your analysis.
              </p>
              <p>
                I learned this the hard way. So don’t get trapped in the common
                pitfalls. Instead, you should
                <strong> start learning in a project-based method</strong>.
              </p>
              <p>And that is what I will show you here.</p>
              <p>
                Through easy to follow guides, you’ll learn how to analyze samples of different types and 
                solve Analytical chemistry problems.
              </p>
              <p>
                This way, you will easily see how different topics connect each other and help you
                retaining the knowledge.
              </p>
              
              <p>
                <strong>
                  <em>
                    <a
                      href="https://twitter.com/nazmulalamca"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Twitter"
                    >
                      Connect with me on Twitter
                    </a>
                  </em>
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent

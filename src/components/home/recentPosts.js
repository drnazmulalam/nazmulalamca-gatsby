import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SubHeading from "./subHeading"
//import { slugify } from "../../util/utilityFunction"
import recentStyles from "./recentPosts.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___dateUpdated], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              featured {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            fields {
              slug {
                name
              }
            }
            excerpt
          }
        }
      }
    }
  `)
  const edges = data.allMdx.edges

  return (
    <section id="blog" className={recentStyles.container}>
      <div className={recentStyles.recentPosts}>
        <div className={recentStyles.subStyles}>
          <div className={recentStyles.titleStyles}>
            <SubHeading title="Latest Articles" />
          </div>
          <div className={recentStyles.viewAll}>
            <Link to="/blog/">
              View all Articles <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className={recentStyles.container}>
          {edges.map(({ node }) => {
            const { id, frontmatter, fields, excerpt } = node
            return (
              <article className={recentStyles.article} key={id}>
                <header>
                  <Link to={`/${fields.slug.name}/`}>
                    <Img
                      fluid={frontmatter.featured.childImageSharp.fluid}
                      alt={fields.slug.name}
                      fadeIn={false}
                      loading="eager"
                    />
                  </Link>
                </header>
                <div className={recentStyles.content}>
                  <h2>
                    <Link to={`/${fields.slug.name}/`}>
                      {" "}
                      {frontmatter.title}
                    </Link>
                  </h2>
                  <p>{frontmatter.description || excerpt}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts

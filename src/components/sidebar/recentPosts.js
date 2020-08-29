import React from "react"
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
import SidebarTitle from "./sidebarTitle"
import recentPostStyles from "./sidebar.module.scss"
import SidebarPostsMarkup from "./SidebarPostMarkup"

const RecentPosts = () => {
  return (
    <div
      className={`recent__post ${recentPostStyles.recentPosts} ${recentPostStyles.widget}`}
    >
      <SidebarTitle title="recent posts" />
      <StaticQuery
        query={recentPostQuery}
        render={data => (
          <ul className={recentPostStyles.listContainer}>
            {data.allMdx.edges.map(({ node }) => (
              <SidebarPostsMarkup
                key={node.id}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                slug={node.fields.slug.name}
              />
            ))}
          </ul>
        )}
      />
    </div>
  )
}

const recentPostQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___dateUpdated], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug {
              name
            }
          }
        }
      }
    }
  }
`

export default RecentPosts

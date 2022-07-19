import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import {PostCard} from "../components/card/PostCard";
const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query GetBlogPosts {
          allMdx(sort: {fields: frontmatter___date, order: DESC}) {
              nodes {
                  frontmatter {
                      title
                      description
                      date(fromNow: true)
                  }
                  id
                  slug
              }
          }
      }
  `)
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <h2>Недавно опубликованное:</h2>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          description={post.frontmatter.description}
          slug={post.slug}
        />
      ))}
    </Layout>
  )
}

export default IndexPage

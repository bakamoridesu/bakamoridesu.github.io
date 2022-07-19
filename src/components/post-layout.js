import * as React from 'react'
import Layout from './layout';
import { Link } from 'gatsby';

const PostLayout = ({ children, pageContext }) => {

  const { title, description } = pageContext.frontmatter;
  return (
    <Layout
      title={title}
      description={description}
    >
      {/*<pre>*/}
      {/*  {JSON.stringify(props, null, 2)}*/}
      {/*</pre>*/}
      {children}
      <Link to="/">&larr; Back to home</Link>
    </Layout>
  )
}

export default PostLayout

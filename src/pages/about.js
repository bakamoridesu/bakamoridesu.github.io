import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {

  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <main>
        <div>ABOUT</div>
        <Link to='/'>Go to home</Link>
      </main>
    </Layout>
  )
}

export default AboutPage
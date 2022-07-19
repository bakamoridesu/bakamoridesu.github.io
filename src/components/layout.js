import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo.js';

import { header, content, heroWrapper } from '../styles/layout.module.css';
import '../styles/global.css';

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className={heroWrapper}>
        <header className={header}>
          <Link to="/">{meta.title}</Link>
        </header>
      </div>
      <main className={content}>{children}</main>
    </>
  );
}

export default Layout

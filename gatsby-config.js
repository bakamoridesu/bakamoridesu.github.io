module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: "Baka Mori",
    description: 'Road to fullstack javascript mastery',
    image: 'https://res.cloudinary.com/zimbabwecoolcompany/image/upload/v1657553787/my-images/6319352_vuew1f.webp'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`
      }
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            }
          }
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}

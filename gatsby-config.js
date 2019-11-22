module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '0ge8xzmnbp2c',
        accessToken: 'b3b275d4fda32085546b9100cb9ae7cb8796fdddd462fd42ba53c4c17bf2f99d'
      }
    }
  ],
}

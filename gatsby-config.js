module.exports = {
  pathPrefix: '/leaflet-clickmap',
  siteMetadata: {
    title: 'Leaflet Clickmap',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/atoms/styles/'],
      },
    }
  ],
};

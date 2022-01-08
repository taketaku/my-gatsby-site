module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "my-gatsby-site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "6yvtG9OLC-GldOSDjF5mKQH-4AQG4EsummsgmiVhBRY",
        spaceId: "k8m1bhl9njee",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

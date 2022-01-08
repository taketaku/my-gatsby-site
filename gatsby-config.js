module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "my-gatsby-site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "pKH_RJ_vdfjsAPbfLJuSs2pF2Ah3dNeuz33ZN0xVyjQ",
        spaceId: "k8m1bhl9njee",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

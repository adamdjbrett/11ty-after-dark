const isProduction = process.env.ELEVENTY_ENV === "production";
const productionUrl = process.env.SITE_URL || "https://example.com";

export default {
  title: "after-dark theme",
  description: "A robust, elegant dark theme",
  language: "en",
  author: "John Doe",
  url: isProduction ? productionUrl : "http://localhost:8080",
  paginateBy: 5,
  afterDarkTitle: "My Example Site",
  afterDarkMenu: [
    { url: "/", name: "Home" },
    { url: "/blog/", name: "Blog" },
    { url: "/tags/", name: "Tags" }
  ],
  codeblock: true,
  latex: true,
  enableSearch: false
};

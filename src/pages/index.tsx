import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Im making this by following the Gatsby tutorial</p>
      <StaticImage
        src="../images/icon.png"
        alt="Derp"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;

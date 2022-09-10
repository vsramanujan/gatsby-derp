import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout pageTitle="About me">
      <p>I am the proud creator of this site!</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <Seo title="About" />
    <meta name="description" content="Your description" />
  </>
);

export default About;

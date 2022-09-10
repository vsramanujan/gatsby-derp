import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About me">
      <p>I am the proud creator of this site!</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>About</title>
    <meta name="description" content="Your description" />
  </>
);

export default About;

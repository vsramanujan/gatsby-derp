import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog: React.FC<{ data: Queries.BlogQuery }> = ({ data }) => {
  console.log("Z", data.allFile.nodes);
  return (
    <Layout pageTitle="Blogs">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="Blogs" />;

export default Blog;

export const query = graphql`
  query Blog {
    allFile {
      nodes {
        name
      }
    }
  }
`;

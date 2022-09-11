import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Blog: React.FC<{ data: Queries.BlogQuery }> = ({ data }) => {
  return (
    <Layout pageTitle="Blogs">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter?.slug}`}>
            <h2>{node.frontmatter?.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Blogs" />;

export default Blog;

export const query = graphql`
  query Blog {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        body
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
      }
    }
  }
`;

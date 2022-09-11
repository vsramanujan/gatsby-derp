import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ children, pageContext, data }) => {
  console.log(pageContext, data);
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={pageContext.frontmatter.title}>
      <p>{pageContext.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Post" />;

export default BlogPost;

// optional since pagecontext already has frontmatter - this would come in data
// The id gets automatically passed since its a part of the pageContext
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
      }
    }
  }
`;

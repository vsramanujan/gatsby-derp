import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Seo: React.FC<{ title: string }> = ({ title }) => {
  const data = useStaticQuery<Queries.SeoQueryQuery>(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data?.site?.siteMetadata?.title}
    </title>
  );
};

export default Seo;

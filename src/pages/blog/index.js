import { getBlogPages } from "@/cms/contentful";
import { BlogCover } from "@/components/BlogCover";
import { BlogGrid } from "@/components/Grid";
import { Box } from "@mui/material";
import { BreadcrumbsNav } from "@/components/BreadcrumbsNav";


export default function Home({ blogs }) {
  return (
    <Box sx={{ maxWidth: "1440px", margin: "2em auto", padding: "0 1em", }}>
      <BreadcrumbsNav
        breadcrumbs={[{ title: 'Home', href: "/" }]}
        current={'Blog'}
      />
      <BlogGrid>
        {blogs.map(({ fields }, key) => (
          <BlogCover key={key} {...fields}></BlogCover>
        ))}
      </BlogGrid>
    </Box>
  );
}

export async function getServerSideProps() {
  const blogPages = await getBlogPages('my-first-blog-page');
  return {
    props: { blogs: blogPages }
  };
}


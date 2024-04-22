import { getBlogPage } from "@/cms/contentful";
import { Box } from "@mui/material";
import { renderComponent } from "@/render";
import { BreadcrumbsNav } from "@/components/BreadcrumbsNav";


export default function BlogPage({ content, title }) {
    return (
        <Box
            sx={{
                maxWidth: '1440px',
                width: '100%',
                margin: "2em auto",
                padding: "0 1em",
            }}>
            <BreadcrumbsNav
                breadcrumbs={[{ title: 'Home', href: "/" }, { title: 'Blog', href: "/blog" }]}
                current={title}
            />
            {content.map((el, key) => renderComponent(el, key))}
        </Box >
    );
}

export async function getServerSideProps({ query: { slug } }) {
    const blog = await getBlogPage(slug);
    return {
        props: { ...blog.fields }
    };
}

import { searchBlogPages } from "@/cms/contentful";

export default function handler(req, res) {
    const { query } = req.query;
    searchBlogPages(query)
        .then((resp) => {
            const results = resp.map(({ fields: { title, slug } }) => ({
                title,
                href: `/blog/${slug}`
            }));
            res.status(200).json(results);
        })
        .catch((error) => {
            console.error(error);
        })

}

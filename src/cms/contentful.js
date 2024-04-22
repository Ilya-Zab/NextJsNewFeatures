const contentful = require('contentful');

const CFU_ACCESS_TOKEN = process.env.CFU_ACCESS_TOKEN;

const client = contentful.createClient({
    space: 'db029ji6o9qm',
    accessToken: CFU_ACCESS_TOKEN,
});

export const getBlogPage = (slug) => {
    return client
        .getEntries({ "fields.slug": slug, content_type: "blogPage", include: 10 })
        .then((resp) => resp.items[0])
        .catch((err) => console.log(err));
}

export const getBlogPages = (slug) => {
    return client
        .getEntries({ content_type: "blogPage", include: 10 })
        .then((resp) => resp.items)
        .catch((err) => console.log(err));
}

export const searchBlogPages = (query = "undefined undefined") => {
    return client
        .getEntries({ content_type: "blogPage", query, include: 10 })
        .then((resp) => resp.items)
        .catch((err) => console.log(err));
} 
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
    const posts = await Promise.all([
        {
            _path: "/blog/post-a",
            modifiedAt: new Date(),
            image: "https://example.com/images/post-a.jpg",
            priority: 0.8,
            changefreq: "daily"
        },
        {
            _path: "/blog/post-b",
            modifiedAt: new Date(),
            image: "https://example.com/images/post-b.jpg",
            priority: 0.7,
            changefreq: "weekly"
        },
        {
            _path: "/blog/post-c",
            modifiedAt: new Date(),
            image: "https://example.com/images/post-c.jpg",
            priority: 0.6,
            changefreq: "monthly"
        },
    ]);

    return posts.map((p) => {
        return {
            loc: p._path,
            lastmod: p.modifiedAt.toISOString(),
            image: p.image,
            priority: p.priority,
            changefreq: p.changefreq
        };
    });
});
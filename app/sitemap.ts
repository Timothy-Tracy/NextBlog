import { MetadataRoute } from 'next'
import { allPosts, allPages } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {

    const urls = allPosts.map(p => {
        return {
            url: `${process.env.BASEURL}/${p.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        } as any
    }).concat(
        allPages.map(p => {
            return {
                url: `${process.env.BASEURL}/${p._raw.flattenedPath}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
            } as any
        }
    )).concat(
        [
            {
                url: `${process.env.BASEURL}/blog`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 1,
            } as any
        ]
    );

  return urls;
}
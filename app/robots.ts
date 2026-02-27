import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const siteUrl = "https://devmiguelgomez.com"

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    }
}

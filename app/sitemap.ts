import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://devmiguelgomez.com"
    const lastModified = new Date()

    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/#servicios`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/#sobre-mi`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/#proyectos`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/#testimonios`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/#contacto`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ]
}

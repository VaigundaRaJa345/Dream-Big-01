import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
    schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Dream Big Digital Solutions',
    image = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    schema
}) => {
    const siteTitle = 'DB Pro | Dream Big Digital Solutions';
    const fullTitle = title === name ? siteTitle : `${title} | ${siteTitle}`;

    // Organization Schema (JSON-LD)
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dream Big Digital Solutions",
        "alternateName": ["DB Pro", "DBPRO", "Dream Big Digital"],
        "url": "https://dbpro.digital",
        "logo": "https://dbpro.digital/favicon.png", // Assuming favicon is available there or we should use a proper logo url if available
        "sameAs": [
            // Add social profiles here if available
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={canonical || 'https://dbpro.digital'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schema || orgSchema)}
            </script>
        </Helmet>
    );
};

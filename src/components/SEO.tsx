import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'source code, jasa website, pembuatan website, PHP, MySQL, React, JavaScript, HTML, CSS, web development, programmer Indonesia',
  image = 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  url = 'https://gacorsolution.com',
  type = 'website'
}) => {
  const siteTitle = 'GacorSolution';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GacorSolution" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Indonesian" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="GacorSolution" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@gacorsolution" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GacorSolution",
          "description": "Penyedia source code berkualitas dan jasa pembuatan website profesional di Indonesia",
          "url": "https://gacorsolution.com",
          "logo": "https://gacorsolution.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-812-3456-7890",
            "contactType": "customer service",
            "availableLanguage": "Indonesian"
          },
          "sameAs": [
            "https://instagram.com/gacorsolution",
            "https://facebook.com/gacorsolution"
          ],
          "offers": {
            "@type": "Offer",
            "category": "Web Development Services"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
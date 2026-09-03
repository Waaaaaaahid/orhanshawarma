import { useEffect } from 'react';
import { seo, brand, contact, locations } from '@/data/restaurantData';

export function useSEO() {
  useEffect(() => {
    document.title = seo.title;

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', seo.description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    // Open Graph
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      );
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setOg('og:title', seo.title);
    setOg('og:description', seo.description);
    setOg('og:image', seo.ogImage);
    setOg('og:type', 'restaurant');

    // Twitter
    const setTwitter = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      );
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setTwitter('twitter:card', 'summary_large_image');
    setTwitter('twitter:title', seo.title);
    setTwitter('twitter:description', seo.description);
    setTwitter('twitter:image', seo.ogImage);

    // Structured data — Restaurant schema with only verified fields
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: brand.fullName,
      description: brand.shortDescription,
      servesCuisine: ['Shawarma', 'Street Food', 'Middle Eastern'],
      priceRange: '$$',
    };

    if (contact.phone && !contact.phone.includes('[ADD')) {
      schema.telephone = contact.phone;
    }
    if (contact.primaryAddress && !contact.primaryAddress.includes('[ADD')) {
      schema.address = {
        '@type': 'PostalAddress',
        streetAddress: contact.primaryAddress,
        addressLocality: 'Delhi NCR',
        addressCountry: 'IN',
      };
    }
    if (seo.ogImage) {
      schema.image = seo.ogImage;
    }

    const verifiedBranches = locations.filter(
      (loc) => loc.address && !loc.address.includes('[ADD')
    );
    if (verifiedBranches.length > 0) {
      schema.department = verifiedBranches.map((loc) => {
        const branch: Record<string, unknown> = {
          '@type': 'Restaurant',
          name: loc.name,
        };
        if (loc.phone && !loc.phone.includes('[ADD')) {
          branch.telephone = loc.phone;
        }
        if (loc.address && !loc.address.includes('[ADD')) {
          branch.address = {
            '@type': 'PostalAddress',
            streetAddress: loc.address,
            addressLocality: loc.city,
            addressCountry: 'IN',
          };
        }
        if (loc.mapsUrl && !loc.mapsUrl.includes('[ADD')) {
          branch.hasMap = loc.mapsUrl;
        }
        return branch;
      });
    }

    let scriptTag = document.getElementById(
      'restaurant-schema'
    ) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'restaurant-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, []);
}

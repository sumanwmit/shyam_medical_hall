import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  schemaType?: 'LocalBusiness' | 'AboutPage' | 'MedicalClinic' | 'Service' | 'FAQPage';
  faqItems?: Array<{ question: string; answer: string }>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  faqItems
}) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | SHYAM MEDICAL Jehanabad`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw && keywords) {
      metaKw.setAttribute('content', keywords);
    }

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Inject JSON-LD Schema
    const schemaData: Record<string, unknown>[] = [];

    // LocalBusiness / Pharmacy Schema
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': BUSINESS_INFO.name,
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200',
      '@id': `${window.location.origin}/#pharmacy`,
      'url': window.location.origin,
      'telephone': BUSINESS_INFO.displayPhone,
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': BUSINESS_INFO.address.line1,
        'addressLocality': BUSINESS_INFO.address.city,
        'addressRegion': BUSINESS_INFO.address.state,
        'postalCode': BUSINESS_INFO.address.pincode,
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2120,
        'longitude': 84.9750
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:00',
        'closes': '22:00'
      }
    });

    // FAQ Schema if provided
    if (faqItems && faqItems.length > 0) {
      schemaData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      });
    }

    // Breadcrumb Schema
    schemaData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        ...(canonicalPath ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': title,
          'item': `${window.location.origin}${canonicalPath}`
        }] : [])
      ]
    });

    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('json-ld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, faqItems]);

  return null;
};

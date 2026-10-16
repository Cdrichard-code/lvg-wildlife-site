export const SITE = 'https://lvgwildlife.com';
export const BUSINESS = { '@id': SITE + '/#business' };

// BreadcrumbList for a page: crumbs = [['Services', '/services'], ['Property assessment', '/property-assessment']]
export const breadcrumbs = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...crumbs].map(([name, path], i) => ({
    '@type': 'ListItem', position: i + 1, name, item: SITE + path,
  })),
});

export const service = ({ name, serviceType, description, path, areaServed = ['Texas', 'Oklahoma'] }) => ({
  '@type': 'Service', '@id': SITE + path + '#service', name, serviceType, description,
  provider: BUSINESS, url: SITE + path,
  areaServed: areaServed.map((s) => ({ '@type': 'State', name: s })),
});

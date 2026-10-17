// Site navigation, shared by the header, the phone menu and the footer.
export const nav = [
  { label: 'Services', href: '/services', key: 'services', children: [
    ['/property-assessment', 'Property assessment', 'We walk your land and report back'],
    ['/wildlife-management-plans', 'Wildlife management plans', 'The full plan, mapped and scheduled'],
    ['/annual-reports', 'Annual reports and yearly help', 'Keep the plan and records current'],
    ['/habitat-work', 'Habitat work', 'Food plots, brush, nest boxes and more'],
    ['/services', 'All services', ''],
  ] },
  { label: 'Texas wildlife exemption', href: '/wildlife-tax-valuation', key: 'tax' },
  { label: 'Resources', href: '/faq', key: 'resources', children: [
    ['/faq', 'Questions and answers', 'Search everything we get asked'],
    ['/wildlife-tax-valuation#estimate', 'Tax savings estimator', 'A rough range for your land'],
    ['/service-area', 'Counties we serve', 'North and East Texas, county by county'],
    ['/partners', 'For realtors and land brokers', 'Refer a rural buyer or seller'],
    ['/land-clearing', 'Land clearing', 'Mulching and site work from Land Value Group'],
  ] },
  { label: 'About', href: '/about', key: 'about' },
];

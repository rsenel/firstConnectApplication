/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Integration Views',
  description: 'Rendering additional data, some static, some dynamic.',
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',

  env: {
    development: {
      initialProjectKey: 'commercetools-poc-walbusch',
      hostUriPath:
        // '/tech-sales-good-store/orders/9a08bc59-3709-47ab-bae9-6654b85cad08/general',
        '/commercetools-poc-walbusch/customers',
    },
    production: {
      customViewId: '${env:CUSTOM_VIEW_ID}',
      url: '${env:APPLICATION_URL}',
    },
  },
  headers: {
    csp: {
      'script-src': ['*.fullstory.com/'],
      'connect-src': ['https://www.google.com/', 'https://api.trello.com'],
      'frame-src': ['https://www.google.com/'],
    },
  },
  oAuthScopes: {
    view: [
      'view_orders',
      'view_customers',
      'view_shopping_lists',
      'view_products',
    ],
    manage: ['manage_orders', 'manage_shopping_lists', 'manage_customers'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: [
    'customers.customer_details.general',
    'orders.order_details.general',
  ],
  labelAllLocales: [{ locale: 'en', value: 'Integration Views' }],
  additionalEnv: {
    googleMapKey: '${env:GOOGLE_MAP_KEY}',
    googleMapOrigin: '${env:GOOGLE_MAP_ORIGIN}',
  },
};

export default config;

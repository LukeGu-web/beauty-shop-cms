export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Beauty shop Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '4a4beda0-778e-45e8-990f-39f1f837f286',
            buildHookId: '636cce00ff69b5773ea53df0',
            name: 'beauty-shop-cms',
          },
          {
            title: 'Website',
            apiId: '0cc0e12c-e703-457b-a50e-df8276e19184',
            buildHookId: '636ccea5fe93f97812f708d3',
            name: 'beauti-shop',
            url: 'https://beauti-shop.netlify.app',
          },
        ],
      },
    },
  ],
};

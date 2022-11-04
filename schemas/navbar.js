export default {
  name: 'navbar',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          name: 'category',
          type: 'reference',
          to: [{ type: 'navbarCategory' }],
        },
      ],
    },
  ],
};

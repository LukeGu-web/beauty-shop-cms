export default {
  name: 'navbar',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'sections',
      type: 'array',
      of: [
        {
          name: 'section',
          type: 'reference',
          to: [{ type: 'navbarSection' }],
        },
      ],
    },
  ],
};

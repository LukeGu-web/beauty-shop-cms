export default {
  name: 'navbar',
  type: 'document',
  title: 'Navbar',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{ type: 'navbarCategory' }],
        },
      ],
    },
  ],
};

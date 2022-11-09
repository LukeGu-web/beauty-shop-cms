export default {
  name: 'navbarSection',
  type: 'document',
  title: 'Navbar section',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'items',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'isBlockItem',
              type: 'boolean',
              title: 'Is a block item',
            },
            {
              name: 'blockItem',
              type: 'object',
              title: 'Block item',
              hidden: ({ parent }) => !parent.isBlockItem,
              fields: [
                {
                  name: 'product',
                  type: 'reference',
                  to: [{ type: 'product' }],
                },
                {
                  name: 'imageSrc',
                  type: 'image',
                  title: 'Image source',
                },
              ],
            },
            {
              name: 'listName',
              type: 'string',
              title: 'List name',
              hidden: ({ parent }) => parent.isBlockItem,
            },
            {
              name: 'listLink',
              type: 'reference',
              to: [{ type: 'product' }],
              hidden: ({ parent }) => parent.isBlockItem,
            },
            {
              name: 'listItems',
              type: 'array',
              title: 'List items',
              hidden: ({ parent }) => parent.isBlockItem,
              of: [
                {
                  name: 'listItem',
                  type: 'object',
                  title: 'List item',
                  fields: [
                    {
                      name: 'name',
                      type: 'string',
                    },
                    {
                      name: 'product',
                      type: 'reference',
                      to: [{ type: 'product' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

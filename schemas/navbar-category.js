export default {
  name: 'navbarCategory',
  type: 'document',
  title: 'Navbar category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
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
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'imageSrc',
                  type: 'image',
                  title: 'Image source',
                },
                {
                  name: 'link',
                  type: 'url',
                  title: 'Link',
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
              type: 'url',
              title: 'List link',
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
                      name: 'title',
                      type: 'string',
                      title: 'Title',
                    },
                    {
                      name: 'link',
                      type: 'url',
                      title: 'Link',
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
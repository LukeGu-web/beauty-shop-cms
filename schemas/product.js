import SlugInput from 'sanity-plugin-prefixed-slug';
import { slugGenerator } from '../utilities/slug-generator.js';

export default {
  name: 'product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: 'name',
        maxLength: 30,
        slugify: (input) => slugGenerator(input),
      },
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      title: 'Hero section',
      name: 'heroSection',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'leftButtonLabel', title: 'Left button label', type: 'string' },
        { name: 'leftButtonLink', title: 'Left button link', type: 'url' },
        {
          name: 'rightButtonLabel',
          title: 'Right button label',
          type: 'string',
        },
        { name: 'rightButtonLink', title: 'Right button link', type: 'url' },
        {
          name: 'imageSrc',
          type: 'image',
          title: 'Image source',
        },
      ],
    },
  ],
};
